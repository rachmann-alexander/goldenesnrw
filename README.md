# Goldenes NRW – Indie-Biere aus NRW

Interaktive Karte der **Trinkgut-Filialen in NRW** mit regionalen Indie-Bieren aus Nordrhein-Westfalen und einer **Stammhaus-Ebene** für NRW-Brauereien.

**→ [Zur Karte](https://rachmann-alexander.github.io/goldenesnrw)**

---

## Aufbau

```
├── index.html               # GitHub Pages Frontend (Leaflet-Karte)
├── impressum.html           # Impressum
├── methodik.html            # Fachliche Erläuterung der Datenpipeline
├── pages.css                # Gemeinsame Styles für Impressum & Methodik
├── config.mjs               # NRW-Brauereien inkl. Stammhaus-Metadaten
├── config/stammhaus-details.mjs  # Recherche-Daten für große Brauereien
├── data/
│   ├── biere.json           # Gecrawlte NRW-Bierliste (täglich aktualisiert)
│   ├── brauereien.json      # Exportierte Brauerei-/Stammhaus-Daten
│   └── nrw-grenze.geojson   # Landesgrenze NRW (GeoJSON)
├── scripts/
│   └── export-brauereien.mjs
├── crawler/
│   └── crawl_trinkgut.mjs   # Node.js-Crawler für trinkgut.de
├── package.json             # Crawler-Abhängigkeiten (cheerio)
└── .github/workflows/
    └── crawl.yml            # GitHub Action: täglich um 4:00 UTC
```

## Datenquellen

| Quelle | Was | Wie |
|--------|-----|-----|
| [Overpass API](https://overpass-api.de) | Trinkgut-Filialen in NRW | Live im Browser |
| [trinkgut.de](https://www.trinkgut.de) | Indie-Biersortiment NRW | GitHub Action (täglich, Node.js) |
| [Wikipedia](https://de.wikipedia.org/wiki/Liste_der_Brauereien_in_Nordrhein-Westfalen) | Brauerei-Referenz NRW | `config.mjs` |
| [deutschlandGeoJSON](https://github.com/isellsoap/deutschlandGeoJSON) | Landesgrenze NRW | `data/nrw-grenze.geojson` |

## Karten-Ebenen

| Ebene | Beschreibung |
|-------|--------------|
| **Landesgrenze** | NRW-Umriss (permanent sichtbar) |
| **Filialen** | Trinkgut-Markierungen mit simuliert zugeordneten Indie-Bieren |
| **Bier-Schicht** | Verteilungsgebiet (Convex Hull) pro Biersorte |
| **Stammhäuser** | Brauerei-Stammhäuser mit Metadaten (Adresse, GF, Absatz, …) |

Metadaten werden in [`config.mjs`](config.mjs) gepflegt und per `npm run export:brauereien` nach [`data/brauereien.json`](data/brauereien.json) exportiert. Brauereien ohne Koordinaten erscheinen in der Brauerei-Liste, aber ohne Kartenmarker.

## GitHub Pages einrichten

1. Repo forken oder neu erstellen
2. Dateien pushen
3. **Settings → Pages → Branch: `main` → Folder: `/root` → Save**
4. Fertig: `https://DEIN-NAME.github.io/REPO-NAME`

## GitHub Action

Die Action `crawl.yml` läuft **täglich um 4:00 UTC** (5 Uhr MEZ / 6 Uhr MESZ):

1. Crawlt `trinkgut.de` nach Bieren (Node.js + cheerio)
2. Filtert NRW-Produkte nach Brauerei-Whitelist
3. Schreibt `data/biere.json`
4. Exportiert `data/brauereien.json` aus `config.mjs`
5. Committet automatisch bei Änderungen

Manuell auslösen: **Actions → Trinkgut NRW-Biere crawlen → Run workflow**

## Lokale Entwicklung

```bash
npm install
npm run crawl              # biere.json erzeugen
npm run export:brauereien    # brauereien.json erzeugen

# Seite lokal servieren (wichtig wegen fetch() CORS)
npx serve .
# → http://localhost:3000
```

## NRW-Brauereien (Referenz)

Die Whitelist in [`config.mjs`](config.mjs) basiert auf der [Wikipedia-Liste der Brauereien in NRW](https://de.wikipedia.org/wiki/Liste_der_Brauereien_in_Nordrhein-Westfalen) (~168 Brauereien). Für ~30 große und bekannte Brauereien sind Stammhaus-Adressen und Koordinaten hinterlegt; weitere Felder können ergänzt werden.

Fehlt eine Brauerei oder ein Stammhaus? [ki@hs-niederrhein.de](mailto:ki@hs-niederrhein.de)

---

*Kartendaten: © OpenStreetMap-Mitwirkende | Tiles: © CartoDB*
