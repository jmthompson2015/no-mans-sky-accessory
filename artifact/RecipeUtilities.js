import IngredientUtils from "./IngredientUtilities.js";

const RecipeUtilities = {};

RecipeUtilities.inputValue = recipe => {
  const reduceFunction = (accum, input) => {
    const value = IngredientUtils.value(input);

    return value ? accum + value : accum;
  };

  return R.reduce(reduceFunction, 0, recipe.inputs);
};

RecipeUtilities.outputValue = recipe => IngredientUtils.value(recipe.output);

RecipeUtilities.toString = (recipe, showName) => {
  const prefix = showName ? `${recipe.name}: ` : "";
  return `${prefix}${IngredientUtils.toString(recipe.output)} \u2190 ${IngredientUtils.toString(
    recipe.inputs
  )}`;
};

export default RecipeUtilities;
