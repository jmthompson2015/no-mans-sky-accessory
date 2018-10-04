/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ResourceGroup from "./ResourceGroup.js";

QUnit.module("ResourceGroup");

QUnit.test("ResourceGroup properties Agricultural", assert => {
  const groupKey = ResourceGroup.AGRICULTURAL;
  const properties = ResourceGroup.properties[groupKey];
  assert.equal(properties.name, "Agricultural");
  assert.equal(properties.key, "agricultural");
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = Object.keys(ResourceGroup.properties);
  const ownPropertyNames = Object.getOwnPropertyNames(ResourceGroup);

  // Verify.
  R.forEach(key => {
    const key2 = ResourceGroup[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(ResourceGroup.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach(value => {
    const p = ownPropertyNames.filter(key => ResourceGroup[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", assert => {
  // Run.
  const result = Object.keys(ResourceGroup.properties);

  // Verify.
  assert.ok(result);
  const length = 14;
  assert.equal(result.length, length);
  assert.equal(result[0], ResourceGroup.AGRICULTURAL);
  assert.equal(result[length - 1], ResourceGroup.SUBTERRANEAN);

  const properties = Object.getOwnPropertyNames(ResourceGroup);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const ResourceGroupTest = {};
export default ResourceGroupTest;
