import CrafterRecipe from "./CrafterRecipe.js";
import Product from "./Product.js";

QUnit.module("CrafterRecipe");

QUnit.test("CrafterRecipe properties 0", assert => {
  const recipe = CrafterRecipe[0];
  assert.equal(recipe.name, "Acid");
  assert.equal(recipe.inputs.length, 2);
});

QUnit.test("CrafterRecipe ingredients", assert => {
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
  R.forEach(forEachFunction, CrafterRecipe);
});

QUnit.test("CrafterRecipe output", assert => {
  const forEachFunction = recipe => {
    assert.ok(recipe.output.productKey, `Missing recipe.output.productKey for ${recipe.name}`);
  };
  R.forEach(forEachFunction, CrafterRecipe);
});

QUnit.test("CrafterRecipe exists for product", assert => {
  const forEachFunction = productKey => {
    if (![Product.NANITE_CLUSTERS].includes(productKey)) {
      const recipes = R.filter(recipe => recipe.output.productKey === productKey, CrafterRecipe);
      assert.equal(recipes.length, 1, `Missing recipe for ${productKey}`);
    }
  };
  R.forEach(forEachFunction, Object.keys(Product.properties));
});

const CrafterRecipeTest = {};
export default CrafterRecipeTest;
