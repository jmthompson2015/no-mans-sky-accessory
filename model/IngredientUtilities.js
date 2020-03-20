import Resolver from "../artifact/Resolver.js";

const IngredientUtilities = {};

const arrayToString = array => {
  const reduceFunction = (accum, ingredient) =>
    `${accum}${IngredientUtilities.toString(ingredient)} + `;
  const string = R.reduce(reduceFunction, "", array);

  return string.substring(0, string.length - " + ".length);
};

IngredientUtilities.thing = ingredient =>
  ingredient
    ? Resolver.thing(ingredient.productKey || ingredient.resourceKey)
    : undefined;

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
