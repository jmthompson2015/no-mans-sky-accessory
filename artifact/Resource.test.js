/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Resource from "./Resource.js";

QUnit.module("Resource");

QUnit.test("Resource properties Ammonia", assert => {
  const bearing = Resource.AMMONIA;
  const properties = Resource.properties[bearing];
  assert.equal(properties.name, "Ammonia");
  assert.equal(properties.baseValue, 62);
});

QUnit.skip("Resource baseValue", assert => {
  let errors = "";
  const forEachFunction = resource => {
    if (resource.baseValue === undefined) {
      errors += `Missing baseValue for resource ${resource.name}
`;
    }
    assert.ok(resource.baseValue, `Missing baseValue for resource ${resource.name}`);
  };
  R.forEach(forEachFunction, Object.values(Resource.properties));
  console.log(errors);
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = Object.keys(Resource.properties);
  const ownPropertyNames = Object.getOwnPropertyNames(Resource);

  // Verify.
  R.forEach(key => {
    const key2 = Resource[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Resource.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach(value => {
    const p = ownPropertyNames.filter(key => Resource[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", assert => {
  // Run.
  const result = Object.keys(Resource.properties);

  // Verify.
  assert.ok(result);
  const length = 70;
  assert.equal(result.length, length);
  assert.equal(result[0], Resource.ACTIVATED_CADMIUM);
  assert.equal(result[length - 1], Resource.VISCOUS_FLUIDS);

  const properties = Object.getOwnPropertyNames(Resource);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const ResourceTest = {};
export default ResourceTest;
