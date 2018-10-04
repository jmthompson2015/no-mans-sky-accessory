import Product from "../../artifact/Product.js";

import ProductTable from "./ProductTable.js";
import TableRow from "./TableRow.js";

const products = Object.values(Product.properties);
const rowData = R.map(product => TableRow.createTableRow(product), products);

const productTable = React.createElement(ProductTable, { rowData });

ReactDOM.render(productTable, document.getElementById("panel"));
