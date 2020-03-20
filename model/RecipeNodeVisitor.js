import RecipeUtils from "./RecipeUtilities.js";

class RecipeNodeVisitor {
  constructor() {
    this.result = [];
  }

  visit(recipe) {
    this.result.push(recipe);

    recipe.inputs.forEach(input => {
      const recipe2 = RecipeUtils.findByOutput(
        input.productKey || input.resourceKey
      );

      if (recipe2) {
        RecipeUtils.accept(recipe2, this);
      }
    });
  }
}

export default RecipeNodeVisitor;
