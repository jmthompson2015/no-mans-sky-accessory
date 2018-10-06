/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const FileLoader = require("./FileLoader.js");

const ProductConverter = {};

const INPUT_FILE = "Product - No Man's Sky Wiki.html";
const OUTPUT_FILE = "../Product.js";
const HEADER = `// GENERATED FILE: Do not edit.

// see https://nomanssky.gamepedia.com/Product

import ProductGroup from "./ProductGroup.js";

const Product = {
`;
const DIVIDER = `};

Product.properties = {
`;
const FOOTER = `};

Object.freeze(Product);

export default Product;
`;

const ADD_PRODUCTS = ["Large Refiner", "Medium Refiner", "Nanite Clusters", "Portable Refiner"];

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
  destablisedSodium: 12300,
  diHydrogenJelly: 200,
  dirtyBronze: 25000,
  frigateFuel100Tonnes: 40000,
  frigateFuel200Tonnes: 80000,
  frigateFuel50Tonnes: 20000,
  gekRelic: 23375,
  geknip: 20625,
  geodesite: 150000,
  glass: 13000,
  grantine: 25000,
  heatCapacitor: 180000,
  hermeticSeal: 800,
  herox: 25000,
  ionBattery: 200,
  iridesite: 150000,
  korvaxCasing: 22000,
  korvaxConvergenceCube: 13063,
  larvalCore: 61750,
  lemmium: 25000,
  lifeSupportGel: 200,
  liquidExplosive: 800500,
  livingGlass: 566000,
  lubricant: 110000,
  magnoGold: 25000,
  metalPlating: 800,
  microprocessor: 2000,
  navigationData: 1000,
  oxygenCapsule: 350,
  polyFibre: 130000,
  projectileAmmunition: 5,
  rareMetalElement: 4200,
  salvagedTechnology: 50000,
  starshipLaunchFuel: 450,
  tetracobalt: 6150,
  unstableGel: 50000,
  vykeenDagger: 11688,
  vykeenEffigy: 24750,
  warpCell: 46750
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
  const index1 = anchorRow.indexOf("</a>");
  const index0 = anchorRow.lastIndexOf(">", index1);

  return anchorRow.substring(index0 + 1, index1);
};

const extractSpanContent = row => {
  const index00 = row.indexOf("<span");
  const index0 = row.indexOf(">", index00);
  const index1 = row.indexOf("</span>", index0);

  return row.substring(index0 + 1, index1);
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

const createProductString = (dataRow, group) => {
  if (dataRow !== undefined) {
    const row = dataRow.trim();

    if (row !== "") {
      const name = extractLinkName(row);
      const enumValue = EnumGenerator.createEnumValue(name);
      const baseValue = BASE_VALUES[enumValue];

      return `  ${enumValue}: {
    name: "${name}",
    baseValue: ${baseValue},
    groupKey: ${group},
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

    const key0 = '<h3><span class="mw-headline"';
    const key1 = "</ul>";
    const dataSections = [];
    let index0 = data.indexOf(key0);
    while (index0 >= 0) {
      const index1 = data.indexOf(key1, index0);
      dataSections.push(data.substring(index0, index1));
      index0 = data.indexOf(key0, index1);
    }

    let array1 = [];
    let array2 = [];
    const key2 = "<ul>";

    dataSections.forEach(section => {
      const group0 = extractSpanContent(section);
      const groupName = group0.replace(" - ", " ");
      const groupEnumName = EnumGenerator.createEnumName(groupName);
      const group = `ProductGroup.${groupEnumName}`;
      const mySection0 = section.substring(section.indexOf(key2) + key2.length);
      const mySection = mySection0.replace(/\n/g, "");
      const dataRows = mySection.split("</li>");

      const reduceFunction1 = (accum, row) => R.append(createProductEnum(row), accum);
      const array11 = R.reduce(reduceFunction1, [], dataRows);
      array1 = R.concat(array1, array11.filter(element => element !== ""));

      const reduceFunction2 = (accum, row) => R.append(createProductString(row, group), accum);
      const array22 = R.reduce(reduceFunction2, [], dataRows);
      array2 = R.concat(array22, array2);
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
