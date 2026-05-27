# Goldenes NRW – Indie-Biere aus NRW

Interaktive Karte der **Trinkgut-Filialen in NRW** mit regionalen Indie-Bieren aus Nordrhein-Westfalen.

**→ [Zur Karte](https://rachmann-alexander.github.io/goldenesnrw)**

---

## Aufbau

```
├── index.html               # GitHub Pages Frontend (Leaflet-Karte)
├── config.mjs               # NRW-Brauerei-Whitelist (Wikipedia-Referenz)
├── data/
│   └── biere.json           # Gecrawlte NRW-Bierliste (täglich aktualisiert)
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
4. Committet automatisch bei Änderungen

Manuell auslösen: **Actions → Trinkgut NRW-Biere crawlen → Run workflow**

## Lokale Entwicklung

```bash
# Crawler lokal testen
npm install
npm run crawl

# Seite lokal servieren (wichtig wegen fetch() CORS)
npx serve .
# → http://localhost:3000
```

## NRW-Brauereien (Referenz)

Die Whitelist in [`config.mjs`](config.mjs) basiert auf der [Wikipedia-Liste der Brauereien in NRW](https://de.wikipedia.org/wiki/Liste_der_Brauereien_in_Nordrhein-Westfalen) (~168 Brauereien).

Fehlt eine Brauerei? [ki@hs-niederrhein.de](mailto:ki@hs-niederrhein.de)

---

*Kartendaten: © OpenStreetMap-Mitwirkende | Tiles: © CartoDB*
