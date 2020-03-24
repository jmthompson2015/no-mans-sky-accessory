import Product from "../artifact/Product.js";

import IngredientUtils from "./IngredientUtilities.js";
import RecipeUtils from "./RecipeUtilities.js";
import RecipeTreeVisitor from "./RecipeTreeVisitor.js";

QUnit.module("RecipeTreeVisitor");

QUnit.test("Acid", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.ACID)[0];
  const visitor = new RecipeTreeVisitor();

  // Run.
  const result = RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(result);
  assert.equal(result.children.length, 2);
  assert.equal(IngredientUtils.toString(result.children[0].content), "Fungal Mould x600");
  assert.equal(IngredientUtils.toString(result.children[1].content), "Mordite x25");
});

QUnit.test("Cryo-Pump", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.CRYO_PUMP)[0];
  const visitor = new RecipeTreeVisitor();

  // Run.
  const result = RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(result);
  assert.equal(
    RecipeUtils.toString(result.content),
    "Cryo-Pump x1 \u2190 Hot Ice x1 + Thermic Condensate x1"
  );
  assert.equal(result.children.length, 2);

  // Hot Ice
  const hotIceNode = result.children[0];
  assert.ok(hotIceNode);
  assert.equal(
    RecipeUtils.toString(hotIceNode.content),
    "Hot Ice x1 \u2190 Enriched Carbon x1 + Nitrogen Salt x1"
  );
  assert.equal(hotIceNode.children.length, 2);

  // Enriched Carbon
  const enrichedNode = hotIceNode.children[0];
  assert.ok(enrichedNode);
  assert.equal(
    RecipeUtils.toString(enrichedNode.content),
    "Enriched Carbon x1 \u2190 Radon x100 + Carbon x20 + Salt x10"
  );
  assert.equal(enrichedNode.children.length, 3);
  assert.equal(IngredientUtils.toString(enrichedNode.children[0].content), "Radon x100");
  assert.equal(IngredientUtils.toString(enrichedNode.children[1].content), "Carbon x20");
  assert.equal(IngredientUtils.toString(enrichedNode.children[2].content), "Salt x10");

  // Nitrogen Salt
  const saltNode = hotIceNode.children[1];
  assert.ok(saltNode);
  assert.equal(
    RecipeUtils.toString(saltNode.content),
    "Nitrogen Salt x1 \u2190 Nitrogen x100 + Carbon x20 + Salt x10"
  );
  assert.equal(saltNode.children.length, 3);
  assert.equal(IngredientUtils.toString(saltNode.children[0].content), "Nitrogen x100");
  assert.equal(IngredientUtils.toString(saltNode.children[1].content), "Carbon x20");
  assert.equal(IngredientUtils.toString(saltNode.children[2].content), "Salt x10");

  // Thermic Condensate
  const thermicNode = result.children[1];
  assert.ok(thermicNode);
  assert.equal(
    RecipeUtils.toString(thermicNode.content),
    "Thermic Condensate x1 \u2190 Sulphurine x100 + Carbon x20 + Salt x10"
  );
  assert.equal(thermicNode.children.length, 3);
  assert.equal(IngredientUtils.toString(thermicNode.children[0].content), "Sulphurine x100");
  assert.equal(IngredientUtils.toString(thermicNode.children[1].content), "Carbon x20");
  assert.equal(IngredientUtils.toString(thermicNode.children[2].content), "Salt x10");
});

QUnit.test("Herox", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.HEROX)[0];
  const visitor = new RecipeTreeVisitor();

  // Run.
  const result = RecipeUtils.accept(recipe, visitor);

  // Verify.
  assert.ok(result);
  console.log(`result = ${JSON.stringify(result)}`);
  assert.equal(result.children.length, 3);
  assert.equal(IngredientUtils.toString(result.children[0].content), "Ammonia x30");
  assert.equal(IngredientUtils.toString(result.children[1].content), "Cobalt x60");
  assert.equal(IngredientUtils.toString(result.children[2].content), "Tritium x20");
});

const RecipeTreeVisitorTest = {};
export default RecipeTreeVisitorTest;
