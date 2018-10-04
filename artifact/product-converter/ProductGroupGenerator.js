/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const FileLoader = require("./FileLoader.js");

const ProductConverter = {};

const INPUT_FILE = "Product - No Man's Sky Wiki.html";
const OUTPUT_FILE = "../ProductGroup.js";
const HEADER = `// GENERATED FILE: Do not edit.

// see https://nomanssky.gamepedia.com/Product

const ProductGroup = {
`;
const DIVIDER = `};

ProductGroup.properties = {
`;
const FOOTER = `};

Object.freeze(ProductGroup);

export default ProductGroup;
`;

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

const extractSpanContent = section => {
  const index1 = section.indexOf("</span>");
  const index0 = section.lastIndexOf(">", index1) + 1;

  return section.substring(index0, index1);
};

const createProductEnum = section => {
  const group = extractSpanContent(section);
  if (group) {
    const name = group.replace(" - ", " ");
    const enumName = EnumGenerator.createEnumName(name);
    const enumValue = EnumGenerator.createEnumValue(name);

    return `  ${enumName}: "${enumValue}",
`;
  }

  return "";
};

const createProductString = section => {
  const group = extractSpanContent(section);
  if (group) {
    const enumValue = EnumGenerator.createEnumValue(group);

    return `   ${enumValue}: {
     name: "${group}",
     key: "${enumValue}"
   },
`;
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

    const reduceFunction1 = (accum, row) => R.append(createProductEnum(row), accum);
    const array1 = R.reduce(reduceFunction1, [], dataSections);
    array1.sort();
    const content1 = array1.join("");

    const reduceFunction2 = (accum, row) => R.append(createProductString(row), accum);
    const array2 = R.reduce(reduceFunction2, [], dataSections);
    array2.sort();
    const content2 = array2.join("");

    const content = `${HEADER}${content1}${DIVIDER}${content2}${FOOTER}`;

    writeFile(OUTPUT_FILE, content);
  });
};

ProductConverter.convert();
