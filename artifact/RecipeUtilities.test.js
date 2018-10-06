/* eslint no-console: ["error", { allow: ["log"] }] */

import CrafterRecipe from "./CrafterRecipe.js";
import RecipeUtilities from "./RecipeUtilities.js";
import RefinerRecipe from "./RefinerRecipe.js";

QUnit.module("RecipeUtilities");

QUnit.test("best recipes report", assert => {
  const allRecipes = R.concat(CrafterRecipe, RefinerRecipe);
  const reduceFunction = (accum, recipe) => {
    const outputKey = recipe.output.resourceKey
      ? recipe.output.resourceKey
      : recipe.output.productKey;

    if (accum[outputKey] === undefined) {
      return R.assoc(outputKey, [recipe], accum);
    }

    return R.assoc(outputKey, R.append(recipe, accum[outputKey]), accum);
  };
  const map = R.reduce(reduceFunction, {}, allRecipes);

  const reduceFunction1 = (accum1, outputKey) => {
    const recipes = map[outputKey];

    if (recipes) {
      let bestRatio;
      let bestRecipe;
      const reduceFunction2 = (accum2, recipe) => {
        const outputValue = RecipeUtilities.outputValue(recipe);
        const cost = RecipeUtilities.inputValue(recipe);
        const ratio = outputValue && cost ? outputValue / cost : undefined;

        if (bestRatio === undefined || ratio > bestRatio) {
          bestRatio = ratio;
          bestRecipe = recipe;
        }
        return accum2;
      };
      R.reduce(reduceFunction2, Number.INFINITY, recipes);

      if (bestRecipe) {
        const suffix = bestRecipe.device === "refiner" ? "(Refined)" : "(Crafted)";
        return `${accum1}${RecipeUtilities.toString(bestRecipe)} ${suffix}
`;
      }
    }

    return accum1;
  };
  const outputKeys = Object.keys(map).sort();
  const content = R.reduce(reduceFunction1, "\n", outputKeys);
  console.log(content);

  assert.ok(true);
});

QUnit.test("inputValue() 0", assert => {
  // Setup.
  const recipe = RefinerRecipe[0];

  // Run.
  const result = RecipeUtilities.inputValue(recipe);

  // Verify.
  assert.equal(result, 654);
});

QUnit.test("outputValue() 0", assert => {
  // Setup.
  const recipe = RefinerRecipe[0];

  // Run.
  const result = RecipeUtilities.outputValue(recipe);

  // Verify.
  assert.equal(result, 202);
});

QUnit.test("toString() 0", assert => {
  // Setup.
  const recipe = RefinerRecipe[0];

  // Run.
  const result = RecipeUtilities.toString(recipe);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Gold x1 \u2190 Hexite x1");
});

QUnit.test("toString() 0 showName", assert => {
  // Setup.
  const recipe = RefinerRecipe[0];
  const showName = true;

  // Run.
  const result = RecipeUtilities.toString(recipe, showName);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Alchemical Construction: Gold x1 \u2190 Hexite x1");
});

const RecipeUtilitiesTest = {};
export default RecipeUtilitiesTest;
