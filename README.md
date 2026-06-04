# Goldenes NRW – Bierangebote &amp; Brauereien

Interaktive Karte mit **regionalen Bierangeboten in NRW** (Quelle: marktguru, inoffiziell) und einer **Stammhaus-Ebene** für NRW-Brauereien.

**→ [Zur Karte](https://rachmann-alexander.github.io/goldenesnrw)**

---

## Aufbau

```
├── index.html               # GitHub Pages Frontend (Leaflet-Karte)
├── impressum.html           # Impressum
├── methodik.html            # Fachliche Erläuterung der Datenpipeline
├── pages.css                # Gemeinsame Styles für Impressum & Methodik
├── config.mjs               # NRW-Brauereien inkl. Stammhaus-Metadaten
├── config/
│   ├── stammhaus-details.mjs # Recherche-Daten für große Brauereien
│   └── nrw-orte.mjs          # NRW-Orte (PLZ + Koordinaten) für marktguru-Abfrage
├── data/
│   ├── angebote.json        # Regionale Bierangebote (täglich aktualisiert)
│   ├── brauereien.json      # Exportierte Brauerei-/Stammhaus-Daten
│   └── nrw-grenze.geojson   # Landesgrenze NRW (GeoJSON)
├── scripts/
│   └── export-brauereien.mjs
├── crawler/
│   └── fetch_marktguru.mjs  # Node.js-Abruf der marktguru-Angebote
├── package.json
└── .github/workflows/
    └── crawl.yml            # GitHub Action: täglich um 4:00 UTC
```

## Datenquellen

| Quelle | Was | Wie |
|--------|-----|-----|
| [marktguru.de](https://www.marktguru.de) (inoffiziell) | Regionale Bierangebote in NRW | GitHub Action (täglich, Node.js) |
| [Wikipedia](https://de.wikipedia.org/wiki/Liste_der_Brauereien_in_Nordrhein-Westfalen) | Brauerei-Referenz NRW | `config.mjs` |
| [deutschlandGeoJSON](https://github.com/isellsoap/deutschlandGeoJSON) | Landesgrenze NRW | `data/nrw-grenze.geojson` |

> **Hinweis zur Quelle:** marktguru bietet keine öffentlich dokumentierte API. Die nötigen
> API-Schlüssel werden – wie im Browser der Website selbst – aus dem eingebetteten
> JSON-Konfigurationsblock der Startseite gelesen. Die Nutzung erfolgt ausschließlich zu
> Lehr-/Demozwecken; es besteht keine Verbindung zu oder Freigabe durch marktguru.
> Angebote sind regional (nach PLZ), nicht filialgenau.

## Karten-Ebenen

| Ebene | Beschreibung |
|-------|--------------|
| **Landesgrenze** | NRW-Umriss (permanent sichtbar) |
| **Angebote** | Regionale Bierangebote, gebündelt am Stadt-/PLZ-Mittelpunkt |
| **Stammhäuser** | Brauerei-Stammhäuser mit Metadaten (Adresse, GF, Absatz, …) |

Metadaten werden in [`config.mjs`](config.mjs) gepflegt und per `npm run export:brauereien` nach [`data/brauereien.json`](data/brauereien.json) exportiert. Brauereien ohne Koordinaten erscheinen in der Brauerei-Liste, aber ohne Kartenmarker.

## GitHub Pages einrichten

1. Repo forken oder neu erstellen
2. Dateien pushen
3. **Settings → Pages → Branch: `main` → Folder: `/root` → Save**
4. Fertig: `https://DEIN-NAME.github.io/REPO-NAME`

## GitHub Action

Die Action `crawl.yml` läuft **täglich um 4:00 UTC** (5 Uhr MEZ / 6 Uhr MESZ):

1. Ruft marktguru-Angebote für die NRW-Orte aus `config/nrw-orte.mjs` ab
2. Schreibt `data/angebote.json`
3. Exportiert `data/brauereien.json` aus `config.mjs`
4. Committet automatisch bei Änderungen

Manuell auslösen: **Actions → marktguru NRW-Bierangebote abrufen → Run workflow**

## Lokale Entwicklung

```bash
npm install
npm run fetch:angebote       # angebote.json erzeugen (Netzwerkzugriff nötig)
npm run export:brauereien    # brauereien.json erzeugen

# Seite lokal servieren (wichtig wegen fetch() CORS)
npx serve .
# → http://localhost:3000
```

## NRW-Brauereien (Referenz)

Die Liste in [`config.mjs`](config.mjs) basiert auf der [Wikipedia-Liste der Brauereien in NRW](https://de.wikipedia.org/wiki/Liste_der_Brauereien_in_Nordrhein-Westfalen). Für ~30 große und bekannte Brauereien sind Stammhaus-Adressen und Koordinaten hinterlegt; weitere Felder können ergänzt werden.

Fehlt eine Brauerei oder ein Stammhaus? [ki@hs-niederrhein.de](mailto:ki@hs-niederrhein.de)

---

*Kartendaten: © OpenStreetMap-Mitwirkende | Tiles: © CartoDB | Angebote: marktguru.de (inoffiziell)*
