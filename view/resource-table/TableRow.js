import ResourceGroup from "../../artifact/ResourceGroup.js";
import ResourceRarity from "../../artifact/ResourceRarity.js";

const TableRow = {};

TableRow.createTableRow = resource => {
  const { baseValue, groupKey, image, name, rarityKey } = resource;
  const group = ResourceGroup.properties[groupKey].name;
  const rarity = ResourceRarity.properties[rarityKey].name;

  return {
    icon: image,
    element: name,
    group,
    rarity,
    baseValue
  };
};

export default TableRow;
