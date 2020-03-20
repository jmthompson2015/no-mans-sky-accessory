/* eslint no-console: ["error", { allow: ["log"] }] */

import RefinerRecipe from "./RefinerRecipe.js";

import RecipeUtils from "../model/RecipeUtilities.js";

QUnit.module("RefinerRecipe");

QUnit.test("RefinerRecipe properties 0", assert => {
  const recipe = RefinerRecipe[0];
  assert.equal(recipe.name, "Chloride De-latticing");
  assert.equal(recipe.inputs.length, 1);
});

QUnit.test("RefinerRecipe ingredient 1", assert => {
  const forEachFunction = recipe => {
    assert.ok(
      recipe.inputs[0].productKey || recipe.inputs[0].resourceKey,
      `Missing recipe.inputs[0].[productKey||resourceKey] for ${recipe.name}`
    );
    if (recipe.inputs.length > 1) {
      assert.ok(
        recipe.inputs[1].productKey || recipe.inputs[1].resourceKey,
        `Missing recipe.inputs[1].[productKey||resourceKey] for ${recipe.name}`
      );
    }
    if (recipe.inputs.length > 2) {
      assert.ok(
        recipe.inputs[2].productKey || recipe.inputs[2].resourceKey,
        `Missing recipe.inputs[2].[productKey||resourceKey] for ${recipe.name}`
      );
    }
  };
  R.forEach(forEachFunction, RefinerRecipe);
});

QUnit.test("RefinerRecipe output", assert => {
  const forEachFunction = recipe => {
    assert.ok(
      recipe.output.productKey || recipe.output.resourceKey,
      `Missing recipe.output.[productKey||resourceKey] for ${recipe.name}`
    );
  };
  R.forEach(forEachFunction, RefinerRecipe);
});

QUnit.test("Multiplier refiner recipes", assert => {
  const filterFunction = recipe => {
    const { productKey, resourceKey } = recipe.output;
    const productKeys = R.map(input => input.productKey, recipe.inputs);
    const resourceKeys = R.map(input => input.resourceKey, recipe.inputs);
    return (
      (productKey !== undefined && productKeys.includes(productKey)) ||
      (resourceKey !== undefined && resourceKeys.includes(resourceKey))
    );
  };
  const recipes = R.filter(filterFunction, RefinerRecipe);
  const mapFunction = recipe => RecipeUtils.toString(recipe);
  const content = R.map(mapFunction, recipes).sort();
  console.log(`Multiplier Recipes:
${content.join("\n")}`);
  assert.equal(recipes.length, 2);
});

const RefinerRecipeTest = {};
export default RefinerRecipeTest;
