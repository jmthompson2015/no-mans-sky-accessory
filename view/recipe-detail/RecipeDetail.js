import CrafterRecipe from "../../artifact/CrafterRecipe.js";
import RefinerRecipe from "../../artifact/RefinerRecipe.js";

import ResourcesUI from "./ResourcesUI.js";
import SelectUI from "./SelectUI.js";
import TreeUI from "./TreeUI.js";

const createResources = recipe => {
  const answer = React.createElement(ResourcesUI, { recipe });

  return answer;
};

const createSelect = onChange => {
  const recipes = R.concat(CrafterRecipe, RefinerRecipe);
  const answer = React.createElement(SelectUI, { onChange, recipes });

  return answer;
};

const createTree = recipe => {
  const answer = React.createElement(TreeUI, { recipe });

  return answer;
};

const titleClass = "f3 tc white";

class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);

    const recipe = CrafterRecipe[0];
    this.state = { recipe };

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction(recipe) {
    // console.log(`handleChangeFunction() recipe = ${JSON.stringify(recipe)}`);
    this.setState({ recipe });
  }

  render() {
    const { recipe } = this.state;

    const rows = [
      ReactDOMFactories.tr(
        { key: "selectTitle" },
        ReactDOMFactories.td({ className: titleClass }, "Recipe")
      ),
      ReactDOMFactories.tr(
        { key: "selectRow" },
        ReactDOMFactories.td({}, createSelect(this.handleChange))
      ),
      ReactDOMFactories.tr(
        { key: "treeTitle" },
        ReactDOMFactories.td({ className: titleClass }, "Tree")
      ),
      ReactDOMFactories.tr({ key: "treeRow" }, ReactDOMFactories.td({}, createTree(recipe))),
      ReactDOMFactories.tr(
        { key: "resourcesTitle" },
        ReactDOMFactories.td({ className: titleClass }, "Resources")
      ),
      ReactDOMFactories.tr(
        { key: "resourcesRow" },
        ReactDOMFactories.td({}, createResources(recipe))
      )
    ];

    return ReactDOMFactories.table({}, ReactDOMFactories.tbody({}, rows));
  }
}

export default RecipeDetail;
