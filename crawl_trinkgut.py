#!/usr/bin/env python3
"""
Trinkgut NRW-Bier Crawler
Crawlt trinkgut.de nach Bieren und filtert NRW-Produkte.
Schreibt Ergebnis nach data/biere.json
"""

import json
import time
import re
import sys
from pathlib import Path
from datetime import datetime, timezone

import requests
from bs4 import BeautifulSoup

# ── Konfiguration ─────────────────────────────────────────────────────────
BASE_URL = "https://www.trinkgut.de"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; NRWBierKarte/1.0; +https://github.com/)",
    "Accept-Language": "de-DE,de;q=0.9",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
}
DELAY = 1.5  # Sekunden zwischen Requests

OUTPUT_DIR = Path(__file__).parent.parent / "data"
OUTPUT_FILE = OUTPUT_DIR / "biere.json"

# ── NRW-Brauereien (Whitelist) ────────────────────────────────────────────
NRW_BRAUEREIEN = {
    "Warsteiner":          ["Warsteiner Pilsner", "Warsteiner Dunkel", "Warsteiner Herb", "Warsteiner Alkoholfrei"],
    "Krombacher":          ["Krombacher Pils", "Krombacher Weizen", "Krombacher Dunkel", "Krombacher Radler", "Krombacher Alkoholfrei"],
    "Veltins":             ["Veltins Pilsener", "Veltins Alkoholfrei", "V+ Energy"],
    "DAB":                 ["DAB Original", "DAB Export", "DAB Alkoholfrei"],
    "Diebels":             ["Diebels Alt", "Diebels Alkoholfrei"],
    "Uerige":              ["Uerige Alt", "Uerige Sticke"],
    "Füchschen":           ["Füchschen Alt"],
    "Schumacher":          ["Schumacher Alt"],
    "Gaffel":              ["Gaffel Kölsch", "Gaffel Radler"],
    "Reissdorf":           ["Reissdorf Kölsch"],
    "Früh":                ["Früh Kölsch", "Früh Alkoholfrei"],
    "Sion":                ["Sion Kölsch"],
    "Dom Kölsch":          ["Dom Kölsch"],
    "Päffgen":             ["Päffgen Kölsch"],
    "Peters":              ["Peters Kölsch"],
    "Stifts":              ["Stifts Kölsch"],
    "Bolten":              ["Bolten Alt", "Bolten Ur-Alt"],
    "Hannen":              ["Hannen Alt"],
    "Frankenheim":         ["Frankenheim Alt", "Frankenheim Blue"],
    "Schlösser":           ["Schlösser Alt"],
    "König":               ["König Pilsener", "König Alkoholfrei"],
    "Brinkhoff":           ["Brinkhoffs No. 1"],
    "Dortmunder Union":    ["DUB Export"],
    "Pinkus Müller":       ["Pinkus Alt", "Pinkus Weizen"],
    "Herforder":           ["Herforder Pils", "Herforder Radler"],
    "Isenbeck":            ["Isenbeck Pils", "Isenbeck Export"],
    "Schwelmer":           ["Schwelmer Märzen", "Schwelmer Pils"],
    "Ritter":              ["Ritter Bier"],
}

# Keywords für Fuzzy-Erkennung in Produktnamen
NRW_KEYWORDS = list(NRW_BRAUEREIEN.keys()) + [
    "Kölsch", "Altbier", "Alt ", " Alt", "Ruhrgebiet",
    "Dortmund", "Düsseldorf", "Köln", "Münster", "NRW",
    "Nordrhein-Westfalen", "Bergisch", "Rheinisch"
]

# Nicht-NRW-Treffer ausschließen (trotz Keyword-Match)
EXCLUDE_KEYWORDS = [
    "Bitburger", "Bitburg",   # Rheinland-Pfalz
    "Köstritzer",              # Thüringen
    "Mönchshof",               # Bayern
    "Erdinger", "Paulaner", "Augustiner", "Franziskaner",  # Bayern
    "Radeberger",              # Sachsen
    "Becks", "Haake-Beck",     # Bremen
    "Jever",                   # Niedersachsen
    "Flensburger",             # Schleswig-Holstein
]


def get(url: str, **kwargs) -> requests.Response | None:
    """HTTP GET mit Fehlerbehandlung."""
    try:
        r = requests.get(url, headers=HEADERS, timeout=15, **kwargs)
        r.raise_for_status()
        return r
    except requests.RequestException as e:
        print(f"  ⚠ GET {url} → {e}", file=sys.stderr)
        return None


def is_nrw_bier(name: str) -> bool:
    """Gibt True zurück, wenn der Produktname ein NRW-Bier ist."""
    name_lower = name.lower()
    for ex in EXCLUDE_KEYWORDS:
        if ex.lower() in name_lower:
            return False
    for kw in NRW_KEYWORDS:
        if kw.lower() in name_lower:
            return True
    return False


