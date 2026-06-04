/**
 * marktguru NRW-Bierangebote
 *
 * Ruft über die (inoffizielle) marktguru-API echte Bier-Angebote für
 * repräsentative NRW-Orte ab und schreibt das Ergebnis nach data/angebote.json.
 *
 * Hinweis: Die API-Keys werden – wie von der marktguru-Website selbst –
 * aus dem eingebetteten JSON-Config-Block der Startseite gelesen.
 * Nutzung ausschließlich zu Lehr-/Demozwecken. Datenquelle: marktguru.de
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { NRW_ORTE } from "../config/nrw-orte.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "angebote.json");

const QUERY = "bier";
const DELAY_MS = 1200;
const PER_REGION_LIMIT = 60;

const USER_AGENT =
  "Mozilla/5.0 (compatible; GoldenesNRW/1.0; Lehrprojekt; +mailto:ki@hs-niederrhein.de)";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Liest apiKey + clientKey aus dem JSON-Config-Block der marktguru-Startseite.
 */
async function getKeys() {
  const resp = await fetch("https://www.marktguru.de/", {
    headers: { "User-Agent": USER_AGENT, "Accept-Language": "de-DE,de;q=0.9" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!resp.ok) throw new Error(`Startseite HTTP ${resp.status}`);
  const html = await resp.text();

  const regex = /<script\s+type="application\/json">(.*?)<\/script>/gms;
  let match;
  let config = null;
  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed?.config?.apiKey && parsed?.config?.clientKey) {
        config = parsed.config;
        break;
      }
    } catch {
      // weiter suchen
    }
  }
  if (!config) throw new Error("API-Keys nicht im Seitenquelltext gefunden");
  return { apiKey: config.apiKey, clientKey: config.clientKey };
}

function isoDate(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

function normalizeOffer(offer) {
  const validity = Array.isArray(offer.validityDates) ? offer.validityDates[0] : null;
  return {
    produkt: offer.product?.name ?? offer.description ?? "Bier",
    marke: offer.brand?.name ?? null,
    haendler: (offer.advertisers ?? []).map((a) => a.name).filter(Boolean),
    preis: typeof offer.price === "number" ? offer.price : null,
    alt_preis: typeof offer.oldPrice === "number" ? offer.oldPrice : null,
    einheit: offer.unit?.name ?? null,
    grundpreis: typeof offer.referencePrice === "number" ? offer.referencePrice : null,
    gueltig_von: isoDate(validity?.from),
    gueltig_bis: isoDate(validity?.to),
    kategorie: (offer.categories ?? []).map((c) => c.name).filter(Boolean)[0] ?? null,
  };
}

async function fetchOffers(keys, zipCode) {
  const url = new URL("https://api.marktguru.de/api/v1/offers/search");
  url.searchParams.set("as", "web");
  url.searchParams.set("q", QUERY);
  url.searchParams.set("limit", "1000");
  url.searchParams.set("offset", "0");
  url.searchParams.set("zipCode", zipCode);

  const resp = await fetch(url, {
    headers: {
      "x-apikey": keys.apiKey,
      "x-clientkey": keys.clientKey,
      "User-Agent": USER_AGENT,
      Accept: "application/json",
    },
    signal: AbortSignal.timeout(30_000),
  });
  if (!resp.ok) throw new Error(`offers/search HTTP ${resp.status}`);
  const data = await resp.json();
  return Array.isArray(data.results) ? data.results : [];
}

async function main() {
  console.log("=".repeat(60));
  console.log("marktguru NRW-Bierangebote");
  console.log(`Start: ${new Date().toISOString()}`);
  console.log("=".repeat(60));

  await mkdir(OUTPUT_DIR, { recursive: true });

  const keys = await getKeys();
  console.log("✓ API-Keys geladen");

  const regionen = [];
  let totalOffers = 0;

  for (const ort of NRW_ORTE) {
    try {
      const raw = await fetchOffers(keys, ort.plz);
      const seen = new Set();
      const angebote = [];
      for (const offer of raw) {
        if (offer.id != null && seen.has(offer.id)) continue;
        if (offer.id != null) seen.add(offer.id);
        angebote.push(normalizeOffer(offer));
      }
      angebote.sort((a, b) => (a.preis ?? 1e9) - (b.preis ?? 1e9));
      const limited = angebote.slice(0, PER_REGION_LIMIT);
      regionen.push({
        stadt: ort.stadt,
        plz: ort.plz,
        lat: ort.lat,
        lon: ort.lon,
        anzahl: angebote.length,
        angebote: limited,
      });
      totalOffers += angebote.length;
      console.log(`  ${ort.stadt} (${ort.plz}): ${angebote.length} Angebote`);
    } catch (error) {
      console.error(`  ⚠ ${ort.stadt} (${ort.plz}) → ${error.message}`);
      regionen.push({
        stadt: ort.stadt,
        plz: ort.plz,
        lat: ort.lat,
        lon: ort.lon,
        anzahl: 0,
        angebote: [],
      });
    }
    await sleep(DELAY_MS);
  }

  const output = {
    generated_at: new Date().toISOString(),
    source: "marktguru.de (inoffizielle API)",
    query: QUERY,
    region_count: regionen.length,
    offer_count: totalOffers,
    regionen,
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf-8");
  console.log(`\n✓ Geschrieben: ${OUTPUT_FILE}`);
  console.log(`  ${regionen.length} Regionen, ${totalOffers} Angebote gesamt`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
