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
  assert.equal(visitor.result.length, 4);
  // console.log(
  //   `visitor.result = ${R.map(r => IngredientUtils.toString(r), visitor.result).join("\n")}`
  // );
  assert.equal(IngredientUtils.toString(visitor.result[0]), "Condensed Carbon x150");
  assert.equal(
    IngredientUtils.toString(visitor.result[visitor.result.length - 1]),
    "Sulphurine x250"
  );
});

const RecipeResourceVisitorTest = {};
export default RecipeResourceVisitorTest;
