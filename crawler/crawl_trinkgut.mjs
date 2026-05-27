/**
 * Trinkgut NRW-Bier Crawler
 * Crawlt trinkgut.de nach Bieren und filtert NRW-Produkte.
 * Schreibt Ergebnis nach data/biere.json
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import {
  BASE_URL,
  BEER_LINK_KEYWORDS,
  DEFAULT_CATEGORIES,
  DELAY,
  EXCLUDE_KEYWORDS,
  HEADERS,
  NRW_BRAUEREIEN,
  NRW_KEYWORDS,
  PRODUCT_SELECTORS,
  getBrauereiBiere,
} from "../config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "biere.json");

function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function get(url) {
  try {
    const response = await fetch(url, {
      headers: HEADERS,
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`  ⚠ GET ${url} → ${error.message}`);
    return null;
  }
}

function isNrwBier(name) {
  const nameLower = name.toLowerCase();
  for (const ex of EXCLUDE_KEYWORDS) {
    if (nameLower.includes(ex.toLowerCase())) {
      return false;
    }
  }
  for (const kw of NRW_KEYWORDS) {
    if (nameLower.includes(kw.toLowerCase())) {
      return true;
    }
  }
  return false;
}

function extractProductsFromPage(html) {
  const $ = cheerio.load(html);
  const products = [];
  const seen = new Set();

  for (const sel of PRODUCT_SELECTORS) {
    $(sel).each((_, el) => {
      const text = $(el).text().trim();
      if (text && text.length > 3 && !seen.has(text)) {
        seen.add(text);
        products.push({ name: text, selector: sel });
      }
    });
  }

  if (products.length === 0) {
    $("a[href]").each((_, el) => {
      const text = $(el).text().trim();
      if (
        text.length > 3 &&
        !seen.has(text) &&
        BEER_LINK_KEYWORDS.some((kw) => text.toLowerCase().includes(kw))
      ) {
        seen.add(text);
        products.push({ name: text, selector: "a[href]" });
      }
    });
  }

  return products;
}

async function crawlCategory(categoryPath) {
  const allProducts = [];
  let page = 1;

  while (true) {
    const url =
      page > 1
        ? `${BASE_URL}${categoryPath}?page=${page}`
        : `${BASE_URL}${categoryPath}`;
    console.log(`  → Seite ${page}: ${url}`);

    const html = await get(url);
    if (!html) {
      break;
    }

    const products = extractProductsFromPage(html);
    if (products.length === 0) {
      console.log("    Keine Produkte gefunden (Ende der Paginierung)");
      break;
    }

    allProducts.push(...products);
    console.log(`    ${products.length} Produkte auf Seite ${page}`);

    const $ = cheerio.load(html);
    const nextBtn = $(
      "a[aria-label='Nächste Seite'], a.next, [class*='pagination'][class*='next']"
    ).first();

    if (nextBtn.length === 0) {
      break;
    }

    page += 1;
    await sleep(DELAY);
    if (page > 20) {
      break;
    }
  }

  return allProducts;
}

async function discoverBeerCategories() {
  console.log("Suche Bier-Kategorien…");
  const html = await get(BASE_URL);
  if (!html) {
    return DEFAULT_CATEGORIES;
  }

  const $ = cheerio.load(html);
  const paths = new Set();

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href") ?? "";
    const text = $(el).text().trim().toLowerCase();
    if (href.toLowerCase().includes("bier") || text.includes("bier")) {
      const categoryPath = normalizeCategoryPath(href);
      if (categoryPath) {
        paths.add(categoryPath);
      }
    }
  });

  const sitemap = await get(`${BASE_URL}/sitemap.xml`);
  if (sitemap) {
    const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    for (const url of urls) {
      if (url.toLowerCase().includes("bier")) {
        const categoryPath = normalizeCategoryPath(url);
        if (categoryPath) {
          paths.add(categoryPath);
        }
      }
    }
  }

  const result = paths.size > 0 ? [...paths] : DEFAULT_CATEGORIES;
  console.log(`  Gefundene Kategoriepfade: ${result}`);
  return result;
}

function normalizeCategoryPath(href) {
  if (!href) return null;

  let categoryPath = href.trim();
  if (categoryPath.startsWith(BASE_URL)) {
    categoryPath = categoryPath.slice(BASE_URL.length);
  } else if (!categoryPath.startsWith("/")) {
    categoryPath = `/${categoryPath.replace(/^\/+/, "")}`;
  }

  if (!categoryPath || categoryPath.length >= 80 || categoryPath.includes("?")) {
    return null;
  }

  return categoryPath;
}

function buildFallbackList() {
  const nrwBiere = [];
  for (const brauerei of Object.keys(NRW_BRAUEREIEN)) {
    for (const bier of getBrauereiBiere(brauerei)) {
      nrwBiere.push({ name: bier, brauerei });
    }
  }
  return nrwBiere;
}

async function main() {
  console.log("=".repeat(60));
  console.log("Trinkgut NRW-Bier Crawler");
  console.log(`Start: ${new Date().toISOString()}`);
  console.log("=".repeat(60));

  await mkdir(OUTPUT_DIR, { recursive: true });

  const categories = await discoverBeerCategories();
  await sleep(DELAY);

  const allRaw = [];
  for (const category of categories) {
    console.log(`\nKategorie: ${category}`);
    const products = await crawlCategory(category);
    allRaw.push(...products);
    await sleep(DELAY);
  }

  console.log(`\nInsgesamt ${allRaw.length} Produkte gefunden (roh)`);

  const seenNames = new Set();
  const unique = [];
  for (const product of allRaw) {
    if (!seenNames.has(product.name)) {
      seenNames.add(product.name);
      unique.push(product);
    }
  }
  console.log(`Nach Deduplizierung: ${unique.length} Produkte`);

  let nrwBiere = [];
  for (const product of unique) {
    if (isNrwBier(product.name)) {
      let brauerei = "Unbekannt";
      for (const brewery of Object.keys(NRW_BRAUEREIEN)) {
        if (product.name.toLowerCase().includes(brewery.toLowerCase())) {
          brauerei = brewery;
          break;
        }
      }
      nrwBiere.push({ name: product.name, brauerei });
    }
  }

  console.log(`NRW-Biere identifiziert: ${nrwBiere.length}`);

  if (nrwBiere.length < 5) {
    console.log("⚠ Zu wenige Crawl-Ergebnisse – verwende Basis-Brauerei-Liste als Fallback");
    nrwBiere = buildFallbackList();
  }

  const output = {
    generated_at: new Date().toISOString(),
    source: "trinkgut.de (gecrawlt) + NRW-Brauerei-Basisliste",
    count: nrwBiere.length,
    biere: nrwBiere,
    alle_brauereien: Object.keys(NRW_BRAUEREIEN),
  };

  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf-8");
  console.log(`\n✓ Geschrieben: ${OUTPUT_FILE}`);
  console.log(
    `  ${nrwBiere.length} NRW-Biere in ${new Set(nrwBiere.map((b) => b.brauerei)).size} Brauereien`
  );

  for (const bier of nrwBiere.slice(0, 10)) {
    console.log(`  • ${bier.name} (${bier.brauerei})`);
  }
  if (nrwBiere.length > 10) {
    console.log(`  … und ${nrwBiere.length - 10} weitere`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
