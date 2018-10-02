import IngredientUtils from "./IngredientUtilities.js";

const RecipeUtilities = {};

RecipeUtilities.toString = (recipe, showName) => {
  const prefix = showName ? `${recipe.name}: ` : "";
  return `${prefix}${IngredientUtils.toString(recipe.output)} <= ${IngredientUtils.toString(
    recipe.inputs
  )}`;
};

export default RecipeUtilities;
