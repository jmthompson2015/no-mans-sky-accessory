import Product from "../../artifact/Product.js";

import RecipeUtils from "../../model/RecipeUtilities.js";

import TreeUI from "./TreeUI.js";

const recipe = RecipeUtils.findByOutput(Product.CRYO_PUMP)[0];

const element = React.createElement(TreeUI, { recipe });
ReactDOM.render(element, document.getElementById("panel"));
