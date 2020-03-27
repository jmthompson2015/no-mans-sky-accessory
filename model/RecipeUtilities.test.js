/* eslint no-console: ["error", { allow: ["log"] }] */

import CrafterRecipe from "../artifact/CrafterRecipe.js";
import Product from "../artifact/Product.js";
import RefinerRecipe from "../artifact/RefinerRecipe.js";
import Resource from "../artifact/Resource.js";

import RecipeUtilities from "./RecipeUtilities.js";

QUnit.module("RecipeUtilities");

const round4 = value => Math.round(value * 10000.0) / 10000.0;

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

QUnit.test("findByName()", assert => {
  // Setup.
  const name = "Chloride De-latticing";

  // Run.
  const result = RecipeUtilities.findByName(name);

  // Verify.
  assert.ok(result);
  assert.equal(result.name, name);
  assert.ok(result.output);
  assert.equal(result.output.resourceKey, Resource.CHLORINE);
  assert.ok(result.inputs);
  assert.equal(result.inputs.length, 1);
  assert.equal(result.inputs[0].productKey, Product.CHLORIDE_LATTICE);
});

QUnit.test("findByOutput()", assert => {
  // Setup.
  const outputKey = Resource.CHLORINE;

  // Run.
  const result = RecipeUtilities.findByOutput(outputKey);

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 8);

  const recipe0 = result[0];
  assert.ok(recipe0);
  assert.equal(round4(RecipeUtilities.outputInputRatio(recipe0)), 16.0533);
  assert.equal(recipe0.name, "Bonded Chlorine Extraction");
  assert.ok(recipe0.output);
  assert.equal(recipe0.output.resourceKey, outputKey);
  assert.ok(recipe0.inputs);
  assert.equal(recipe0.inputs.length, 2);
  assert.equal(recipe0.inputs[0].resourceKey, Resource.KELP_SAC);
  assert.equal(recipe0.inputs[1].resourceKey, Resource.OXYGEN);

  const recipeLast = R.last(result);
  assert.ok(recipeLast);
  assert.equal(round4(RecipeUtilities.outputInputRatio(recipeLast)), 1.0067);
  assert.equal(recipeLast.name, "Concentrate Salt");
  assert.ok(recipeLast.output);
  assert.equal(recipeLast.output.resourceKey, outputKey);
  assert.ok(recipeLast.inputs);
  assert.equal(recipeLast.inputs.length, 1);
  assert.equal(recipeLast.inputs[0].resourceKey, Resource.SALT);
});

QUnit.test("inputValue()", assert => {
  // Setup.
  const recipe = RecipeUtilities.findByName("Chloride De-latticing");

  // Run.
  const result = RecipeUtilities.inputValue(recipe);

  // Verify.
  assert.equal(result, 6150);
});

QUnit.test("outputInputRatio()", assert => {
  // Setup.
  const recipe = RecipeUtilities.findByName("Chloride De-latticing");

  // Run.
  const result = RecipeUtilities.outputInputRatio(recipe);

  // Verify.
  assert.equal(round4(result), 14.6829);
});

QUnit.test("outputValue() 0", assert => {
  // Setup.
  const recipe = RecipeUtilities.findByName("Chloride De-latticing");

  // Run.
  const result = RecipeUtilities.outputValue(recipe);

  // Verify.
  assert.equal(result, 90300);
});

QUnit.test("toString()", assert => {
  // Setup.
  const recipe = RecipeUtilities.findByName("Chloride De-latticing");

  // Run.
  const result = RecipeUtilities.toString(recipe);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Chlorine x150 \u2190 Chloride Lattice x1");
});

QUnit.test("toString() showName", assert => {
  // Setup.
  const recipe = RecipeUtilities.findByName("Chloride De-latticing");
  const showName = true;

  // Run.
  const result = RecipeUtilities.toString(recipe, showName);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Chloride De-latticing: Chlorine x150 \u2190 Chloride Lattice x1");
});

const RecipeUtilitiesTest = {};
export default RecipeUtilitiesTest;
