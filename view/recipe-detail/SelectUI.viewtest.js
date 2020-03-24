/* eslint no-console: ["error", { allow: ["log"] }] */

import CrafterRecipe from "../../artifact/CrafterRecipe.js";
import RefinerRecipe from "../../artifact/RefinerRecipe.js";

import RecipeUtils from "../../model/RecipeUtilities.js";

import SelectUI from "./SelectUI.js";

const recipes = R.concat(CrafterRecipe, RefinerRecipe);

const onChange = recipe => {
  console.log(`onChange() recipe = ${RecipeUtils.toString(recipe)}`);
};

const element = React.createElement(SelectUI, { recipes, onChange });
ReactDOM.render(element, document.getElementById("panel"));
