import Device from "./Device.js";
import Ingredient from "./Ingredient.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

const productIngredient = (productKey, amount) =>
  Ingredient.create({ productKey, amount });
const resourceIngredient = (resourceKey, amount) =>
  Ingredient.create({ resourceKey, amount });

const CrafterRecipe = [
  {
    name: "Acid",
    output: productIngredient(Product.ACID),
    inputs: [
      resourceIngredient(Resource.FUNGAL_MOULD, 600),
      resourceIngredient(Resource.MORDITE, 25)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Advanced Ion Battery",
    output: productIngredient(Product.ADVANCED_ION_BATTERY),
    inputs: [
      resourceIngredient(Resource.IONISED_COBALT, 10),
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
    name: "Aronium",
    output: productIngredient(Product.ARONIUM),
    inputs: [
      resourceIngredient(Resource.IONISED_COBALT, 50),
      resourceIngredient(Resource.PARAFFINIUM, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Carbon Crystal",
    output: productIngredient(Product.CARBON_CRYSTAL),
    inputs: [resourceIngredient(Resource.CONDENSED_CARBON, 150)],
    device: Device.CRAFTER
  },
  {
    name: "Carbon Nanotubes",
    output: productIngredient(Product.CARBON_NANOTUBES),
    inputs: [resourceIngredient(Resource.CARBON, 50)],
    device: Device.CRAFTER
  },
  {
    name: "Chloride Lattice",
    output: productIngredient(Product.CHLORIDE_LATTICE),
    inputs: [resourceIngredient(Resource.CHLORINE, 150)],
    device: Device.CRAFTER
  },
  {
    name: "Circuit Board",
    output: productIngredient(Product.CIRCUIT_BOARD),
    inputs: [
      productIngredient(Product.HEAT_CAPACITOR),
      productIngredient(Product.POLY_FIBRE)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Cobalt Mirror",
    output: productIngredient(Product.COBALT_MIRROR),
    inputs: [resourceIngredient(Resource.IONISED_COBALT, 50)],
    device: Device.CRAFTER
  },
  {
    name: "Cryo-Pump",
    output: productIngredient(Product.CRYO_PUMP),
    inputs: [
      productIngredient(Product.HOT_ICE),
      productIngredient(Product.THERMIC_CONDENSATE)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Cryogenic Chamber",
    output: productIngredient(Product.CRYOGENIC_CHAMBER),
    inputs: [
      productIngredient(Product.CRYO_PUMP),
      productIngredient(Product.LIVING_GLASS)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Destablised Sodium",
    output: productIngredient(Product.DESTABLISED_SODIUM),
    inputs: [resourceIngredient(Resource.SODIUM_NITRATE, 150)],
    device: Device.CRAFTER
  },
  {
    name: "Di-hydrogen Jelly",
    output: productIngredient(Product.DI_HYDROGEN_JELLY),
    inputs: [resourceIngredient(Resource.DI_HYDROGEN, 40)],
    device: Device.CRAFTER
  },
  {
    name: "Dirty Bronze",
    output: productIngredient(Product.DIRTY_BRONZE),
    inputs: [
      resourceIngredient(Resource.PURE_FERRITE, 100),
      resourceIngredient(Resource.PYRITE, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Enriched Carbon",
    output: productIngredient(Product.ENRICHED_CARBON),
    inputs: [
      resourceIngredient(Resource.CONDENSED_CARBON, 50),
      resourceIngredient(Resource.RADON, 250)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Explosive Drones",
    output: productIngredient(Product.EXPLOSIVE_DRONES),
    inputs: [
      resourceIngredient(Resource.GOLD, 50),
      productIngredient(Product.WALKER_BRAIN)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Frigate Fuel (100 Tonnes)",
    output: productIngredient(Product.FRIGATE_FUEL_100_TONNES),
    inputs: [
      resourceIngredient(Resource.DI_HYDROGEN, 100),
      resourceIngredient(Resource.TRITIUM, 100)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Frigate Fuel (200 Tonnes)",
    output: productIngredient(Product.FRIGATE_FUEL_200_TONNES),
    inputs: [
      resourceIngredient(Resource.DI_HYDROGEN, 200),
      resourceIngredient(Resource.TRITIUM, 200)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Frigate Fuel (50 Tonnes)",
    output: productIngredient(Product.FRIGATE_FUEL_50_TONNES),
    inputs: [
      resourceIngredient(Resource.DI_HYDROGEN, 50),
      resourceIngredient(Resource.TRITIUM, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Fuel Oxidiser",
    output: productIngredient(Product.FUEL_OXIDISER),
    inputs: [
      productIngredient(Product.QUAD_SERVO, 2),
      resourceIngredient(Resource.GOLD, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Fusion Accelerant",
    output: productIngredient(Product.FUSION_ACCELERANT),
    inputs: [
      productIngredient(Product.NITROGEN_SALT),
      productIngredient(Product.ORGANIC_CATALYST)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Fusion Ignitor",
    output: productIngredient(Product.FUSION_IGNITOR),
    inputs: [
      productIngredient(Product.GEODESITE),
      productIngredient(Product.PORTABLE_REACTOR),
      productIngredient(Product.QUANTUM_PROCESSOR)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Geodesite",
    output: productIngredient(Product.GEODESITE),
    inputs: [
      productIngredient(Product.DIRTY_BRONZE),
      productIngredient(Product.HEROX),
      productIngredient(Product.LEMMIUM)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Glass",
    output: productIngredient(Product.GLASS),
    inputs: [resourceIngredient(Resource.FROST_CRYSTAL, 40)],
    device: Device.CRAFTER
  },
  {
    name: "Grantine",
    output: productIngredient(Product.GRANTINE),
    inputs: [
      resourceIngredient(Resource.DIOXITE, 50),
      resourceIngredient(Resource.IONISED_COBALT, 50)
    ],
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
    name: "Hermetic Seal",
    output: productIngredient(Product.HERMETIC_SEAL),
    inputs: [resourceIngredient(Resource.CONDENSED_CARBON, 30)],
    device: Device.CRAFTER
  },
  {
    name: "Herox",
    output: productIngredient(Product.HEROX),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 50),
      resourceIngredient(Resource.IONISED_COBALT, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Holographic Analyser",
    output: productIngredient(Product.HOLOGRAPHIC_ANALYSER),
    inputs: [
      resourceIngredient(Resource.GOLD, 50),
      productIngredient(Product.OXYGEN_FILTER)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Hot Ice",
    output: productIngredient(Product.HOT_ICE),
    inputs: [
      productIngredient(Product.ENRICHED_CARBON),
      productIngredient(Product.NITROGEN_SALT)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Ion Battery",
    output: productIngredient(Product.ION_BATTERY),
    inputs: [
      resourceIngredient(Resource.COBALT, 10),
      resourceIngredient(Resource.FERRITE_DUST, 20)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Iridesite",
    output: productIngredient(Product.IRIDESITE),
    inputs: [
      productIngredient(Product.ARONIUM),
      productIngredient(Product.GRANTINE),
      productIngredient(Product.MAGNO_GOLD)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Lemmium",
    output: productIngredient(Product.LEMMIUM),
    inputs: [
      resourceIngredient(Resource.PURE_FERRITE, 100),
      resourceIngredient(Resource.URANIUM, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Life Support Gel",
    output: productIngredient(Product.LIFE_SUPPORT_GEL),
    inputs: [
      productIngredient(Product.DI_HYDROGEN_JELLY),
      resourceIngredient(Resource.CARBON, 20)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Liquid Explosive",
    output: productIngredient(Product.LIQUID_EXPLOSIVE),
    inputs: [
      productIngredient(Product.ACID),
      productIngredient(Product.UNSTABLE_GEL)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Living Glass",
    output: productIngredient(Product.LIVING_GLASS),
    inputs: [
      productIngredient(Product.LUBRICANT),
      productIngredient(Product.GLASS, 5)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Lubricant",
    output: productIngredient(Product.LUBRICANT),
    inputs: [
      resourceIngredient(Resource.FAECIUM, 50),
      resourceIngredient(Resource.GAMMA_ROOT, 400)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Magno-Gold",
    output: productIngredient(Product.MAGNO_GOLD),
    inputs: [
      resourceIngredient(Resource.IONISED_COBALT, 50),
      resourceIngredient(Resource.PHOSPHORUS, 50)
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
    name: "Mind Control Device",
    output: productIngredient(Product.MIND_CONTROL_DEVICE),
    inputs: [
      resourceIngredient(Resource.GOLD, 50),
      productIngredient(Product.SODIUM_DIODE)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Mineral Compressor",
    output: productIngredient(Product.MINERAL_COMPRESSOR),
    inputs: [
      productIngredient(Product.COBALT_MIRROR),
      resourceIngredient(Resource.GOLD, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Nitrogen Salt",
    output: productIngredient(Product.NITROGEN_SALT),
    inputs: [
      resourceIngredient(Resource.CONDENSED_CARBON, 50),
      resourceIngredient(Resource.NITROGEN, 250)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Organic Catalyst",
    output: productIngredient(Product.ORGANIC_CATALYST),
    inputs: [
      productIngredient(Product.ENRICHED_CARBON),
      productIngredient(Product.THERMIC_CONDENSATE)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Oxygen Capsule",
    output: productIngredient(Product.OXYGEN_CAPSULE),
    inputs: [
      resourceIngredient(Resource.FERRITE_DUST, 20),
      resourceIngredient(Resource.OXYGEN, 25)
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
    name: "Portable Reactor",
    output: productIngredient(Product.PORTABLE_REACTOR),
    inputs: [
      productIngredient(Product.FUSION_ACCELERANT),
      productIngredient(Product.LIQUID_EXPLOSIVE)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Projectile Ammunition",
    output: productIngredient(Product.PROJECTILE_AMMUNITION),
    inputs: [resourceIngredient(Resource.FERRITE_DUST, 50)],
    device: Device.CRAFTER
  },
  {
    name: "Quantum Processor",
    output: productIngredient(Product.QUANTUM_PROCESSOR),
    inputs: [
      productIngredient(Product.CIRCUIT_BOARD),
      productIngredient(Product.SUPERCONDUCTOR)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Rare Metal Element",
    output: productIngredient(Product.RARE_METAL_ELEMENT),
    inputs: [resourceIngredient(Resource.PURE_FERRITE, 150)],
    device: Device.CRAFTER
  },
  {
    name: "Salt Refractor",
    output: productIngredient(Product.SALT_REFRACTOR),
    inputs: [resourceIngredient(Resource.SALT, 100)],
    device: Device.CRAFTER
  },
  {
    name: "Semiconductor",
    output: productIngredient(Product.SEMICONDUCTOR),
    inputs: [
      productIngredient(Product.NITROGEN_SALT),
      productIngredient(Product.THERMIC_CONDENSATE)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Sodium Diode",
    output: productIngredient(Product.SODIUM_DIODE),
    inputs: [
      resourceIngredient(Resource.FERRITE_DUST, 40),
      resourceIngredient(Resource.SODIUM_NITRATE, 40)
    ],
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
    name: "Stasis Device",
    output: productIngredient(Product.STASIS_DEVICE),
    inputs: [
      productIngredient(Product.CRYOGENIC_CHAMBER),
      productIngredient(Product.IRIDESITE),
      productIngredient(Product.QUANTUM_PROCESSOR)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Superconductor",
    output: productIngredient(Product.SUPERCONDUCTOR),
    inputs: [
      productIngredient(Product.ENRICHED_CARBON),
      productIngredient(Product.SEMICONDUCTOR)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Superoxide Crystal",
    output: productIngredient(Product.SUPEROXIDE_CRYSTAL),
    inputs: [resourceIngredient(Resource.OXYGEN, 150)],
    device: Device.CRAFTER
  },
  {
    name: "TetraCobalt",
    output: productIngredient(Product.TETRACOBALT),
    inputs: [resourceIngredient(Resource.IONISED_COBALT, 150)],
    device: Device.CRAFTER
  },
  {
    name: "Thermic Condensate",
    output: productIngredient(Product.THERMIC_CONDENSATE),
    inputs: [
      resourceIngredient(Resource.CONDENSED_CARBON, 50),
      resourceIngredient(Resource.SULPHURINE, 250)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Unstable Gel",
    output: productIngredient(Product.UNSTABLE_GEL),
    inputs: [resourceIngredient(Resource.CACTUS_FLESH, 200)],
    device: Device.CRAFTER
  },
  {
    name: "Unstable Plasma",
    output: productIngredient(Product.UNSTABLE_PLASMA),
    inputs: [
      productIngredient(Product.METAL_PLATING),
      resourceIngredient(Resource.OXYGEN, 50)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Warp Cell",
    output: productIngredient(Product.WARP_CELL),
    inputs: [
      productIngredient(Product.ANTIMATTER),
      productIngredient(Product.ANTIMATTER_HOUSING)
    ],
    device: Device.CRAFTER
  },
  {
    name: "Warp Hypercore",
    output: productIngredient(Product.WARP_HYPERCORE),
    inputs: [
      productIngredient(Product.ANTIMATTER),
      productIngredient(Product.STORM_CRYSTAL)
    ],
    device: Device.CRAFTER
  }
];

Object.freeze(CrafterRecipe);

export default CrafterRecipe;
