const Ingredient = {};

Ingredient.create = ({ productKey, resourceKey, amount = 1 }) =>
  Immutable({
    productKey,
    resourceKey,
    amount
  });

Object.freeze(Ingredient);

export default Ingredient;
