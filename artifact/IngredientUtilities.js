import Product from "./Product.js";
import Resource from "./Resource.js";

const IngredientUtilities = {};

IngredientUtilities.thing = ingredient =>
  ingredient
    ? Resource.properties[ingredient.resourceKey] ||
      Product.properties[ingredient.productKey]
    : undefined;

const arrayToString = array => {
  const reduceFunction = (accum, myIngredient) =>
    `${accum}${IngredientUtilities.toString(myIngredient)} + `;
  const string = R.reduce(reduceFunction, "", array);

  return string.substring(0, string.length - " + ".length);
};

IngredientUtilities.toString = ingredient => {
  if (Array.isArray(ingredient)) {
    return arrayToString(ingredient);
  }

  const thing = IngredientUtilities.thing(ingredient);

  return `${thing.name} x${ingredient.amount}`;
};

IngredientUtilities.value = ingredient => {
  const thing = IngredientUtilities.thing(ingredient);
  const { baseValue } = thing;
  const { amount } = ingredient;

  return baseValue && amount ? baseValue * amount : undefined;
};

export default IngredientUtilities;
