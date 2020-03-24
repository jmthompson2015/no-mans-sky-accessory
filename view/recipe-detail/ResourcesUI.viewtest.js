import Product from "../../artifact/Product.js";

import RecipeUtils from "../../model/RecipeUtilities.js";

import ResourcesUI from "./ResourcesUI.js";

const recipe = RecipeUtils.findByOutput(Product.CRYO_PUMP)[0];

const element = React.createElement(ResourcesUI, { recipe });
ReactDOM.render(element, document.getElementById("panel"));
