import IngredientUtils from "./IngredientUtilities.js";
import RecipeResourceVisitor from "./RecipeResourceVisitor.js";
import RecipeUtils from "./RecipeUtilities.js";

const RecipeResourceUtilities = {};

RecipeResourceUtilities.outputResourceRatio = recipe => {
  const outputValue = RecipeUtils.outputValue(recipe);
  const resourceValue = RecipeResourceUtilities.resourceValue(recipe);

  return resourceValue !== 0 ? outputValue / resourceValue : null;
};

RecipeResourceUtilities.resourceValue = recipe => {
  const visitor = new RecipeResourceVisitor();
  RecipeUtils.accept(recipe, visitor);
  const reduceFunction = (accum, input) => {
    const value = IngredientUtils.value(input);

    return value ? accum + value : accum;
  };

  return R.reduce(reduceFunction, 0, visitor.result);
};

export default RecipeResourceUtilities;
