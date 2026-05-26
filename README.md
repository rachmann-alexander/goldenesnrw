# 🍺 NRW Bier Karte

Interaktive Karte aller **Trinkgut-Filialen in NRW** mit Anzeige, welche regionalen NRW-Biere dort erhältlich sind.

**→ [Zur Karte](https://DEIN-NAME.github.io/nrw-bier-karte)**

---

## Aufbau

```
├── index.html               # GitHub Pages Frontend (Leaflet-Karte)
├── data/
│   └── biere.json           # Gecrawlte NRW-Bierliste (täglich aktualisiert)
├── crawler/
│   └── crawl_trinkgut.py    # Python-Crawler für trinkgut.de
└── .github/workflows/
    └── crawl.yml            # GitHub Action: täglich um 4:00 UTC
```

## Datenquellen

| Quelle | Was | Wie |
|--------|-----|-----|
| [Overpass API](https://overpass-api.de) | Trinkgut-Filialen in NRW | Live im Browser |
| [trinkgut.de](https://www.trinkgut.de) | NRW-Biersortiment | GitHub Action (täglich) |

## GitHub Pages einrichten

1. Repo forken oder neu erstellen
2. Dateien pushen
3. **Settings → Pages → Branch: `main` → Folder: `/root` → Save**
4. Fertig: `https://DEIN-NAME.github.io/REPO-NAME`

## GitHub Action

Die Action `crawl.yml` läuft **täglich um 4:00 UTC** (5 Uhr MEZ / 6 Uhr MESZ):

1. Crawlt `trinkgut.de` nach Bieren
2. Filtert NRW-Produkte nach Brauerei-Whitelist
3. Schreibt `data/biere.json`
4. Committet automatisch bei Änderungen

Manuell auslösen: **Actions → Trinkgut NRW-Biere crawlen → Run workflow**

## Lokale Entwicklung

```bash
# Crawler lokal testen
pip install requests beautifulsoup4 lxml
python crawler/crawl_trinkgut.py

# Seite lokal servieren (wichtig wegen fetch() CORS)
python -m http.server 8000
# → http://localhost:8000
```

## NRW-Brauereien (Whitelist)

Warsteiner · Krombacher · Veltins · DAB · Diebels · Uerige · Füchschen · Schumacher · Gaffel · Reissdorf · Früh · Sion · Dom · Päffgen · Peters · Stifts · Bolten · Hannen · Frankenheim · Schlösser · König · Brinkhoff · Dortmunder Union · Pinkus Müller · Herforder · Isenbeck · Schwelmer · Ritter

---

*Kartendaten: © OpenStreetMap-Mitwirkende | Tiles: © CartoDB*
