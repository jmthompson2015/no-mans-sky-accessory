import Product from "../artifact/Product.js";

import IngredientUtils from "./IngredientUtilities.js";
import RecipeUtils from "./RecipeUtilities.js";
import RecipeResourceVisitor from "./RecipeResourceVisitor.js";

QUnit.module("RecipeResourceVisitor");

QUnit.test("Acid", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.ACID)[0];
  const visitor = new RecipeResourceVisitor();

  // Run.
  RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(visitor.result);
  assert.equal(visitor.result.length, 2);
  // console.log(
  //   `visitor.result = ${R.map(r => IngredientUtils.toString(r), visitor.result).join("\n")}`
  // );
  assert.equal(IngredientUtils.toString(visitor.result[0]), "Fungal Mould x600");
  assert.equal(IngredientUtils.toString(visitor.result[visitor.result.length - 1]), "Mordite x25");
});

QUnit.test("Cryo-Pump", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.CRYO_PUMP)[0];
  const visitor = new RecipeResourceVisitor();

  // Run.
  RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(visitor.result);
  assert.equal(visitor.result.length, 5);
  // console.log(
  //   `visitor.result = ${R.map(r => IngredientUtils.toString(r), visitor.result).join("\n")}`
  // );
  assert.equal(IngredientUtils.toString(visitor.result[0]), "Carbon x60");
  assert.equal(
    IngredientUtils.toString(visitor.result[visitor.result.length - 1]),
    "Sulphurine x100"
  );
});

QUnit.test("Warp Hypercore", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.WARP_HYPERCORE)[0];
  const visitor = new RecipeResourceVisitor();

  // Run.
  RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(visitor.result);
  assert.equal(visitor.result.length, 3);
  // console.log(
  //   `visitor.result = ${R.map(r => IngredientUtils.toString(r), visitor.result).join("\n")}`
  // );
  assert.equal(IngredientUtils.toString(visitor.result[0]), "Chromatic Metal x25");
  assert.equal(
    IngredientUtils.toString(visitor.result[visitor.result.length - 1]),
    "Storm Crystal x1"
  );
});

const RecipeResourceVisitorTest = {};
export default RecipeResourceVisitorTest;
