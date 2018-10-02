/* eslint no-console: ["error", { allow: ["log", "warn"] }] */

import Device from "./Device.js";

QUnit.module("Device");

QUnit.test("Device properties Crafter", assert => {
  const deviceKey = Device.CRAFTER;
  const properties = Device.properties[deviceKey];
  assert.equal(properties.name, "Crafter");
  assert.equal(properties.key, "crafter");
});

QUnit.test("keys and values", assert => {
  // Setup.

  // Run.
  const result = Object.keys(Device.properties);
  const ownPropertyNames = Object.getOwnPropertyNames(Device);

  // Verify.
  R.forEach(key => {
    const key2 = Device[key];

    if (key !== "properties" && typeof key2 === "string") {
      assert.ok(Device.properties[key2], `Missing value for key = ${key}`);
    }
  }, ownPropertyNames);

  R.forEach(value => {
    const p = ownPropertyNames.filter(key => Device[key] === value);

    assert.equal(p.length, 1, `Missing key for value = ${value}`);
  }, result);
});

QUnit.test("keys()", assert => {
  // Run.
  const result = Object.keys(Device.properties);

  // Verify.
  assert.ok(result);
  const length = 2;
  assert.equal(result.length, length);
  assert.equal(result[0], Device.CRAFTER);
  assert.equal(result[length - 1], Device.REFINER);

  const properties = Object.getOwnPropertyNames(Device);
  const count = properties.length - 1; // properties
  assert.equal(result.length, count);
});

const DeviceTest = {};
export default DeviceTest;
