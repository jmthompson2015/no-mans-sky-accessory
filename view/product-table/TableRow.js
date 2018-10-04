import ProductGroup from "../../artifact/ProductGroup.js";

const TableRow = {};

TableRow.createTableRow = resource => {
  const { baseValue, groupKey, image, name } = resource;
  const group = groupKey ? ProductGroup.properties[groupKey].name : undefined;

  return {
    icon: image,
    element: name,
    group,
    baseValue
  };
};

export default TableRow;
