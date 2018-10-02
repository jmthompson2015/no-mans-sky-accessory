import RecipeUtilities from "./RecipeUtilities.js";
import RefinerRecipe from "./RefinerRecipe.js";

QUnit.module("RecipeUtilities");

QUnit.test("toString() 0", assert => {
  // Setup.
  const recipe = RefinerRecipe[0];

  // Run.
  const result = RecipeUtilities.toString(recipe);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Gold x1 <= Hexite x1");
});

QUnit.test("toString() 0 showName", assert => {
  // Setup.
  const recipe = RefinerRecipe[0];
  const showName = true;

  // Run.
  const result = RecipeUtilities.toString(recipe, showName);

  // Verify.
  assert.ok(result);
  assert.equal(result, "Alchemical Construction: Gold x1 <= Hexite x1");
});

const RecipeUtilitiesTest = {};
export default RecipeUtilitiesTest;
