/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Product from "./Product.js";

QUnit.module("Product");

QUnit.test("Product properties Carbon Nanotubes", assert => {
  const productKey = Product.CARBON_NANOTUBES;
  const properties = Product.properties[productKey];
  assert.equal(properties.name, "Carbon Nanotubes");
  assert.equal(properties.key, "carbonNanotubes");
});

QUnit.skip("Product baseValue", assert => {
  let errors = "";
  const forEachFunction = resource => {
    if (resource.baseValue === undefined) {
      errors += `Missing baseValue for resource ${resource.name}
`;
    }
    assert.ok(resource.baseValue, `Missing baseValue for resource ${resource.name}`);
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
  const length = 115;
  assert.equal(result.length, length);
  assert.equal(result[0], Product.ACID);
  assert.equal(result[length - 1], Product.WEAPONS_RESEARCH);

  const properties = Object.getOwnPropertyNames(Product);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const ProductTest = {};
export default ProductTest;
