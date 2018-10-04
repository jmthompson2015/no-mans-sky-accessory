import Device from "./Device.js";
import Ingredient from "./Ingredient.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

const productIngredient = (productKey, amount) => Ingredient.create({ productKey, amount });
const resourceIngredient = (resourceKey, amount) => Ingredient.create({ resourceKey, amount });

const CrafterRecipe = [
  {
    name: "Acid",
    output: productIngredient(Product.ACID),
    inputs: [
      resourceIngredient(Resource.MORDITE, 25),
      resourceIngredient(Resource.FUNGAL_MOULD, 600)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Advanced Ion Battery",
    output: productIngredient(Product.ADVANCED_ION_BATTERY),
    inputs: [
      resourceIngredient(Resource.IONISED_COBALT, 25),
      resourceIngredient(Resource.PURE_FERRITE, 20)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Antimatter",
    output: productIngredient(Product.ANTIMATTER),
    inputs: [
      resourceIngredient(Resource.CHROMATIC_METAL, 25),
      resourceIngredient(Resource.CONDENSED_CARBON, 20)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Antimatter Housing",
    output: productIngredient(Product.ANTIMATTER_HOUSING),
    inputs: [
      resourceIngredient(Resource.OXYGEN, 30),
      resourceIngredient(Resource.FERRITE_DUST, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Carbon Nanotubes",
    output: productIngredient(Product.CARBON_NANOTUBES),
    inputs: [resourceIngredient(Resource.CARBON, 50)],
    device: Device.CRAFTER
  },
  {
    name: "Circuit Board",
    output: productIngredient(Product.CIRCUIT_BOARD),
    inputs: [productIngredient(Product.HEAT_CAPACITOR), productIngredient(Product.POLY_FIBRE)],
    device: Device.CRAFTER
  },
  {
    name: "Di-hydrogen Jelly",
    output: productIngredient(Product.DI_HYDROGEN_JELLY),
    inputs: [resourceIngredient(Resource.DI_HYDROGEN, 40)],
    device: Device.CRAFTER
  },
  {
    name: "Glass",
    output: productIngredient(Product.GLASS),
    inputs: [resourceIngredient(Resource.FROST_CRYSTAL, 50)],
    device: Device.CRAFTER
  },
  {
    name: "Heat Capacitor",
    output: productIngredient(Product.HEAT_CAPACITOR),
    inputs: [
      resourceIngredient(Resource.FROST_CRYSTAL, 100),
      resourceIngredient(Resource.SOLANIUM, 200)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Ion Battery",
    output: productIngredient(Product.ION_BATTERY),
    inputs: [
      resourceIngredient(Resource.COBALT, 25),
      resourceIngredient(Resource.FERRITE_DUST, 20)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Large Refiner",
    output: productIngredient(Product.LARGE_REFINER),
    inputs: [
      resourceIngredient(Resource.CHROMATIC_METAL, 200),
      resourceIngredient(Resource.SODIUM_NITRATE, 100),
      productIngredient(Product.MICROPROCESSOR, 5)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Life Support Gel",
    output: productIngredient(Product.LIFE_SUPPORT_GEL),
    inputs: [productIngredient(Product.DI_HYDROGEN_JELLY), resourceIngredient(Resource.CARBON, 20)],
    device: Device.CRAFTER
  },
  {
    name: "Liquid Explosive",
    output: productIngredient(Product.LIQUID_EXPLOSIVE),
    inputs: [productIngredient(Product.ACID), productIngredient(Product.UNSTABLE_GEL)],
    device: Device.CRAFTER
  },
  {
    name: "Living Glass",
    output: productIngredient(Product.LIVING_GLASS),
    inputs: [productIngredient(Product.LUBRICANT, 1), productIngredient(Product.GLASS, 5)],
    device: Device.CRAFTER
  },
  {
    name: "Lubricant",
    output: productIngredient(Product.LUBRICANT),
    inputs: [
      resourceIngredient(Resource.COPRITE, 50),
      resourceIngredient(Resource.GAMMA_ROOT, 400)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Medium Refiner",
    output: productIngredient(Product.MEDIUM_REFINER),
    inputs: [
      resourceIngredient(Resource.MAGNETISED_FERRITE, 100),
      productIngredient(Product.DI_HYDROGEN_JELLY, 5)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Metal Plating",
    output: productIngredient(Product.METAL_PLATING),
    inputs: [resourceIngredient(Resource.FERRITE_DUST, 50)],
    device: Device.CRAFTER
  },
  {
    name: "Microprocessor",
    output: productIngredient(Product.MICROPROCESSOR),
    inputs: [
      resourceIngredient(Resource.CHROMATIC_METAL, 40),
      productIngredient(Product.CARBON_NANOTUBES)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Poly Fibre",
    output: productIngredient(Product.POLY_FIBRE),
    inputs: [
      resourceIngredient(Resource.CACTUS_FLESH, 100),
      resourceIngredient(Resource.STAR_BULB, 200)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Portable Refiner",
    output: productIngredient(Product.PORTABLE_REFINER),
    inputs: [productIngredient(Product.METAL_PLATING), resourceIngredient(Resource.OXYGEN, 30)],
    device: Device.CRAFTER
  },
  {
    name: "Starship Launch Fuel",
    output: productIngredient(Product.STARSHIP_LAUNCH_FUEL),
    inputs: [
      resourceIngredient(Resource.DI_HYDROGEN, 40),
      productIngredient(Product.METAL_PLATING, 1)
    ],
    device: Device.CRAFTER
  },
  {
    name: "TetraCobalt",
    output: productIngredient(Product.TETRACOBALT),
    inputs: [resourceIngredient(Resource.IONISED_COBALT, 150)],
    device: Device.CRAFTER
  },
  {
    name: "Unstable Gel",
    output: productIngredient(Product.UNSTABLE_GEL),
    inputs: [resourceIngredient(Resource.CACTUS_FLESH, 200)],
    device: Device.CRAFTER
  },
  {
    name: "Warp Cell",
    output: productIngredient(Product.WARP_CELL),
    inputs: [productIngredient(Product.ANTIMATTER_HOUSING), productIngredient(Product.ANTIMATTER)],
    device: Device.CRAFTER
  }
];

export default CrafterRecipe;
