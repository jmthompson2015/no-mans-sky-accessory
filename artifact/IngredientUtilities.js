import Product from "./Product.js";
import Resource from "./Resource.js";

const IngredientUtilities = {};

IngredientUtilities.thing = ingredient =>
  ingredient
    ? Resource.properties[ingredient.resourceKey] || Product.properties[ingredient.productKey]
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

  const productOrResource = IngredientUtilities.thing(ingredient);
  return `${productOrResource.name} x${ingredient.amount}`;
};

export default IngredientUtilities;
