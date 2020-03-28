/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const FileLoader = require("./FileLoader.js");
const StringUtilities = require("../../lib/string-utilities.js");

const ProductConverter = {};

const INPUT_FILE = "Product - No Man's Sky Wiki.html";
const OUTPUT_FILE = "../Product.js";
const HEADER = `// GENERATED FILE: Do not edit.

// see https://nomanssky.gamepedia.com/Product

const Product = {
`;
const DIVIDER = `};

Product.properties = {
`;
const FOOTER = `};

Object.freeze(Product);

export default Product;
`;

const ADD_PRODUCTS = ["Nanite Clusters"];

const BASE_VALUES = {
  acid: 188000,
  advancedIonBattery: 500,
  antimatter: 5233,
  antimatterHousing: 6500,
  aronium: 25000,
  carbonCrystal: 3600,
  carbonNanotubes: 500,
  circuitBoard: 916250,
  chlorideLattice: 6150,
  cobaltMirror: 20500,
  creaturePellets: 20,
  cryoPump: 1500000,
  cryogenicChamber: 3800000,
  destablisedSodium: 12300,
  diHydrogenJelly: 200,
  dirtyBronze: 25000,
  enrichedCarbon: 50000,
  explosiveDrones: 75000,
  frigateFuel100Tonnes: 40000,
  frigateFuel200Tonnes: 80000,
  frigateFuel50Tonnes: 20000,
  fuelOxidiser: 75000,
  fusionAccelerant: 1500000,
  fusionIgnitor: 15600000,
  geodesite: 150000,
  glass: 200,
  grantine: 25000,
  hadalCore: 92625,
  heatCapacitor: 180000,
  hermeticSeal: 800,
  herox: 25000,
  holographicAnalyser: 75000,
  hotIce: 320000,
  ionBattery: 200,
  iridesite: 150000,
  lemmium: 25000,
  lifeSupportGel: 200,
  liquidExplosive: 800500,
  livingGlass: 566000,
  lubricant: 110000,
  magnoGold: 25000,
  metalPlating: 800,
  microprocessor: 2000,
  mindControlDevice: 75000,
  mineralCompressor: 75000,
  naniteClusters: 12120, // estimate: Silver 15x + Gold 15x + Platinum 25x
  nipnipBuds: 17776,
  nitrogenSalt: 50000,
  organicCatalyst: 320000,
  oxygenCapsule: 350,
  polyFibre: 130000,
  portableReactor: 4200000,
  projectileAmmunition: 1,
  quantumProcessor: 5200000,
  rareMetalElement: 4200,
  saltRefractor: 30500,
  semiconductor: 400000,
  sodiumDiode: 3500,
  starshipLaunchFuel: 450,
  stasisDevice: 15600000,
  stormCrystal: 129150,
  superconductor: 2000000,
  superoxideCrystal: 5100,
  tetracobalt: 6150,
  thermicCondensate: 50000,
  unstableGel: 50000,
  unstablePlasma: 5750,
  warpCell: 46750,
  warpHypercore: 46750,
  wiringLoom: 25000
};

const writeFile = (outputFile, content) => {
  fs.writeFile(outputFile, content, err => {
    // throws an error, you could also catch it here
    if (err) {
      throw err;
    }

    // success case, the file was saved
    console.log(`${outputFile} saved`);
  });
};

const extractLinkName = anchorRow => {
  const anchor = StringUtilities.Extractor.between(anchorRow, "<a", "</a>", false, true);

  return StringUtilities.XMLExtractor.tagAttribute(anchor, "a", "title");
};

const createProductEnum = dataRow => {
  if (dataRow !== undefined) {
    const row = dataRow.trim();

    if (row !== "") {
      const name = extractLinkName(row);

      if (name !== "") {
        const enumName = EnumGenerator.createEnumName(name);
        const enumValue = EnumGenerator.createEnumValue(name);

        return `  ${enumName}: "${enumValue}",
`;
      }
    }
  }

  return "";
};

const createProductString = dataRow => {
  if (dataRow !== undefined) {
    const row = dataRow.trim();

    if (row !== "") {
      const name = extractLinkName(row);
      const enumValue = EnumGenerator.createEnumValue(name);
      const baseValue = BASE_VALUES[enumValue];
      const image = StringUtilities.XMLExtractor.tagAttribute(dataRow, "img", "src");

      return `  ${enumValue}: {
    name: "${name}",
    baseValue: ${baseValue},
    image: "${image}",
    key: "${enumValue}"
  },
`;
    }
  }

  return "";
};

ProductConverter.convert = () => {
  FileLoader.loadLocalFile(INPUT_FILE).then(data => {
    if (data === undefined) {
      throw new Error(`Failed to load inputFile: ${INPUT_FILE}`);
    }

    const data2 = StringUtilities.Extractor.after(
      data,
      '<span class="mw-headline" id="Types_of_products">Types of products</span>'
    );
    const data3 = StringUtilities.Extractor.before(
      data2,
      '<span class="mw-headline" id="Crafting_Tree">Crafting Tree</span>'
    );
    const dataSections = StringUtilities.Extractor.list(data3, "<li", "</li>", true);

    let array1 = [];
    let array2 = [];

    dataSections.forEach(section => {
      const mySection0 = section.replace(/\n/g, "");
      const mySection1 = mySection0.replace(/,/g, " ");
      const mySection2 = StringUtilities.Replacer.replaceAll(mySection1, "&#39;", "'");
      const mySection = mySection2.replace(/\s+/g, " ");
      array1 = R.append(createProductEnum(mySection), array1);
      array2 = R.append(createProductString(mySection), array2);
    });

    ADD_PRODUCTS.forEach(name => {
      const enumName = EnumGenerator.createEnumName(name);
      const enumValue = EnumGenerator.createEnumValue(name);
      const baseValue = BASE_VALUES[enumValue];

      array1.push(`  ${enumName}: "${enumValue}",
    `);
      array2.push(`  ${enumValue}: {
        name: "${name}",
        baseValue: ${baseValue},
        key: "${enumValue}"
      },
    `);
    });

    array1.sort();
    const content1 = array1.join("");
    array2.sort();
    const content2 = array2.join("");

    const content = `${HEADER}${content1}${DIVIDER}${content2}${FOOTER}`;

    writeFile(OUTPUT_FILE, content);
  });
};

ProductConverter.convert();
