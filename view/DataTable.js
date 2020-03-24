// Factories.
const Table = React.createFactory(Reactable.Table);
const Tr = React.createFactory(Reactable.Tr);
const Td = React.createFactory(Reactable.Td);
const Tfoot = React.createFactory(Reactable.Tfoot);

class DataTable extends React.Component {
  createFooterRow(rowData) {
    const { columns } = this.props;
    const myData = {};
    columns.forEach(column => {
      if (column.isinfooter === "true") {
        myData[column.key] = 0;
        rowData.forEach(data => {
          myData[column.key] += Number.isInteger(data[column.key]) ? data[column.key] : 0;
        });
      }
    });

    return Tfoot(
      {
        key: "footer",
        className: "ba"
      },
      this.createRow0(myData, rowData.length)
    );
  }

  createRow0(data, key) {
    const { columns } = this.props;
    const cells = [];
    columns.forEach(column => {
      const value = this.determineValue(column, data);
      const cell = this.determineCell(column, data, value);
      cells.push(
        ReactDOMFactories.td(
          {
            key: cells.length,
            className: column.className,
            value
          },
          cell === undefined ? "" : cell
        )
      );
    }, this);

    return ReactDOMFactories.tr(
      {
        key,
        className: "ba bg-silver"
      },
      cells
    );
  }

  createRow(data, key) {
    const { columns } = this.props;
    const cells = [];
    columns.forEach(column => {
      const value = this.determineValue(column, data);
      const cell = this.determineCell(column, data, value);
      cells.push(
        Td(
          {
            key: cells.length,
            column: column.key,
            value
          },
          cell === undefined ? "" : cell
        )
      );
    }, this);

    return Tr(
      {
        key,
        className: "striped--light-gray"
      },
      cells
    );
  }

  createTable(rowData) {
    const { columns, showFooter } = this.props;
    const rows = [];

    rowData.forEach((data, i) => {
      rows.push(this.createRow(data, i));
    });

    if (showFooter && rowData.length > 0) {
      rows.push(this.createFooterRow(rowData));
    }

    return Table(
      {
        className: "dataTable bg-white collapse f6",
        columns,
        sortable: true
      },
      rows
    );
  }

  determineCell(column, data, value) {
    let answer;
    const { cellFunctions } = this.props;

    if (cellFunctions && cellFunctions[column.key]) {
      answer = cellFunctions[column.key](data);
    } else {
      answer = value;
    }

    return answer;
  }

  determineValue(column, data) {
    let answer;
    const { valueFunctions } = this.props;

    if (valueFunctions && valueFunctions[column.key]) {
      answer = valueFunctions[column.key](data);
    } else {
      answer = data[column.key];
    }

    return answer;
  }

  render() {
    const { className, rowData } = this.props;
    const table = this.createTable(rowData);

    const rows = [];

    const rowCount = `Row Count: ${rowData.length}`;
    rows.push(
      ReactDOMFactories.tr(
        {
          key: rows.length
        },
        ReactDOMFactories.td(
          {
            className: "f6 tl white"
          },
          rowCount
        )
      )
    );
    rows.push(
      ReactDOMFactories.tr(
        {
          key: rows.length
        },
        ReactDOMFactories.td({}, table)
      )
    );
    rows.push(
      ReactDOMFactories.tr(
        {
          key: rows.length
        },
        ReactDOMFactories.td(
          {
            className: "f6 tl white"
          },
          rowCount
        )
      )
    );

    return ReactDOMFactories.table(
      {
        className
      },
      ReactDOMFactories.tbody({}, rows)
    );
  }
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf().isRequired,
  rowData: PropTypes.arrayOf().isRequired,

  cellFunctions: PropTypes.shape(),
  className: PropTypes.string,
  showFooter: PropTypes.bool,
  valueFunctions: PropTypes.shape()
};

DataTable.defaultProps = {
  cellFunctions: {},
  className: undefined,
  showFooter: false,
  valueFunctions: {}
};

export default DataTable;
