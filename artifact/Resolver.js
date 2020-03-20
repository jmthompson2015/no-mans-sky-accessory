import Device from "./Device.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

const Resolver = {};

Resolver.device = deviceKey =>
  deviceKey ? Device.properties[deviceKey] : null;

Resolver.product = productKey =>
  productKey ? Product.properties[productKey] : null;

Resolver.resource = resourceKey =>
  resourceKey ? Resource.properties[resourceKey] : null;

Resolver.thing = thingKey =>
  thingKey ? Resolver.product(thingKey) || Resolver.resource(thingKey) : null;

Object.freeze(Resolver);

export default Resolver;
