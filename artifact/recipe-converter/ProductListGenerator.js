/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const FileLoader = require("./FileLoader.js");

const ProductListGenerator = {};

const INPUT_FILE = "../Product.js";
const OUTPUT_FILE = "./ProductList.js";
const HEADER = `const ProductList = [
`;
const FOOTER = `];

module.exports = ProductList;
`;

const extract = (string, startKey, endKey) => {
  const startIndex = string.indexOf(startKey) + startKey.length;
  const endIndex = string.indexOf(endKey, startIndex);

  return string.substring(startIndex, endIndex);
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

ProductListGenerator.convert = () => {
  FileLoader.loadLocalFile(INPUT_FILE).then(data => {
    if (data === undefined) {
      throw new Error(`Failed to load inputFile: ${INPUT_FILE}`);
    }

    const startKey = "Product.properties = {";
    const endKey = "};";
    const data1 = extract(data, startKey, endKey);
    const dataRows = data1.split("},");

    const reduceFunction = (accum, dataRow) => `${accum} ${extract(dataRow, "name: ", ", ")},
`;
    const content = R.reduce(reduceFunction, HEADER, dataRows) + FOOTER;

    writeFile(OUTPUT_FILE, content);
  });
};

ProductListGenerator.convert();
