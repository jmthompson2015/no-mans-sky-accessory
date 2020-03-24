import Product from "../artifact/Product.js";

import RecipeUtils from "./RecipeUtilities.js";
import RecipeNodeVisitor from "./RecipeNodeVisitor.js";

QUnit.module("RecipeNodeVisitor");

QUnit.test("Cryo-Pump", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.CRYO_PUMP)[0];
  const visitor = new RecipeNodeVisitor();

  // Run.
  RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(visitor.result);
  assert.equal(visitor.result.length, 5);
  // console.log(
  //   `visitor.result = ${R.map(
  //     r => RecipeUtils.toString(r),
  //     visitor.result
  //   ).join("\n")}`
  // );
  assert.equal(
    RecipeUtils.toString(visitor.result[0]),
    "Cryo-Pump x1 \u2190 Hot Ice x1 + Thermic Condensate x1"
  );
  assert.equal(
    RecipeUtils.toString(visitor.result[visitor.result.length - 1]),
    "Thermic Condensate x1 \u2190 Sulphurine x100 + Carbon x20 + Salt x10"
  );
});

const RecipeNodeVisitorTest = {};
export default RecipeNodeVisitorTest;
