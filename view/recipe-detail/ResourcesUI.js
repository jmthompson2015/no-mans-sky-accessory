import IngredientUtils from "../../model/IngredientUtilities.js";
import RecipeResourceVisitor from "../../model/RecipeResourceVisitor.js";
import RecipeUtils from "../../model/RecipeUtilities.js";

class ResourcesUI extends React.Component {
  render() {
    const { recipe } = this.props;
    const title = recipe ? IngredientUtils.toString(recipe.output) : "";
    const titleUI = ReactDOMFactories.span({}, title);

    const visitor = new RecipeResourceVisitor();
    RecipeUtils.accept(recipe, visitor);
    const resources0 = visitor.result;
    const mapFunction = ingredient => IngredientUtils.toString(ingredient);
    const resources = R.map(mapFunction, resources0).join("<br/>");
    const resourcesUI = ReactDOMFactories.td({
      className: "tl",
      dangerouslySetInnerHTML: { __html: resources }
    });

    const rows = [
      ReactDOMFactories.tr({ key: "titleRow" }, ReactDOMFactories.td({ className: "b" }, titleUI)),
      ReactDOMFactories.tr({ key: "resourcesRow" }, resourcesUI)
    ];

    return ReactDOMFactories.table(
      { className: "bg-light-gray" },
      ReactDOMFactories.tbody({}, rows)
    );
  }
}

ResourcesUI.propTypes = {
  recipe: PropTypes.shape()
};

ResourcesUI.defaultProps = {
  recipe: undefined
};

export default ResourcesUI;
