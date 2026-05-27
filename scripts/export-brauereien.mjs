/**
 * Exportiert NRW_BRAUEREIEN aus config.mjs nach data/brauereien.json
 * für das GitHub-Pages-Frontend (Stammhaus-Ebene).
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { NRW_BRAUEREIEN, formatStammhausAdresse } from "../config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "brauereien.json");

function exportEntry(name, entry) {
  const stammhaus = entry.stammhaus ?? {};
  const adresse = formatStammhausAdresse(stammhaus);
  return {
    name,
    biere: entry.biere ?? [],
    stammhaus: {
      adresse,
      ort: stammhaus.ort ?? null,
      lat: stammhaus.lat ?? null,
      lon: stammhaus.lon ?? null,
    },
    geschaeftsfuehrung: entry.geschaeftsfuehrung ?? null,
    absatz_hl: entry.absatz_hl ?? null,
    gruendung: entry.gruendung ?? null,
    website: entry.website ?? null,
  };
}

async function main() {
  const brauereien = Object.entries(NRW_BRAUEREIEN)
    .map(([name, entry]) => exportEntry(name, entry))
    .sort((a, b) => a.name.localeCompare(b.name, "de"));

  const withCoordinates = brauereien.filter(
    (b) => b.stammhaus.lat != null && b.stammhaus.lon != null
  ).length;

  const output = {
    generated_at: new Date().toISOString(),
    count: brauereien.length,
    with_coordinates: withCoordinates,
    brauereien,
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2), "utf-8");

  console.log(`✓ ${OUTPUT_FILE}`);
  console.log(`  ${output.count} Brauereien, ${withCoordinates} mit Koordinaten`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
