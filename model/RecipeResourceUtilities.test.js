import RecipeResourceUtilities from "./RecipeResourceUtilities.js";
import RecipeUtils from "./RecipeUtilities.js";

QUnit.module("RecipeResourceUtilities");

const round4 = value => Math.round(value * 10000.0) / 10000.0;

QUnit.test("outputResourceRatio() Acid", assert => {
  // Setup.
  const recipe = RecipeUtils.findByName("Acid");

  // Run.
  const result = RecipeResourceUtilities.outputResourceRatio(recipe);

  // Verify.
  assert.equal(round4(result), 17.7358);
});

QUnit.test("outputResourceRatio() Cryo-Pump", assert => {
  // Setup.
  const recipe = RecipeUtils.findByName("Cryo-Pump");

  // Run.
  const result = RecipeResourceUtilities.outputResourceRatio(recipe);

  // Verify.
  assert.equal(round4(result), 95.6023);
});

QUnit.test("outputResourceRatio() Warp Hypercore", assert => {
  // Setup.
  const recipe = RecipeUtils.findByName("Warp Hypercore");

  // Run.
  const result = RecipeResourceUtilities.outputResourceRatio(recipe);

  // Verify.
  assert.equal(round4(result), 0.3444);
});

QUnit.test("resourceValue() Acid", assert => {
  // Setup.
  const recipe = RecipeUtils.findByName("Acid");

  // Run.
  const result = RecipeResourceUtilities.resourceValue(recipe);

  // Verify.
  assert.equal(result, 10600);
});

QUnit.test("resourceValue() Cryo-Pump", assert => {
  // Setup.
  const recipe = RecipeUtils.findByName("Cryo-Pump");

  // Run.
  const result = RecipeResourceUtilities.resourceValue(recipe);

  // Verify.
  assert.equal(result, 15690);
});

QUnit.test("resourceValue() Warp Hypercore", assert => {
  // Setup.
  const recipe = RecipeUtils.findByName("Warp Hypercore");

  // Run.
  const result = RecipeResourceUtilities.resourceValue(recipe);

  // Verify.
  assert.equal(result, 6605 + 129150);
});

const RecipeResourceUtilitiesTest = {};
export default RecipeResourceUtilitiesTest;
