/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const FileLoader = require("./FileLoader.js");

const ResourceGroupGenerator = {};

const INPUT_FILE = "Resource - No Man's Sky Wiki.html";
const OUTPUT_FILE = "../ResourceGroup.js";
const HEADER = `// GENERATED FILE: Do not edit.

// see https://nomanssky.gamepedia.com/Resource

const ResourceGroup = {
`;
const DIVIDER = `};

ResourceGroup.properties = {
`;
const FOOTER = `};

Object.freeze(ResourceGroup);

export default ResourceGroup;
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

const extractCellContent = cellRow => cellRow.substring("<td>".length).trim();

const createResourceEnum = dataRow => {
  const dataElements = dataRow.split("</td>");
  if (dataElements[3] !== undefined) {
    const group = extractCellContent(dataElements[3].trim());
    const enumName = EnumGenerator.createEnumName(group);
    const enumValue = EnumGenerator.createEnumValue(group);

    return `  ${enumName}: "${enumValue}",
`;
  }

  return "";
};

const createResourceString = dataRow => {
  const dataElements = dataRow.split("</td>");
  if (dataElements[1] !== undefined) {
    const group = extractCellContent(dataElements[3].trim());
    const enumValue = EnumGenerator.createEnumValue(group);

    return `   ${enumValue}: {
     name: "${group}",
     key: "${enumValue}"
   },
`;
  }

  return "";
};

ResourceGroupGenerator.convert = () => {
  FileLoader.loadLocalFile(INPUT_FILE).then(data => {
    if (data === undefined) {
      throw new Error(`Failed to load inputFile: ${INPUT_FILE}`);
    }

    const key0 = '<table class="wikitable sortable">';
    const index0 = data.indexOf(key0);
    const key1 = "</table>";
    const index1 = data.indexOf(key1, index0);
    const tableBody = data.substring(index0, index1 + key1.length);
    const dataRows = tableBody.split("</tr>");

    const reduceFunction1 = (accum, row) => {
      const element = createResourceEnum(row);
      return !accum.includes(element) ? R.append(element, accum) : accum;
    };
    const array1 = R.reduce(reduceFunction1, [], dataRows);
    array1.sort();
    const content1 = array1.join("");

    const reduceFunction2 = (accum, row) => {
      const element = createResourceString(row);
      return !accum.includes(element) ? R.append(element, accum) : accum;
    };
    const array2 = R.reduce(reduceFunction2, [], dataRows);
    array2.sort();
    const content2 = array2.join("");

    const content = `${HEADER}${content1}${DIVIDER}${content2}${FOOTER}`;

    writeFile(OUTPUT_FILE, content);
  });
};

ResourceGroupGenerator.convert();
