import DataTable from "../DataTable.js";

import TableColumns from "./TableColumns.js";

const createLink = property => data => {
  const name0 = data[property];

  if (name0) {
    const name = name0.replace(/ /g, "_");
    return ReactDOMFactories.a(
      { href: `https://nomanssky.gamepedia.com/${name}`, target: "_blank" },
      name0
    );
  }

  return undefined;
};

const valueFunctions = {};

class RecipeTable extends React.Component {
  render() {
    const { rowData: myRowData } = this.props;
    const cellFunctions = {
      output: createLink("output"),
      input1: createLink("input1"),
      input2: createLink("input2"),
      input3: createLink("input3")
    };

    const table = React.createElement(DataTable, {
      columns: TableColumns,
      rowData: myRowData,
      cellFunctions,
      valueFunctions
    });

    const rows = [];

    rows.push(
      ReactDOMFactories.tr(
        {
          key: rows.length
        },
        ReactDOMFactories.td({}, table)
      )
    );

    return ReactDOMFactories.table({}, ReactDOMFactories.tbody({}, rows));
  }
}

RecipeTable.propTypes = {
  rowData: PropTypes.arrayOf().isRequired
};

export default RecipeTable;
