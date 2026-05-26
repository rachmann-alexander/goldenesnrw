export const BASE_URL = "https://www.trinkgut.de";

export const HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; NRWBierKarte/1.0; +https://github.com/)",
  "Accept-Language": "de-DE,de;q=0.9",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

export const DELAY = 1.5; // Sekunden zwischen Requests

export const NRW_BRAUEREIEN = {
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
};

export const NRW_KEYWORDS = [
  ...Object.keys(NRW_BRAUEREIEN),
  "Kölsch", "Altbier", "Alt ", " Alt", "Ruhrgebiet",
  "Dortmund", "Düsseldorf", "Köln", "Münster", "NRW",
  "Nordrhein-Westfalen", "Bergisch", "Rheinisch",
];

export const EXCLUDE_KEYWORDS = [
  "Bitburger", "Bitburg",
  "Köstritzer",
  "Mönchshof",
  "Erdinger", "Paulaner", "Augustiner", "Franziskaner",
  "Radeberger",
  "Becks", "Haake-Beck",
  "Jever",
  "Flensburger",
];

export const DEFAULT_CATEGORIES = ["/sortiment/bier", "/bier", "/getraenke/bier"];

export const PRODUCT_SELECTORS = [
  "span.product-name",
  "div.product-name",
  "h2.product-title",
  "a.product-link",
  "[class*='product'][class*='name']",
  "[class*='item-name']",
  "[class*='article-name']",
];

export const BEER_LINK_KEYWORDS = ["bier", "pils", "kölsch", "alt", "weizen", "lager"];
