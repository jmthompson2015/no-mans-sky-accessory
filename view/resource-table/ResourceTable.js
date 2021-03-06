import DataTable from "../DataTable.js";

import TableColumns from "./TableColumns.js";

const createLink = data => {
  const name = data.element.replace(/ /g, "_");
  return ReactDOMFactories.a(
    { href: `https://nomanssky.gamepedia.com/${name}`, target: "_blank" },
    data.element
  );
};

const valueFunctions = {};

class ResourceTable extends React.Component {
  render() {
    const { rowData: myRowData } = this.props;
    const cellFunctions = {
      icon: data => ReactDOMFactories.img({ src: data.icon }),
      element: createLink
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

ResourceTable.propTypes = {
  rowData: PropTypes.arrayOf().isRequired
};

export default ResourceTable;
