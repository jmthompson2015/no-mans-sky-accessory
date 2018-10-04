/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Product from "./Product.js";

QUnit.module("Product");

QUnit.test("Product properties Carbon Nanotubes", assert => {
  const productKey = Product.CARBON_NANOTUBES;
  const properties = Product.properties[productKey];
  assert.equal(properties.name, "Carbon Nanotubes");
  assert.equal(properties.key, "carbonNanotubes");
});

const VALUE_EXCEPTIONS = [
  "AtlasPass v1",
  "AtlasPass v2",
  "AtlasPass v3",

  "Albumen Pearl Orb",
  "Echinocactus",
  "Frostwort",
  "Fungal Cluster",
  "Gamma Weed",
  "Gravitino Host",
  "Hydroponic Tray",
  "Large Hydroponic Tray",
  "Mordite Root",
  "Solar Vine",
  "Standing Planter",
  "Venom Urchin",

  "Large Refiner",
  "Medium Refiner",
  "Portable Refiner"
];

QUnit.skip("Product baseValue", assert => {
  let errors = "";
  const forEachFunction = product => {
    if (product.baseValue === undefined && !VALUE_EXCEPTIONS.includes(product.name)) {
      errors += `Missing baseValue for product ${product.name}
`;
      assert.ok(product.baseValue, `Missing baseValue for product ${product.name}`);
    }
  };
  R.forEach(forEachFunction, Object.values(Product.properties));
  console.log(errors);
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = Object.keys(Product.properties);
  const ownPropertyNames = Object.getOwnPropertyNames(Product);

  // Verify.
  R.forEach(key => {
    const key2 = Product[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Product.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach(value => {
    const p = ownPropertyNames.filter(key => Product[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", assert => {
  // Run.
  const result = Object.keys(Product.properties);

  // Verify.
  assert.ok(result);
  const length = 111;
  assert.equal(result.length, length);
  assert.equal(result[0], Product.ACID);
  assert.equal(result[length - 1], Product.WARP_CELL);

  const properties = Object.getOwnPropertyNames(Product);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const ProductTest = {};
export default ProductTest;
