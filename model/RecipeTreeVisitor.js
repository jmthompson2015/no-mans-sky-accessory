import RecipeUtils from "./RecipeUtilities.js";

class RecipeTreeVisitor {
  visit(recipe) {
    const answer = {
      content: recipe,
      children: []
    };

    recipe.inputs.forEach(input => {
      const recipes2 = RecipeUtils.findByOutput(input.productKey || input.resourceKey);

      if (recipes2.length > 0) {
        const recipe2 = recipes2[0];
        const child = RecipeUtils.accept(recipe2, this);
        answer.children.push(child);
      } else {
        answer.children.push({ content: input });
      }
    });

    return answer;
  }
}

export default RecipeTreeVisitor;
