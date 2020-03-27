/* eslint no-console: ["error", { allow: ["log","warn"] }] */

import Resolver from "../../artifact/Resolver.js";

import IngredientUtils from "../../model/IngredientUtilities.js";
import RecipeResourceUtils from "../../model/RecipeResourceUtilities.js";
import RecipeUtils from "../../model/RecipeUtilities.js";

const TableRow = {};

const round2 = x => (x ? Math.round(x * 100.0) / 100.0 : undefined);

TableRow.createTableRow = recipe => {
  const { inputs, output } = recipe;
  const outputThing = IngredientUtils.thing(output);
  const ingredient1 = inputs[0];
  const ingredient2 = inputs[1];
  const ingredient3 = inputs[2];
  const inputThing1 = IngredientUtils.thing(ingredient1);
  const inputThing2 = IngredientUtils.thing(ingredient2);
  const inputThing3 = IngredientUtils.thing(ingredient3);

  const outputTotal = RecipeUtils.outputValue(recipe);
  const inputTotal = RecipeUtils.inputValue(recipe);
  const resourceTotal = RecipeResourceUtils.resourceValue(recipe);
  const outputInputRatio = RecipeUtils.outputInputRatio(recipe);
  const outputResourceRatio = RecipeResourceUtils.outputResourceRatio(recipe);

  return {
    name: recipe.name,
    device: Resolver.device(recipe.device).name,
    output: outputThing.name,
    outputAmount: output.amount,
    outputValue: outputThing.baseValue,
    input1: inputThing1 ? inputThing1.name : undefined,
    input1Amount: ingredient1 ? ingredient1.amount : undefined,
    input1Value: inputThing1 ? inputThing1.baseValue : undefined,
    input2: inputThing2 ? inputThing2.name : undefined,
    input2Amount: ingredient2 ? ingredient2.amount : undefined,
    input2Value: inputThing2 ? inputThing2.baseValue : undefined,
    input3: inputThing3 ? inputThing3.name : undefined,
    input3Amount: ingredient3 ? ingredient3.amount : undefined,
    input3Value: inputThing3 ? inputThing3.baseValue : undefined,
    outputTotal,
    inputTotal,
    resourceTotal,
    outputInputRatio: round2(outputInputRatio),
    outputResourceRatio: round2(outputResourceRatio)
  };
};

export default TableRow;
