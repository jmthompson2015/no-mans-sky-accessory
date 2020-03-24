import RecipeUtils from "./RecipeUtilities.js";

class RecipeNodeVisitor {
  constructor() {
    this.result = [];
  }

  visit(recipe) {
    this.result.push(recipe);

    recipe.inputs.forEach(input => {
      const recipes2 = RecipeUtils.findByOutput(input.productKey || input.resourceKey);

      if (recipes2.length > 0) {
        const recipe2 = recipes2[0];
        RecipeUtils.accept(recipe2, this);
      }
    });
  }
}

export default RecipeNodeVisitor;
