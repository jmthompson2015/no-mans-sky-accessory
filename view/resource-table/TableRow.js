const TableRow = {};

TableRow.createTableRow = resource => {
  const { baseValue, image, name } = resource;

  return {
    icon: image,
    element: name,
    baseValue
  };
};

export default TableRow;
