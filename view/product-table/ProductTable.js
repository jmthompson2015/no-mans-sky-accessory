import DataTable from "../DataTable.js";

import TableColumns from "./TableColumns.js";

const valueFunctions = {};

class ProductTable extends React.Component {
  render() {
    const { rowData: myRowData } = this.props;
    const cellFunctions = {
      icon: data => ReactDOMFactories.img({ src: data.icon })
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

ProductTable.propTypes = {
  rowData: PropTypes.arrayOf().isRequired
};

export default ProductTable;
