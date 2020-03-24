import IngredientUtils from "../../model/IngredientUtilities.js";
import RecipeTreeVisitor from "../../model/RecipeTreeVisitor.js";
import RecipeUtils from "../../model/RecipeUtilities.js";

class TreeUI extends React.Component {
  render() {
    const { recipe } = this.props;
    const title = recipe ? IngredientUtils.toString(recipe.output) : "";
    const titleUI = ReactDOMFactories.span({}, title);
    const visitor = new RecipeTreeVisitor();
    const root = RecipeUtils.accept(recipe, visitor);
    const unorderedList = TreeUI.createUnorderedList(root);
    const inputsUI = ReactDOMFactories.td({
      className: "tl",
      dangerouslySetInnerHTML: { __html: unorderedList }
    });

    const rows = [
      ReactDOMFactories.tr({ key: "titleRow" }, ReactDOMFactories.td({ className: "b" }, titleUI)),
      ReactDOMFactories.tr({ key: "inputRow" }, inputsUI)
    ];

    return ReactDOMFactories.table(
      { className: "bg-light-gray" },
      ReactDOMFactories.tbody({}, rows)
    );
  }
}

TreeUI.propTypes = {
  recipe: PropTypes.shape()
};

TreeUI.defaultProps = {
  recipe: undefined
};

TreeUI.createListItem = node => {
  let answer = "<li>";

  if (node.content.output) {
    answer += IngredientUtils.toString(node.content.output);
    answer += "</li>";
    answer += TreeUI.createUnorderedList(node);
  } else {
    answer += IngredientUtils.toString(node.content);
    answer += "</li>";
  }

  return answer;
};

TreeUI.createUnorderedList = node => {
  let answer = "<ul>";

  if (node.content) {
    if (node.children) {
      node.children.forEach(child => {
        answer += TreeUI.createListItem(child);
      });
    }
  } else {
    answer += TreeUI.createListItem(node);
  }

  answer += "</ul>";

  return answer;
};

export default TreeUI;
