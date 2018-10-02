/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const FileLoader = require("./FileLoader.js");

const ResourceListGenerator = {};

const INPUT_FILE = "../Resource.js";
const OUTPUT_FILE = "./ResourceList.js";
const HEADER = `const ResourceList = [
`;
const FOOTER = `];

module.exports = ResourceList;
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

ResourceListGenerator.convert = () => {
  FileLoader.loadLocalFile(INPUT_FILE).then(data => {
    if (data === undefined) {
      throw new Error(`Failed to load inputFile: ${INPUT_FILE}`);
    }

    const startKey = "Resource.properties = {";
    const endKey = "};";
    const data1 = extract(data, startKey, endKey);
    const dataRows = data1.split("},");

    const reduceFunction = (accum, dataRow) => `${accum} "${extract(dataRow, 'name: "', '"')}",
`;
    const content = R.reduce(reduceFunction, HEADER, dataRows) + FOOTER;

    writeFile(OUTPUT_FILE, content);
  });
};

ResourceListGenerator.convert();
