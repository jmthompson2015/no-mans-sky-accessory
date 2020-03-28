import Ingredient from "../artifact/Ingredient.js";
import Resolver from "../artifact/Resolver.js";

import RecipeUtils from "./RecipeUtilities.js";

const filterFunction = resourceKey => ingredient => resourceKey === ingredient.resourceKey;

const remove = (element, array) => {
  let answer = array;
  const index = array.indexOf(element);

  if (index > -1) {
    answer = [...array]; // new array copy
    answer.splice(index, 1);
  }

  return answer;
};

class RecipeResourceVisitor {
  constructor() {
    this.result = [];
  }

  visit(recipe) {
    recipe.inputs.forEach(input => {
      const resource = Resolver.resource(input.resourceKey);

      if (resource) {
        const records = R.filter(filterFunction(input.resourceKey), this.result);
        const record = records.length > 0 ? records[0] : null;

        if (record) {
          this.result = remove(record, this.result);
          this.result.push(
            Ingredient.create({
              resourceKey: input.resourceKey,
              amount: record.amount + input.amount
            })
          );
        } else {
          this.result.push(input);
        }
        this.result = R.sortBy(R.prop("resourceKey"), this.result);
      } else {
        const recipes2 = RecipeUtils.findByOutput(input.productKey || input.resourceKey);

        if (recipes2.length > 0) {
          const recipe2 = recipes2[0];
          RecipeUtils.accept(recipe2, this);
        } else {
          this.result.push(input);
        }
      }
    });
  }
}

export default RecipeResourceVisitor;
