/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import ResourceRarity from "./ResourceRarity.js";

QUnit.module("ResourceRarity");

QUnit.test("ResourceRarity properties Common", assert => {
  const rarityKey = ResourceRarity.COMMON;
  const properties = ResourceRarity.properties[rarityKey];
  assert.equal(properties.name, "Common");
  assert.equal(properties.key, "common");
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = Object.keys(ResourceRarity.properties);
  const ownPropertyNames = Object.getOwnPropertyNames(ResourceRarity);

  // Verify.
  R.forEach(key => {
    const key2 = ResourceRarity[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(ResourceRarity.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach(value => {
    const p = ownPropertyNames.filter(key => ResourceRarity[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", assert => {
  // Run.
  const result = Object.keys(ResourceRarity.properties);

  // Verify.
  assert.ok(result);
  const length = 3;
  assert.equal(result.length, length);
  assert.equal(result[0], ResourceRarity.COMMON);
  assert.equal(result[length - 1], ResourceRarity.UNCOMMON);

  const properties = Object.getOwnPropertyNames(ResourceRarity);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const ResourceRarityTest = {};
export default ResourceRarityTest;
