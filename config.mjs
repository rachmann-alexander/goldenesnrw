export const BASE_URL = "https://www.trinkgut.de";

export const HEADERS = {
  "User-Agent": "Mozilla/5.0 (compatible; GoldenesNRW/1.0; +https://github.com/)",
  "Accept-Language": "de-DE,de;q=0.9",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

export const DELAY = 1.5;

// Quelle: https://de.wikipedia.org/wiki/Liste_der_Brauereien_in_Nordrhein-Westfalen
export const NRW_BRAUEREIEN = {
  "Warsteiner": {
    "biere": [
      "Warsteiner Pilsner",
      "Warsteiner Dunkel",
      "Warsteiner Herb",
      "Warsteiner Alkoholfrei",
      "Isenbeck Pils",
      "Isenbeck Export"
    ],
    "stammhaus": {
      "strasse": "Hauptstraße 18",
      "plz": "59581",
      "ort": "Warstein",
      "lat": 51.4449,
      "lon": 8.3535
    },
    "geschaeftsfuehrung": "Albert Cramer",
    "absatz_hl": null,
    "gruendung": 1753,
    "website": "https://www.warsteiner.de"
  },
  "Krombacher": {
    "biere": [
      "Krombacher Pils",
      "Krombacher Weizen",
      "Krombacher Dunkel",
      "Krombacher Radler",
      "Krombacher Alkoholfrei"
    ],
    "stammhaus": {
      "strasse": "Krombacher Brauerei Bernhard Schadeberg",
      "plz": "57223",
      "ort": "Kreuztal-Krombach",
      "lat": 50.9697,
      "lon": 7.8983
    },
    "geschaeftsfuehrung": "Bernhard Schadeberg",
    "absatz_hl": 6200000,
    "gruendung": 1803,
    "website": "https://www.krombacher.de"
  },
  "Veltins": {
    "biere": [
      "Veltins Pilsener",
      "Veltins Alkoholfrei",
      "V+ Energy"
    ],
    "stammhaus": {
      "strasse": "Veltinsstraße 1",
      "plz": "59872",
      "ort": "Meschede-Grevenstein",
      "lat": 51.3492,
      "lon": 8.2839
    },
    "geschaeftsfuehrung": "Susanne Veltins",
    "absatz_hl": null,
    "gruendung": 1824,
    "website": "https://www.veltins.de"
  },
  "DAB": {
    "biere": [
      "DAB Original",
      "DAB Export",
      "DAB Alkoholfrei"
    ],
    "stammhaus": {
      "strasse": "Rheinische Straße 2",
      "plz": "44137",
      "ort": "Dortmund",
      "lat": 51.5136,
      "lon": 7.4653
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1867,
    "website": "https://www.dab.beer"
  },
  "Diebels": {
    "biere": [
      "Diebels Alt",
      "Diebels Alkoholfrei"
    ],
    "stammhaus": {
      "strasse": "Brauereistraße 1",
      "plz": "47652",
      "ort": "Issum",
      "lat": 51.5367,
      "lon": 6.4214
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1878,
    "website": "https://www.diebels.de"
  },
  "Uerige": {
    "biere": [
      "Uerige Alt",
      "Uerige Sticke"
    ],
    "stammhaus": {
      "strasse": "Berger Straße 1",
      "plz": "40213",
      "ort": "Düsseldorf",
      "lat": 51.2212,
      "lon": 6.7758
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1862,
    "website": "https://www.uerige.de"
  },
  "Füchschen": {
    "biere": [
      "Füchschen Alt"
    ],
    "stammhaus": {
      "strasse": "Ratinger Straße 28",
      "plz": "40213",
      "ort": "Düsseldorf",
      "lat": 51.2278,
      "lon": 6.7897
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1848,
    "website": "https://www.fuechschen.de"
  },
  "Schumacher": {
    "biere": [
      "Schumacher Alt"
    ],
    "stammhaus": {
      "strasse": "Oststraße 123",
      "plz": "40210",
      "ort": "Düsseldorf",
      "lat": 51.2215,
      "lon": 6.7924
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1838,
    "website": "https://www.schumacher-alt.de"
  },
  "Gaffel": {
    "biere": [
      "Gaffel Kölsch",
      "Gaffel Radler"
    ],
    "stammhaus": {
      "strasse": "Eigelstein 41",
      "plz": "50668",
      "ort": "Köln",
      "lat": 50.9417,
      "lon": 6.9572
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1908,
    "website": "https://www.gaffel.de"
  },
  "Reissdorf": {
    "biere": [
      "Reissdorf Kölsch"
    ],
    "stammhaus": {
      "strasse": "Rodenkirchener Straße 1",
      "plz": "50996",
      "ort": "Köln-Rodenkirchen",
      "lat": 50.8931,
      "lon": 6.9947
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1894,
    "website": "https://www.reissdorf.de"
  },
  "Früh": {
    "biere": [
      "Früh Kölsch",
      "Früh Alkoholfrei"
    ],
    "stammhaus": {
      "strasse": "Am Hof 18–20",
      "plz": "50667",
      "ort": "Köln",
      "lat": 50.9423,
      "lon": 6.9584
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1904,
    "website": "https://www.frueh.de"
  },
  "Sion": {
    "biere": [
      "Sion Kölsch"
    ],
    "stammhaus": {
      "strasse": "Unter Taschenmacher 5–7",
      "plz": "50667",
      "ort": "Köln",
      "lat": 50.941,
      "lon": 6.9598
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": "https://www.brauhaus-sion.de"
  },
  "Dom Kölsch": {
    "biere": [
      "Dom Kölsch"
    ],
    "stammhaus": {
      "strasse": "Olpener Straße 1",
      "plz": "51103",
      "ort": "Köln",
      "lat": 50.9389,
      "lon": 7.0112
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": "https://www.dom-koelsch.de"
  },
  "Päffgen": {
    "biere": [
      "Päffgen Kölsch"
    ],
    "stammhaus": {
      "strasse": "Friesenstraße 64–66",
      "plz": "50670",
      "ort": "Köln",
      "lat": 50.9428,
      "lon": 6.9412
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1883,
    "website": "https://www.paeffgen-koelsch.de"
  },
  "Peters": {
    "biere": [
      "Peters Kölsch"
    ],
    "stammhaus": {
      "strasse": "Olpener Straße 1",
      "plz": "51103",
      "ort": "Köln",
      "lat": 50.9389,
      "lon": 7.0112
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Stifts": {
    "biere": [
      "Stifts Kölsch",
      "Dortmunder Stifts"
    ],
    "stammhaus": {
      "ort": "Stifts"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Bolten": {
    "biere": [
      "Bolten Alt",
      "Bolten Ur-Alt"
    ],
    "stammhaus": {
      "strasse": "Krefelder Straße 92",
      "plz": "41352",
      "ort": "Korschenbroich",
      "lat": 51.1922,
      "lon": 6.5133
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1266,
    "website": "https://www.bolten.de"
  },
  "Hannen": {
    "biere": [
      "Hannen Alt"
    ],
    "stammhaus": {
      "ort": "Hannen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Frankenheim": {
    "biere": [
      "Frankenheim Alt",
      "Frankenheim Blue"
    ],
    "stammhaus": {
      "ort": "Frankenheim"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Schlösser": {
    "biere": [
      "Schlösser Alt"
    ],
    "stammhaus": {
      "ort": "Schlösser"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "König": {
    "biere": [
      "König Pilsener",
      "König Alkoholfrei"
    ],
    "stammhaus": {
      "strasse": "Königstraße 1",
      "plz": "47259",
      "ort": "Duisburg-Beeck",
      "lat": 51.4908,
      "lon": 6.7656
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1858,
    "website": "https://www.koenig.de"
  },
  "Brinkhoff": {
    "biere": [
      "Brinkhoffs No. 1"
    ],
    "stammhaus": {
      "strasse": "Rheinische Straße 2",
      "plz": "44137",
      "ort": "Dortmund",
      "lat": 51.5136,
      "lon": 7.4653
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Dortmunder Union": {
    "biere": [
      "DUB Export"
    ],
    "stammhaus": {
      "ort": "Dortmunder Union"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Pinkus Müller": {
    "biere": [
      "Pinkus Alt",
      "Pinkus Weizen"
    ],
    "stammhaus": {
      "strasse": "Kreuzstraße 18",
      "plz": "48143",
      "ort": "Münster",
      "lat": 51.9625,
      "lon": 7.6289
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1816,
    "website": "https://www.pinkus.de"
  },
  "Herforder": {
    "biere": [
      "Herforder Pils",
      "Herforder Radler"
    ],
    "stammhaus": {
      "strasse": "Herforder Straße 67",
      "plz": "32120",
      "ort": "Hiddenhausen",
      "lat": 52.1711,
      "lon": 8.6167
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1878,
    "website": "https://www.herforder.de"
  },
  "Schwelmer": {
    "biere": [
      "Schwelmer Märzen",
      "Schwelmer Pils"
    ],
    "stammhaus": {
      "strasse": "Rheinische Straße 2",
      "plz": "44137",
      "ort": "Dortmund",
      "lat": 51.5136,
      "lon": 7.4653
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Ritter": {
    "biere": [
      "Ritter Bier"
    ],
    "stammhaus": {
      "strasse": "Rheinische Straße 2",
      "plz": "44137",
      "ort": "Dortmund",
      "lat": 51.5136,
      "lon": 7.4653
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Moritz Fiege": {
    "biere": [
      "Moritz Fiege",
      "Bernstein"
    ],
    "stammhaus": {
      "strasse": "Moritz-Fiege-Straße 1",
      "plz": "44803",
      "ort": "Bochum",
      "lat": 51.4789,
      "lon": 7.2167
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1878,
    "website": "https://www.moritzfiege.de"
  },
  "Dortmunder Actien-Brauerei": {
    "biere": [
      "Dortmunder Hansa",
      "Dortmunder Kronen",
      "Dortmunder Thier",
      "Wicküler"
    ],
    "stammhaus": {
      "strasse": "Rheinische Straße 2",
      "plz": "44137",
      "ort": "Dortmund",
      "lat": 51.5136,
      "lon": 7.4653
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1875,
    "website": "https://www.dab.beer"
  },
  "Haus Kölscher Brautradition": {
    "biere": [
      "Gilden Kölsch",
      "Küppers Kölsch"
    ],
    "stammhaus": {
      "ort": "Haus Kölscher Brautradition"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hövels": {
    "biere": [
      "Hövels Original"
    ],
    "stammhaus": {
      "strasse": "Hoher Wall 5",
      "plz": "44137",
      "ort": "Dortmund",
      "lat": 51.5148,
      "lon": 7.4636
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1854,
    "website": "https://www.hoevels.de"
  },
  "Erzquell": {
    "biere": [
      "Erzquell Pils",
      "Erzquell Weizen"
    ],
    "stammhaus": {
      "strasse": "Bielsteiner Straße 1",
      "plz": "51674",
      "ort": "Wiehl-Bielstein",
      "lat": 50.95,
      "lon": 7.5333
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1976,
    "website": "https://www.erzquell.de"
  },
  "Paderborner": {
    "biere": [
      "Paderborner Pils",
      "Paderborner Export"
    ],
    "stammhaus": {
      "strasse": "Fürstenbergstraße 12",
      "plz": "33098",
      "ort": "Paderborn",
      "lat": 51.7189,
      "lon": 8.7547
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1825,
    "website": "https://www.paderborner.de"
  },
  "Warburger": {
    "biere": [
      "Warburger Pils",
      "Warburger Export"
    ],
    "stammhaus": {
      "strasse": "Brauereistraße 1",
      "plz": "34414",
      "ort": "Warburg",
      "lat": 51.49,
      "lon": 9.1467
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1721,
    "website": "https://www.warburger.de"
  },
  "Privatbrauerei Ernst Barre": {
    "biere": [
      "Barre Bräu"
    ],
    "stammhaus": {
      "strasse": "Am Markt 1",
      "plz": "32312",
      "ort": "Lübbecke",
      "lat": 52.3067,
      "lon": 8.6144
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1842,
    "website": "https://www.barre.de"
  },
  "Privat-Brauerei Strate Detmold": {
    "biere": [
      "Strate Detmold"
    ],
    "stammhaus": {
      "ort": "Detmold"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Josefs-Brauerei": {
    "biere": [
      "Josefs Helles",
      "Josefs Pils"
    ],
    "stammhaus": {
      "strasse": "Am Brunnen 1",
      "plz": "33175",
      "ort": "Bad Lippspringe",
      "lat": 51.7833,
      "lon": 8.8167
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 2000,
    "website": "https://www.josefs-brauerei.de"
  },
  "Pott's": {
    "biere": [
      "Pott's Original"
    ],
    "stammhaus": {
      "strasse": "Münsterstraße 1",
      "plz": "59302",
      "ort": "Oelde",
      "lat": 51.8289,
      "lon": 8.1472
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": 1769,
    "website": "https://www.potts.de"
  },
  "2T-Bauerei": {
    "biere": [
      "2T-Bauerei"
    ],
    "stammhaus": {
      "ort": "Lindlar"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Aktionsbrauerei Dähne": {
    "biere": [
      "Aktionsbrauerei Dähne"
    ],
    "stammhaus": {
      "ort": "Herne"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Ale*Mania": {
    "biere": [
      "Ale*Mania"
    ],
    "stammhaus": {
      "ort": "Bonn"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Aloysianum": {
    "biere": [
      "Aloysianum"
    ],
    "stammhaus": {
      "ort": "Leichlingen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Altenhofer Carolinenbräu": {
    "biere": [
      "Altenhofer Carolinenbräu"
    ],
    "stammhaus": {
      "ort": "Wenden"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Altenrüthener Landbierbrauerei": {
    "biere": [
      "Altenrüthener Landbierbrauerei"
    ],
    "stammhaus": {
      "ort": "Rüthen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Alter Bahnhof Frechen": {
    "biere": [
      "Alter Bahnhof Frechen"
    ],
    "stammhaus": {
      "ort": "Frechen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Alter Bahnhof Oberkassel": {
    "biere": [
      "Alter Bahnhof Oberkassel"
    ],
    "stammhaus": {
      "ort": "Düsseldorf"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Anton’s Brauerei": {
    "biere": [
      "Anton’s Brauerei"
    ],
    "stammhaus": {
      "ort": "Anton’s Brauerei"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Arnsberger Mühlenbräu": {
    "biere": [
      "Arnsberger Mühlenbräu"
    ],
    "stammhaus": {
      "ort": "Arnsberg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Aspera-Brauerei Riese": {
    "biere": [
      "Aspera-Brauerei Riese"
    ],
    "stammhaus": {
      "ort": "Mülheim an der Ruhr"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Barmer Brauerei": {
    "biere": [
      "Barmer Brauerei"
    ],
    "stammhaus": {
      "ort": "Wuppertal"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Benno’s Brauhaus": {
    "biere": [
      "Benno’s Brauhaus"
    ],
    "stammhaus": {
      "ort": "Witten"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Bergmann Brauerei": {
    "biere": [
      "Bergmann Brauerei"
    ],
    "stammhaus": {
      "ort": "Dortmund"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Biber Brauerei": {
    "biere": [
      "Biber Brauerei"
    ],
    "stammhaus": {
      "ort": "Euskirchen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Bierbrauerei Dackel": {
    "biere": [
      "Bierbrauerei Dackel"
    ],
    "stammhaus": {
      "ort": "Münster"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Biermanufaktur Dangel": {
    "biere": [
      "Biermanufaktur Dangel"
    ],
    "stammhaus": {
      "ort": "Eslohe"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Blue Cat": {
    "biere": [
      "Blue Cat"
    ],
    "stammhaus": {
      "ort": "Erftstadt"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Böcken-Bräu": {
    "biere": [
      "Böcken-Bräu"
    ],
    "stammhaus": {
      "ort": "Haltern am See"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Bockerter Heide Brauerei": {
    "biere": [
      "Bockerter Heide Brauerei"
    ],
    "stammhaus": {
      "ort": "Viersen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Bottroper Bier": {
    "biere": [
      "Bottroper Bier"
    ],
    "stammhaus": {
      "ort": "Bottrop"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei & Brennerei Gebrüder Sünner": {
    "biere": [
      "Brauerei & Brennerei Gebrüder Sünner"
    ],
    "stammhaus": {
      "ort": "Köln"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Am Roßtor": {
    "biere": [
      "Brauerei Am Roßtor"
    ],
    "stammhaus": {
      "ort": "Wassenberg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Bosch": {
    "biere": [
      "Brauerei Bosch"
    ],
    "stammhaus": {
      "ort": "Bad Laasphe"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Gleumes": {
    "biere": [
      "Brauerei Gleumes"
    ],
    "stammhaus": {
      "ort": "Krefeld"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Hagedorn": {
    "biere": [
      "Brauerei Hagedorn"
    ],
    "stammhaus": {
      "ort": "Rhede"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Im Dom": {
    "biere": [
      "Brauerei Im Dom"
    ],
    "stammhaus": {
      "ort": "Neuss"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Kürzer": {
    "biere": [
      "Brauerei Kürzer"
    ],
    "stammhaus": {
      "ort": "Düsseldorf"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Mette GbRMetten Hefemännchen": {
    "biere": [
      "Brauerei Mette GbRMetten Hefemännchen"
    ],
    "stammhaus": {
      "ort": "Finnentrop"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Rotingdorf": {
    "biere": [
      "Brauerei Rotingdorf"
    ],
    "stammhaus": {
      "ort": "Werther"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Sandforth": {
    "biere": [
      "Brauerei Sandforth"
    ],
    "stammhaus": {
      "ort": "Steinhagen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Schlüffken": {
    "biere": [
      "Brauerei Schlüffken"
    ],
    "stammhaus": {
      "ort": "Krefeld"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei zum Schlüssel": {
    "biere": [
      "Brauerei zum Schlüssel"
    ],
    "stammhaus": {
      "ort": "Düsseldorf"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei Zum Stefanus": {
    "biere": [
      "Brauerei Zum Stefanus"
    ],
    "stammhaus": {
      "ort": "Mönchengladbach"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauerei zur Malzmühle": {
    "biere": [
      "Brauerei zur Malzmühle"
    ],
    "stammhaus": {
      "ort": "Köln"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauereigasthof McMüller's": {
    "biere": [
      "Brauereigasthof McMüller's"
    ],
    "stammhaus": {
      "ort": "Linnich"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Braugemeinschaft Edertal": {
    "biere": [
      "Braugemeinschaft Edertal"
    ],
    "stammhaus": {
      "ort": "Bad Berleburg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Am Ennert": {
    "biere": [
      "Brauhaus Am Ennert"
    ],
    "stammhaus": {
      "ort": "Bonn"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Bönnsch": {
    "biere": [
      "Brauhaus Bönnsch"
    ],
    "stammhaus": {
      "ort": "Bonn"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Gummersbach": {
    "biere": [
      "Brauhaus Gummersbach"
    ],
    "stammhaus": {
      "ort": "Gummersbach"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Joh. Albrecht": {
    "biere": [
      "Brauhaus Joh. Albrecht"
    ],
    "stammhaus": {
      "ort": "Bielefeld"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Johann Friedrich Irle": {
    "biere": [
      "Brauhaus Johann Friedrich Irle"
    ],
    "stammhaus": {
      "ort": "Siegen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Kalkarer Mühle": {
    "biere": [
      "Brauhaus Kalkarer Mühle"
    ],
    "stammhaus": {
      "ort": "Kalkar"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Kemker": {
    "biere": [
      "Brauhaus Kemker"
    ],
    "stammhaus": {
      "ort": "Everswinkel"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Rheinbach": {
    "biere": [
      "Brauhaus Rheinbach"
    ],
    "stammhaus": {
      "ort": "Rheinbach"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Rütershoff": {
    "biere": [
      "Brauhaus Rütershoff"
    ],
    "stammhaus": {
      "ort": "Castrop-Rauxel"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Stephanus": {
    "biere": [
      "Brauhaus Stephanus"
    ],
    "stammhaus": {
      "ort": "Coesfeld"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhaus Zwiebel": {
    "biere": [
      "Brauhaus Zwiebel"
    ],
    "stammhaus": {
      "ort": "Soest"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauhof Wilshaus": {
    "biere": [
      "Brauhof Wilshaus"
    ],
    "stammhaus": {
      "ort": "Hamm"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Bräukels GbR": {
    "biere": [
      "Bräukels GbR"
    ],
    "stammhaus": {
      "ort": "Lennestadt"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Braumanufaktur Pohlmann": {
    "biere": [
      "Braumanufaktur Pohlmann"
    ],
    "stammhaus": {
      "ort": "Hagen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Brauprojekt 777": {
    "biere": [
      "Brauprojekt 777"
    ],
    "stammhaus": {
      "ort": "Voerde"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Braustube Bielefelder Biermanufaktur": {
    "biere": [
      "Braustube Bielefelder Biermanufaktur"
    ],
    "stammhaus": {
      "ort": "Bielefeld"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Britannia Beers": {
    "biere": [
      "Britannia Beers"
    ],
    "stammhaus": {
      "ort": "Lienen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Corma": {
    "biere": [
      "Corma"
    ],
    "stammhaus": {
      "ort": "Meerbusch"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Dampfbierbrauerei Borbeck": {
    "biere": [
      "Dampfbierbrauerei Borbeck"
    ],
    "stammhaus": {
      "ort": "Essen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Dellmann's Bräu": {
    "biere": [
      "Dellmann's Bräu"
    ],
    "stammhaus": {
      "ort": "Wermelskirchen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Erlebnisbrauerei Lohmar": {
    "biere": [
      "Erlebnisbrauerei Lohmar"
    ],
    "stammhaus": {
      "ort": "Lohmar"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Esloher Brauhaus": {
    "biere": [
      "Esloher Brauhaus"
    ],
    "stammhaus": {
      "ort": "Eslohe"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Feldschlösschen Spezialbierbrauerei": {
    "biere": [
      "Feldschlösschen Spezialbierbrauerei"
    ],
    "stammhaus": {
      "ort": "Hamminkeln"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Finne Brauerei": {
    "biere": [
      "Finne Brauerei"
    ],
    "stammhaus": {
      "ort": "Münster"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "fleuther": {
    "biere": [
      "fleuther"
    ],
    "stammhaus": {
      "ort": "Geldern"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Freiherr von Fürstenberg Gaugreben’sche Verwaltung Hofbrauerei": {
    "biere": [
      "Freiherr von Fürstenberg Gaugreben’sche Verwaltung Hofbrauerei"
    ],
    "stammhaus": {
      "ort": "Freiherr von Fürstenberg Gaugreben’sche Verwaltung Hofbrauerei"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gasthaus Himmelpforten": {
    "biere": [
      "Gasthaus Himmelpforten"
    ],
    "stammhaus": {
      "ort": "Ense"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gasthaus-Brauerei Braustelle": {
    "biere": [
      "Gasthaus-Brauerei Braustelle"
    ],
    "stammhaus": {
      "ort": "Köln"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Geilings Bräu": {
    "biere": [
      "Geilings Bräu"
    ],
    "stammhaus": {
      "ort": "Kamp-Lintfort"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gemünder Brauerei": {
    "biere": [
      "Gemünder Brauerei"
    ],
    "stammhaus": {
      "ort": "Schleiden"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gerry Weber Landhotel": {
    "biere": [
      "Gerry Weber Landhotel"
    ],
    "stammhaus": {
      "ort": "Halle (Westfalen)"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gräflich von Mengersen’sche Dampfbrauerei": {
    "biere": [
      "Gräflich von Mengersen’sche Dampfbrauerei"
    ],
    "stammhaus": {
      "ort": "Gräflich von Mengersen’sche Dampfbrauerei"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gräflich zu Stolberg’sche Brauerei Westheim": {
    "biere": [
      "Gräflich zu Stolberg’sche Brauerei Westheim"
    ],
    "stammhaus": {
      "ort": "Gräflich zu Stolberg’sche Brauerei Westheim"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gruthaus-Brauerei": {
    "biere": [
      "Gruthaus-Brauerei"
    ],
    "stammhaus": {
      "ort": "Münster"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Gütersloher Brauhaus": {
    "biere": [
      "Gütersloher Brauhaus"
    ],
    "stammhaus": {
      "ort": "Gütersloh"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Haus Klute": {
    "biere": [
      "Haus Klute"
    ],
    "stammhaus": {
      "ort": "Havixbeck"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hausbrauerei Schmitz Mönk": {
    "biere": [
      "Hausbrauerei Schmitz Mönk"
    ],
    "stammhaus": {
      "ort": "Willich"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hausbrauerei Wirtschaft Richard Becker": {
    "biere": [
      "Hausbrauerei Wirtschaft Richard Becker"
    ],
    "stammhaus": {
      "ort": "Remscheid"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Havarie Braumanufaktur": {
    "biere": [
      "Havarie Braumanufaktur"
    ],
    "stammhaus": {
      "ort": "Delbrück"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Heinenhof – Die Mikrobrauerei": {
    "biere": [
      "Heinenhof – Die Mikrobrauerei"
    ],
    "stammhaus": {
      "ort": "Pulheim"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hensen Brauerei": {
    "biere": [
      "Hensen Brauerei"
    ],
    "stammhaus": {
      "ort": "Mönchengladbach"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hilfarther Brauhaus": {
    "biere": [
      "Hilfarther Brauhaus"
    ],
    "stammhaus": {
      "ort": "Hückelhoven"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hofbrauerei Marienhof Marks": {
    "biere": [
      "Hofbrauerei Marienhof Marks"
    ],
    "stammhaus": {
      "ort": "Delbrück"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hotel Flurschütz": {
    "biere": [
      "Hotel Flurschütz"
    ],
    "stammhaus": {
      "ort": "Lennestadt"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hotel Maueler Hofbräu / Gasthof Willmeroth": {
    "biere": [
      "Hotel Maueler Hofbräu / Gasthof Willmeroth"
    ],
    "stammhaus": {
      "ort": "Windeck"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Hotel-Residence Klosterpforte": {
    "biere": [
      "Hotel-Residence Klosterpforte"
    ],
    "stammhaus": {
      "ort": "Hotel-Residence Klosterpforte"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Ilsen Brauerei": {
    "biere": [
      "Ilsen Brauerei"
    ],
    "stammhaus": {
      "ort": "Kreuztal"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Isendorfer Hausbrauerei": {
    "biere": [
      "Isendorfer Hausbrauerei"
    ],
    "stammhaus": {
      "ort": "Emsdetten"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Kaiser Craft": {
    "biere": [
      "Kaiser Craft"
    ],
    "stammhaus": {
      "ort": "Bünde"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Kleinbrauerei Hohler Landbier": {
    "biere": [
      "Kleinbrauerei Hohler Landbier"
    ],
    "stammhaus": {
      "ort": "Olpe"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Kloster Dalheim": {
    "biere": [
      "Kloster Dalheim"
    ],
    "stammhaus": {
      "ort": "Kloster Dalheim"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "KohleCraftBräu": {
    "biere": [
      "KohleCraftBräu"
    ],
    "stammhaus": {
      "ort": "Lünen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Läuterwerk": {
    "biere": [
      "Läuterwerk"
    ],
    "stammhaus": {
      "ort": "Münster"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Liebharts Privatbrauerei": {
    "biere": [
      "Liebharts Privatbrauerei"
    ],
    "stammhaus": {
      "ort": "Detmold"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Lindenbrauerei Hausbrauerei des Kultur- und Kommunikationszentrum": {
    "biere": [
      "Lindenbrauerei Hausbrauerei des Kultur- und Kommunikationszentrum"
    ],
    "stammhaus": {
      "ort": "Unna"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Lippstädter Brauerei Thombansen": {
    "biere": [
      "Lippstädter Brauerei Thombansen"
    ],
    "stammhaus": {
      "ort": "Lippstadt"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Lüdinghauser Brauwerkstatt": {
    "biere": [
      "Lüdinghauser Brauwerkstatt"
    ],
    "stammhaus": {
      "ort": "Lüdinghausen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Major Braumanufaktur": {
    "biere": [
      "Major Braumanufaktur"
    ],
    "stammhaus": {
      "ort": "Borken"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Neue Willicher Brauerei": {
    "biere": [
      "Neue Willicher Brauerei"
    ],
    "stammhaus": {
      "ort": "Willich"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Oettinger Brauerei": {
    "biere": [
      "Oettinger Brauerei"
    ],
    "stammhaus": {
      "ort": "Mönchengladbach"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Ostermann Braumanufaktur GmbH": {
    "biere": [
      "Ostermann Braumanufaktur GmbH"
    ],
    "stammhaus": {
      "ort": "Schwerte"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Pott’s Naturpark-Brauerei": {
    "biere": [
      "Pott’s Naturpark-Brauerei"
    ],
    "stammhaus": {
      "ort": "Pott’s Naturpark-Brauerei"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privat-Brauerei Hohenfelde": {
    "biere": [
      "Privat-Brauerei Hohenfelde"
    ],
    "stammhaus": {
      "ort": "Langenberg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privatbrauerei Bischoff": {
    "biere": [
      "Privatbrauerei Bischoff"
    ],
    "stammhaus": {
      "ort": "Brühl"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privatbrauerei Haverkamp": {
    "biere": [
      "Privatbrauerei Haverkamp"
    ],
    "stammhaus": {
      "ort": "Ibbenbüren"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privatbrauerei Jacob Rainer & Sohn": {
    "biere": [
      "Privatbrauerei Jacob Rainer & Sohn"
    ],
    "stammhaus": {
      "ort": "Linnich"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privatbrauerei Jacob Stauder": {
    "biere": [
      "Privatbrauerei Jacob Stauder"
    ],
    "stammhaus": {
      "ort": "Essen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privatbrauerei Olbermann": {
    "biere": [
      "Privatbrauerei Olbermann"
    ],
    "stammhaus": {
      "ort": "Düsseldorf"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Privatbrauerei Stiefel Jürgens": {
    "biere": [
      "Privatbrauerei Stiefel Jürgens"
    ],
    "stammhaus": {
      "ort": "Beckum"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Ratinger Brauhaus": {
    "biere": [
      "Ratinger Brauhaus"
    ],
    "stammhaus": {
      "ort": "Ratingen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Remscheider Bräu": {
    "biere": [
      "Remscheider Bräu"
    ],
    "stammhaus": {
      "ort": "Remscheid"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Repetaler Heldenbräu": {
    "biere": [
      "Repetaler Heldenbräu"
    ],
    "stammhaus": {
      "ort": "Attendorn"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Restaurant Im Eichwäldchen": {
    "biere": [
      "Restaurant Im Eichwäldchen"
    ],
    "stammhaus": {
      "ort": "Duisburg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Rolinck": {
    "biere": [
      "Rolinck"
    ],
    "stammhaus": {
      "ort": "Steinfurt"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Rönsahler Brauerei": {
    "biere": [
      "Rönsahler Brauerei"
    ],
    "stammhaus": {
      "ort": "Kierspe"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "RuhrtalBrauerei": {
    "biere": [
      "RuhrtalBrauerei"
    ],
    "stammhaus": {
      "ort": "Witten"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Schnaff Privatbrauerei": {
    "biere": [
      "Schnaff Privatbrauerei"
    ],
    "stammhaus": {
      "ort": "Hückeswagen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Schwalenberger Brauzunft": {
    "biere": [
      "Schwalenberger Brauzunft"
    ],
    "stammhaus": {
      "ort": "Schieder-Schwalenberg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Siegburger Brauhaus „Zum roten Löwen“": {
    "biere": [
      "Siegburger Brauhaus „Zum roten Löwen“"
    ],
    "stammhaus": {
      "ort": "Siegburg"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Stadtbrauerei Troisdorf": {
    "biere": [
      "Stadtbrauerei Troisdorf"
    ],
    "stammhaus": {
      "ort": "Troisdorf"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Straelener Brauhaus": {
    "biere": [
      "Straelener Brauhaus"
    ],
    "stammhaus": {
      "ort": "Straelen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Suberg's bei Boente": {
    "biere": [
      "Suberg's bei Boente"
    ],
    "stammhaus": {
      "ort": "Recklinghausen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Teutoburger Brauerei": {
    "biere": [
      "Teutoburger Brauerei"
    ],
    "stammhaus": {
      "ort": "Lengerich"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Toms Hütte": {
    "biere": [
      "Toms Hütte"
    ],
    "stammhaus": {
      "ort": "Bonn"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Troll’s Brauhaus": {
    "biere": [
      "Troll’s Brauhaus"
    ],
    "stammhaus": {
      "ort": "Troll’s Brauhaus"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Vormann Brauerei": {
    "biere": [
      "Vormann Brauerei"
    ],
    "stammhaus": {
      "ort": "Hagen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Waldgasthaus Steinbach & Hausbrauerei": {
    "biere": [
      "Waldgasthaus Steinbach & Hausbrauerei"
    ],
    "stammhaus": {
      "ort": "Euskirchen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Waldstadtbrauerei Iserlohn": {
    "biere": [
      "Waldstadtbrauerei Iserlohn"
    ],
    "stammhaus": {
      "ort": "Iserlohn"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Walter Bräu": {
    "biere": [
      "Walter Bräu"
    ],
    "stammhaus": {
      "ort": "Wesel"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Weiss Bräu": {
    "biere": [
      "Weiss Bräu"
    ],
    "stammhaus": {
      "ort": "Köln"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Westfälisches Biermuseum": {
    "biere": [
      "Westfälisches Biermuseum"
    ],
    "stammhaus": {
      "ort": "Nieheim"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Winnis Brauwerkstatt": {
    "biere": [
      "Winnis Brauwerkstatt"
    ],
    "stammhaus": {
      "ort": "Olfen"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  },
  "Wuppertaler Brauhaus": {
    "biere": [
      "Wuppertaler Brauhaus"
    ],
    "stammhaus": {
      "ort": "Wuppertal"
    },
    "geschaeftsfuehrung": null,
    "absatz_hl": null,
    "gruendung": null,
    "website": null
  }
}

export function getBrauereiBiere(name) {
  const entry = NRW_BRAUEREIEN[name];
  if (!entry) return [];
  return Array.isArray(entry) ? entry : entry.biere ?? [];
}

export function getAllBiereFlat() {
  const result = [];
  for (const [brauerei, entry] of Object.entries(NRW_BRAUEREIEN)) {
    for (const bier of getBrauereiBiere(brauerei)) {
      result.push({ name: bier, brauerei });
    }
  }
  return result;
}

export function formatStammhausAdresse(stammhaus) {
  if (!stammhaus) return null;
  if (stammhaus.adresse) return stammhaus.adresse;
  const parts = [stammhaus.strasse, [stammhaus.plz, stammhaus.ort].filter(Boolean).join(" ")].filter(Boolean);
  return parts.length ? parts.join(", ") : stammhaus.ort ?? null;
}

export const NRW_KEYWORDS = [
  ...Object.keys(NRW_BRAUEREIEN),
  "Kölsch", "Altbier", "Alt ", " Alt", "Ruhrgebiet",
  "Dortmund", "Düsseldorf", "Köln", "Münster", "NRW",
  "Nordrhein-Westfalen", "Bergisch", "Rheinisch", "Indie", "Craft",
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
