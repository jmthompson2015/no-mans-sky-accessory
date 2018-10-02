import Ingredient from "./Ingredient.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

QUnit.module("Ingredient");

QUnit.test("create() product", assert => {
  // Setup.
  const productKey = Product.GLASS;
  const amount = 2;

  // Run.
  const result = Ingredient.create({ productKey, amount });

  // Verify.
  assert.ok(result);
  assert.equal(result.productKey, productKey);
  assert.equal(result.resourceKey, undefined);
  assert.equal(result.amount, amount);
});

QUnit.test("create() resource", assert => {
  // Setup.
  const resourceKey = Resource.CARBON;
  const amount = 2;

  // Run.
  const result = Ingredient.create({ resourceKey, amount });

  // Verify.
  assert.ok(result);
  assert.equal(result.productKey, undefined);
  assert.equal(result.resourceKey, resourceKey);
  assert.equal(result.amount, amount);
});

const IngredientTest = {};
export default IngredientTest;
