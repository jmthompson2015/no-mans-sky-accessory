import Product from "../../artifact/Product.js";

import RecipeTreeVisitor from "../../model/RecipeTreeVisitor.js";
import RecipeUtils from "../../model/RecipeUtilities.js";

import TreeUI from "./TreeUI.js";

QUnit.module("TreeUI");

QUnit.test("Acid", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.ACID)[0];
  const visitor = new RecipeTreeVisitor();
  const root = RecipeUtils.accept(recipe, visitor);

  // Run.
  const result = TreeUI.createUnorderedList(root);

  // Verify.
  assert.ok(result);
  const expected = "<ul><li>Fungal Mould x600</li><li>Mordite x25</li></ul>";
  assert.equal(result, expected);
});

QUnit.test("Cryo-Pump", assert => {
  // Setup.
  const recipe = RecipeUtils.findByOutput(Product.CRYO_PUMP)[0];
  const visitor = new RecipeTreeVisitor();
  const root = RecipeUtils.accept(recipe, visitor);

  // Run.
  const result = TreeUI.createUnorderedList(root);

  // Verify.
  assert.ok(result);
  const expected =
    "<ul>" +
    "<li>Hot Ice x1</li>" +
    "<ul>" +
    "<li>Enriched Carbon x1</li>" +
    "<ul>" +
    "<li>Condensed Carbon x50</li>" +
    "<li>Radon x250</li>" +
    "</ul>" +
    "<li>Nitrogen Salt x1</li>" +
    "<ul>" +
    "<li>Condensed Carbon x50</li>" +
    "<li>Nitrogen x250</li>" +
    "</ul>" +
    "</ul>" +
    "<li>Thermic Condensate x1</li>" +
    "<ul>" +
    "<li>Condensed Carbon x50</li>" +
    "<li>Sulphurine x250</li>" +
    "</ul>" +
    "</ul>";
  assert.equal(result, expected);
});

const TreeUITest = {};
export default TreeUITest;
