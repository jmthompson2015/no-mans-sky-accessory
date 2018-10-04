/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const FileLoader = require("./FileLoader.js");

const ResourceConverter = {};

const INPUT_FILE = "Resource - No Man's Sky Wiki.html";
const OUTPUT_FILE = "../Resource.js";
const HEADER = `// GENERATED FILE: Do not edit.

// see https://nomanssky.gamepedia.com/Resource

import ResourceGroup from "./ResourceGroup.js";
import ResourceRarity from "./ResourceRarity.js";

const Resource = {
`;
const DIVIDER = `};

Resource.properties = {
`;
const FOOTER = `};

Object.freeze(Resource);

export default Resource;
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

const extractImageSrc = cellRow => {
  const key0 = 'src="';
  const index0 = cellRow.indexOf(key0) + key0.length;
  const index1 = cellRow.indexOf('"', index0);

  return cellRow.substring(index0, index1);
};

const extractLinkName = anchorRow => {
  const index1 = anchorRow.lastIndexOf("</a>");
  const index0 = anchorRow.lastIndexOf(">", index1);
  return anchorRow.substring(index0 + 1, index1);
};

const createResourceEnum = dataRow => {
  const dataElements = dataRow.split("</td>");
  if (dataElements[1] !== undefined) {
    const name = extractLinkName(dataElements[1]);
    const enumName = EnumGenerator.createEnumName(name);
    const enumValue = EnumGenerator.createEnumValue(name);

    return `  ${enumName}: "${enumValue}",
`;
  }

  return "";
};

const createResourceString = dataRow => {
  const dataElements = dataRow.split("</td>");
  if (dataElements[1] !== undefined) {
    const image = extractImageSrc(dataElements[0]);
    const name = extractLinkName(dataElements[1]);
    const group = extractCellContent(dataElements[3].trim());
    const rarity = extractCellContent(dataElements[4].trim());
    const baseValue = extractCellContent(dataElements[5].trim());

    const enumValue = EnumGenerator.createEnumValue(name);
    const groupEnumName = EnumGenerator.createEnumName(group);
    const rarityEnumName = EnumGenerator.createEnumName(rarity);

    return `   ${enumValue}: {
     name: "${name}",
     groupKey: ResourceGroup.${groupEnumName},
     rarityKey: ResourceRarity.${rarityEnumName},
     baseValue: ${baseValue},
     image: "${image}",
     key: "${enumValue}"
   },
`;
  }

  return "";
};

ResourceConverter.convert = () => {
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

    const reduceFunction1 = (accum, row) => R.append(createResourceEnum(row), accum);
    const array1 = R.reduce(reduceFunction1, [], dataRows);
    array1.sort();
    const content1 = array1.join("");

    const reduceFunction2 = (accum, row) => R.append(createResourceString(row), accum);
    const array2 = R.reduce(reduceFunction2, [], dataRows);
    array2.sort();
    const content2 = array2.join("");

    const content = `${HEADER}${content1}${DIVIDER}${content2}${FOOTER}`;

    writeFile(OUTPUT_FILE, content);
  });
};

ResourceConverter.convert();
