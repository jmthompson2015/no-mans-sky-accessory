import Resource from "../../artifact/Resource.js";

import ResourceTable from "./ResourceTable.js";
import TableRow from "./TableRow.js";

const resources = Object.values(Resource.properties);
const rowData = R.map(resource => TableRow.createTableRow(resource), resources);

const resourceTable = React.createElement(ResourceTable, { rowData });

ReactDOM.render(resourceTable, document.getElementById("panel"));
