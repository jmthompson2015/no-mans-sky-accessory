import Device from "./Device.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

import Resolver from "./Resolver.js";

QUnit.module("Resolver");

QUnit.test("device()", assert => {
  assert.equal(Resolver.device(Device.CRAFTER).name, "Crafter");
  assert.equal(Resolver.device(Device.REFINER).name, "Refiner");
  assert.equal(Resolver.device(undefined), null);
});

QUnit.test("product()", assert => {
  assert.equal(Resolver.product(Product.GLASS).name, "Glass");
  assert.equal(Resolver.product(Resource.CARBON), null);
  assert.equal(Resolver.product(undefined), null);
});

QUnit.test("resource()", assert => {
  assert.equal(Resolver.resource(Product.GLASS), null);
  assert.equal(Resolver.resource(Resource.CARBON).name, "Carbon");
  assert.equal(Resolver.resource(undefined), null);
});

QUnit.test("thing()", assert => {
  assert.equal(Resolver.thing(Product.GLASS).name, "Glass");
  assert.equal(Resolver.thing(Resource.CARBON).name, "Carbon");
  assert.equal(Resolver.thing(undefined), null);
});

const ResolverTest = {};
export default ResolverTest;
