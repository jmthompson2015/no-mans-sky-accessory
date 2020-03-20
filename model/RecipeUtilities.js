import CrafterRecipe from "../artifact/CrafterRecipe.js";
import RefinerRecipe from "../artifact/RefinerRecipe.js";

import IngredientUtils from "./IngredientUtilities.js";

const RecipeUtilities = {};

RecipeUtilities.accept = (recipe, visitor) => {
  visitor.visit(recipe);
};

RecipeUtilities.findByName = name => {
  const filterFunction = r => r.name === name;
  const recipes1 = R.filter(filterFunction, CrafterRecipe);
  let answer = recipes1.length > 0 ? recipes1[0] : null;

  if (!answer) {
    const recipes2 = R.filter(filterFunction, RefinerRecipe);
    answer = recipes2.length > 0 ? recipes2[0] : null;
  }

  return answer;
};

RecipeUtilities.findByOutput = thingKey => {
  const filterFunction = r =>
    r.output.productKey === thingKey || r.output.resourceKey === thingKey;
  const recipes1 = R.filter(filterFunction, CrafterRecipe);
  let answer = recipes1.length > 0 ? recipes1[0] : null;

  if (!answer) {
    const recipes2 = R.filter(filterFunction, RefinerRecipe);
    answer = recipes2.length > 0 ? recipes2[0] : null;
  }

  return answer;
};

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
  return `${prefix}${IngredientUtils.toString(
    recipe.output
  )} \u2190 ${IngredientUtils.toString(recipe.inputs)}`;
};

export default RecipeUtilities;
