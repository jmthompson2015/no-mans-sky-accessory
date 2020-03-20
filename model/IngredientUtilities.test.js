import Ingredient from "../artifact/Ingredient.js";
import Product from "../artifact/Product.js";
import Resource from "../artifact/Resource.js";

import IngredientUtilities from "./IngredientUtilities.js";

QUnit.module("IngredientUtilities");

QUnit.test("thing()", assert => {
  assert.equal(
    IngredientUtilities.thing(Ingredient.create({ productKey: Product.GLASS }))
      .name,
    "Glass"
  );
  assert.equal(
    IngredientUtilities.thing(
      Ingredient.create({ resourceKey: Resource.CARBON })
    ).name,
    "Carbon"
  );
  assert.equal(IngredientUtilities.thing(undefined), undefined);
});

QUnit.test("toString() ingredient", assert => {
  // Setup.
  const ingredient = Ingredient.create({
    resourceKey: Resource.CARBON,
    amount: 5
  });

  // Run.
  const result = IngredientUtilities.toString(ingredient);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Carbon x5");
});

QUnit.test("toString() ingredients", assert => {
  // Setup.
  const ingredients = [
    Ingredient.create({ resourceKey: Resource.CARBON, amount: 5 }),
    Ingredient.create({ resourceKey: Resource.OXYGEN, amount: 2 })
  ];

  // Run.
  const result = IngredientUtilities.toString(ingredients);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Carbon x5 + Oxygen x2");
});

QUnit.test("value() Carbon", assert => {
  // Setup.
  const ingredient = Ingredient.create({
    resourceKey: Resource.CARBON,
    amount: 5
  });

  // Run.
  const result = IngredientUtilities.value(ingredient);

  // Verify.
  assert.equal(result, 60);
});

const IngredientUtilitiesTest = {};
export default IngredientUtilitiesTest;
