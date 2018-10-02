import CrafterRecipe from "../../artifact/CrafterRecipe.js";
import RefinerRecipe from "../../artifact/RefinerRecipe.js";

import RecipeTable from "./RecipeTable.js";
import TableRow from "./TableRow.js";

const crafterRows = R.map(recipe => TableRow.createTableRow(recipe), CrafterRecipe);
const refinerRows = R.map(recipe => TableRow.createTableRow(recipe), RefinerRecipe);
const rowData = R.concat(crafterRows, refinerRows);

const recipeTable = React.createElement(RecipeTable, {
  rowData
});

ReactDOM.render(recipeTable, document.getElementById("panel"));
