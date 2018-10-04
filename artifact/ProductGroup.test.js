/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ProductGroup from "./ProductGroup.js";

QUnit.module("ProductGroup");

QUnit.test("ProductGroup properties Component - Anomalous Material", assert => {
  const groupKey = ProductGroup.COMPONENT_ANOMALOUS_MATERIAL;
  const properties = ProductGroup.properties[groupKey];
  assert.equal(properties.name, "Component - Anomalous Material");
  assert.equal(properties.key, "componentAnomalousMaterial");
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = Object.keys(ProductGroup.properties);
  const ownPropertyNames = Object.getOwnPropertyNames(ProductGroup);

  // Verify.
  R.forEach(key => {
    const key2 = ProductGroup[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(ProductGroup.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach(value => {
    const p = ownPropertyNames.filter(key => ProductGroup[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", assert => {
  // Run.
  const result = Object.keys(ProductGroup.properties);

  // Verify.
  assert.ok(result);
  const length = 33;
  assert.equal(result.length, length);
  assert.equal(result[0], ProductGroup.COMPONENT_ANOMALOUS_MATERIAL);
  assert.equal(result[length - 1], ProductGroup.TRADE_ITEM_MANUFACTURED_GAS_PRODUCT);

  const properties = Object.getOwnPropertyNames(ProductGroup);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const ProductGroupTest = {};
export default ProductGroupTest;
