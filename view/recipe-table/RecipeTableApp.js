import CrafterRecipe from "../../artifact/CrafterRecipe.js";
import RefinerRecipe from "../../artifact/RefinerRecipe.js";

import RecipeTable from "./RecipeTable.js";
import TableRow from "./TableRow.js";

const mapFunction = recipe => TableRow.createTableRow(recipe);
const crafterRows = R.map(mapFunction, CrafterRecipe);
const refinerRows = R.map(mapFunction, RefinerRecipe);
const rowData0 = R.concat(crafterRows, refinerRows);

const comparator = (a, b) =>
  a.output === b.output
    ? R.descend(R.prop("outputResourceRatio"))(a, b)
    : R.ascend(R.prop("output"))(a, b);
const rowData = R.sort(comparator, rowData0);

const recipeTable = React.createElement(RecipeTable, { rowData });

ReactDOM.render(recipeTable, document.getElementById("panel"));
