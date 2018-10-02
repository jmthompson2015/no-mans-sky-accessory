/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const FileLoader = require("./FileLoader.js");
const ProductList = require("./ProductList.js");
const ResourceList = require("./ResourceList.js");

const RefinerRecipeConverter = {};

const INPUT_FILE = "NMS Next 1.59 Refinery recipes - 1.59 full list.csv";
const OUTPUT_FILE = "../RefinerRecipe.js";
const HEADER = `import Device from "./Device.js";
import Ingredient from "./Ingredient.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

const productIngredient = (productKey, amount) => Ingredient.create({ productKey, amount });
const resourceIngredient = (resourceKey, amount) => Ingredient.create({ resourceKey, amount });

const RefinerRecipe = [
`;
const FOOTER = `];

export default RefinerRecipe;
`;

const append = value => name => `${name}_${value}`;

const createEnumName = (options, card) => {
  let name = card;

  if (typeof card === "object") {
    name = options.determineCardName(card);
    name = R.contains(card.name, options.appendSlot) ? append(card.slots.join("_"))(name) : name;
  }

  const answer = R.pipe(
    R.replace("(-1)", "decrease"),
    R.replace("(+1)", "increase"),
    R.replace(/[().,!#'"’]/g, ""),
    R.replace(/[- /]/g, "_"),
    R.toUpper,
    R.replace("4_LOM", "FOUR_LOM")
  )(name);

  return answer;
};

const createFunctionCall = (productOrResourceName0, amount) => {
  const productOrResourceName =
    productOrResourceName0 === "Viscous Fluid" ? "Viscous Fluids" : productOrResourceName0;
  if (
    !["", "Name", "Result", "Ingredient 1", "Ingredient 2", "Ingredient 3"].includes(
      productOrResourceName
    )
  ) {
    if (ProductList.includes(productOrResourceName)) {
      return `productIngredient(Product.${createEnumName({}, productOrResourceName)}, ${parseInt(
        amount,
        10
      )})`;
    }

    if (ResourceList.includes(productOrResourceName)) {
      return `resourceIngredient(Resource.${createEnumName({}, productOrResourceName)}, ${parseInt(
        amount,
        10
      )})`;
    }

    throw new Error(`Can't find Product or Resource for ${productOrResourceName}`);
  }
  return "";
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

const createRecipeString = dataRow => {
  const dataElements = dataRow.split(",");
  const name = dataElements[6];
  const output = createFunctionCall(dataElements[2], parseInt(dataElements[3], 10));
  const input1 = `${createFunctionCall(dataElements[7], parseInt(dataElements[8], 10))}`;
  const input2 = dataElements[9]
    ? `, ${createFunctionCall(dataElements[9], parseInt(dataElements[10], 10))}`
    : "";
  const input3 = dataElements[11]
    ? `, ${createFunctionCall(dataElements[11], parseInt(dataElements[12], 10))}`
    : "";

  return ["", "Name", "Result"].includes(name)
    ? ""
    : ` {
    name: "${name}",
    output: ${output},
    inputs: [${input1} ${input2} ${input3}],
    device: Device.REFINER
  },
`;
};

RefinerRecipeConverter.convert = () => {
  FileLoader.loadLocalFile(INPUT_FILE).then(data => {
    if (data === undefined) {
      throw new Error(`Failed to load inputFile: ${INPUT_FILE}`);
    }

    const dataRows = data.split("\n");

    const reduceFunction = (accum, dataRow) => `${accum} ${createRecipeString(dataRow)}`;
    const content = R.reduce(reduceFunction, HEADER, dataRows) + FOOTER;

    writeFile(OUTPUT_FILE, content);
  });
};

RefinerRecipeConverter.convert();