def extract_products_from_page(html: str) -> list[dict]:
    """Extrahiert Produktnamen aus einer Trinkgut-Kategorie-Seite."""
    soup = BeautifulSoup(html, "html.parser")
    products = []

    # Verschiedene mögliche Selektoren (trinkgut.de kann sich ändern)
    selectors = [
        "span.product-name",
        "div.product-name",
        "h2.product-title",
        "a.product-link",
        "[class*='product'][class*='name']",
        "[class*='item-name']",
        "[class*='article-name']",
    ]

    seen = set()
    for sel in selectors:
        for el in soup.select(sel):
            text = el.get_text(strip=True)
            if text and len(text) > 3 and text not in seen:
                seen.add(text)
                products.append({"name": text, "selector": sel})

    # Fallback: alle Links mit bier-relevanten Texten
    if not products:
        for a in soup.find_all("a", href=True):
            text = a.get_text(strip=True)
            if any(kw.lower() in text.lower() for kw in ["bier", "pils", "kölsch", "alt", "weizen", "lager"]):
                if text not in seen and len(text) > 3:
                    seen.add(text)
                    products.append({"name": text, "selector": "a[href]"})

    return products


def crawl_category(path: str) -> list[dict]:
    """Crawlt eine Produktkategorie über mehrere Seiten."""
    all_products = []
    page = 1

    while True:
        url = f"{BASE_URL}{path}?page={page}" if page > 1 else f"{BASE_URL}{path}"
        print(f"  → Seite {page}: {url}")
        r = get(url)
        if not r:
            break

        products = extract_products_from_page(r.text)
        if not products:
            print(f"    Keine Produkte gefunden (Ende der Paginierung)")
            break

        all_products.extend(products)
        print(f"    {len(products)} Produkte auf Seite {page}")

        # Prüfe ob es eine nächste Seite gibt
        soup = BeautifulSoup(r.text, "html.parser")
        next_btn = soup.select_one("a[aria-label='Nächste Seite'], a.next, [class*='pagination'][class*='next']")
        if not next_btn:
            break

        page += 1
        time.sleep(DELAY)
        if page > 20:  # Sicherheitsgrenze
            break

    return all_products


def discover_beer_categories() -> list[str]:
    """Findet Bier-Kategorien auf der Trinkgut-Website."""
    print("Suche Bier-Kategorien…")
    r = get(BASE_URL)
    if not r:
        return ["/sortiment/bier", "/bier", "/getraenke/bier"]

    soup = BeautifulSoup(r.text, "html.parser")
    paths = set()

    for a in soup.find_all("a", href=True):
        href = a["href"]
        text = a.get_text(strip=True).lower()
        if "bier" in href.lower() or "bier" in text:
            path = href if href.startswith("/") else "/" + href.lstrip("/")
            if len(path) < 80 and "?" not in path:
                paths.add(path)

    # Sitemap als Fallback
    sitemap = get(f"{BASE_URL}/sitemap.xml")
    if sitemap:
        urls = re.findall(r'<loc>(.*?)</loc>', sitemap.text)
        for url in urls:
            if "bier" in url.lower():
                path = url.replace(BASE_URL, "")
                if path and len(path) < 80:
                    paths.add(path)

    result = list(paths) if paths else ["/sortiment/bier", "/bier"]
    print(f"  Gefundene Kategoriepfade: {result}")
    return result


def main():
    print("=" * 60)
    print("Trinkgut NRW-Bier Crawler")
    print(f"Start: {datetime.now(timezone.utc).isoformat()}")
    print("=" * 60)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # 1. Kategorien entdecken
    categories = discover_beer_categories()
    time.sleep(DELAY)

    # 2. Alle Produkte crawlen
    all_raw = []
    for cat in categories:
        print(f"\nKategorie: {cat}")
        products = crawl_category(cat)
        all_raw.extend(products)
        time.sleep(DELAY)

    print(f"\nInsgesamt {len(all_raw)} Produkte gefunden (roh)")

    # 3. Deduplizieren
    seen_names = set()
    unique = []
    for p in all_raw:
        if p["name"] not in seen_names:
            seen_names.add(p["name"])
            unique.append(p)
    print(f"Nach Deduplizierung: {len(unique)} Produkte")

    # 4. NRW-Filter
    nrw_biere = []
    for p in unique:
        if is_nrw_bier(p["name"]):
            # Brauerei zuordnen
            brauerei = "Unbekannt"
            for b in NRW_BRAUEREIEN:
                if b.lower() in p["name"].lower():
                    brauerei = b
                    break
            nrw_biere.append({
                "name": p["name"],
                "brauerei": brauerei,
            })

    print(f"NRW-Biere identifiziert: {len(nrw_biere)}")

    # 5. Fallback: Wenn Crawl keine Ergebnisse liefert, Basis-Liste verwenden
    if len(nrw_biere) < 5:
        print("⚠ Zu wenige Crawl-Ergebnisse – verwende Basis-Brauerei-Liste als Fallback")
        nrw_biere = []
        for brauerei, biere in NRW_BRAUEREIEN.items():
            for bier in biere:
                nrw_biere.append({"name": bier, "brauerei": brauerei})

    # 6. Output schreiben
    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": "trinkgut.de (gecrawlt) + NRW-Brauerei-Basisliste",
        "count": len(nrw_biere),
        "biere": nrw_biere,
        "alle_brauereien": list(NRW_BRAUEREIEN.keys()),
    }

    OUTPUT_FILE.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n✓ Geschrieben: {OUTPUT_FILE}")
    print(f"  {len(nrw_biere)} NRW-Biere in {len(set(b['brauerei'] for b in nrw_biere))} Brauereien")

    # Kurze Übersicht ausgeben
    for bier in nrw_biere[:10]:
        print(f"  • {bier['name']} ({bier['brauerei']})")
    if len(nrw_biere) > 10:
        print(f"  … und {len(nrw_biere) - 10} weitere")


if __name__ == "__main__":
    main()
