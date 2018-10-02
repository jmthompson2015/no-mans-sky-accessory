/* eslint no-console: ["error", { allow: ["log","warn"] }] */

import Product from "../../artifact/Product.js";
import Resource from "../../artifact/Resource.js";

const TableRow = {};

const productOrResource = ingredient =>
  ingredient
    ? Resource.properties[ingredient.resourceKey] || Product.properties[ingredient.productKey]
    : undefined;

const round1 = x => (x ? Math.round(x * 10.0) / 10.0 : undefined);

TableRow.createTableRow = recipe => {
  const { inputs, output } = recipe;
  const outputResource = productOrResource(output);

  if (outputResource === undefined) {
    console.warn(`Missing outputResource for recipe ${JSON.stringify(recipe.name)}`);
  }

  const input1 = inputs[0];
  const input2 = inputs[1];
  const input3 = inputs[2];
  const ingredient1 = productOrResource(input1);

  if (ingredient1 === undefined) {
    console.warn(`Missing ingredient1 for recipe ${JSON.stringify(recipe.name)}`);
  }

  const ingredient2 = productOrResource(input2);
  const ingredient3 = productOrResource(input3);
  const input1Value = ingredient1 ? ingredient1.baseValue : undefined;
  const input2Value = ingredient2 ? ingredient2.baseValue : undefined;
  const input3Value = ingredient3 ? ingredient3.baseValue : undefined;
  const inputCost =
    (input1 ? input1.amount * input1Value : 0) +
    (input2 ? input2.amount * input2Value : 0) +
    (input3 ? input3.amount * input3Value : 0);
  const outputTotal = outputResource.baseValue
    ? output.amount * outputResource.baseValue
    : undefined;
  const outputTotalPerCost = outputTotal ? outputTotal / inputCost : undefined;

  return {
    output: outputResource.name,
    outputAmount: output.amount,
    outputValue: outputResource.baseValue,
    name: recipe.name,
    device: recipe.device,
    input1: ingredient1.name,
    input1Amount: input1.amount,
    input1Value,
    input2: ingredient2 ? ingredient2.name : undefined,
    input2Amount: input2 ? input2.amount : undefined,
    input2Value,
    input3: ingredient3 ? ingredient3.name : undefined,
    input3Amount: input3 ? input3.amount : undefined,
    input3Value,
    outputTotal,
    inputCost,
    outputTotalPerCost: round1(outputTotalPerCost)
  };
};

export default TableRow;
