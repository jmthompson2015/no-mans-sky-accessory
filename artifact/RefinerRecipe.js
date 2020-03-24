import Device from "./Device.js";
import Ingredient from "./Ingredient.js";
import Product from "./Product.js";
import Resource from "./Resource.js";

const productIngredient = (productKey, amount) => Ingredient.create({ productKey, amount });
const resourceIngredient = (resourceKey, amount) => Ingredient.create({ resourceKey, amount });

const RefinerRecipe = [
  // Ammonia
  {
    name: "Enviromental Element Transfer",
    output: resourceIngredient(Resource.AMMONIA, 1),
    inputs: [
      resourceIngredient(Resource.PARAFFINIUM, 2),
      resourceIngredient(Resource.FERRITE_DUST, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Enviromental Element Transfer",
    output: resourceIngredient(Resource.AMMONIA, 1),
    inputs: [
      resourceIngredient(Resource.PARAFFINIUM, 2),
      resourceIngredient(Resource.PURE_FERRITE, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Floral Titration",
    output: resourceIngredient(Resource.AMMONIA, 1),
    inputs: [resourceIngredient(Resource.FUNGAL_MOULD, 2), resourceIngredient(Resource.SALT, 1)],
    device: Device.REFINER
  },
  {
    name: "Organic Fusion",
    output: resourceIngredient(Resource.AMMONIA, 1),
    inputs: [resourceIngredient(Resource.NITROGEN, 1), resourceIngredient(Resource.DI_HYDROGEN, 1)],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Chlorine
  {
    name: "Bonded Chlorine Extraction",
    output: resourceIngredient(Resource.CHLORINE, 2),
    inputs: [resourceIngredient(Resource.KELP_SAC, 1), resourceIngredient(Resource.OXYGEN, 1)],
    device: Device.REFINER
  },
  {
    name: "Chloride De-latticing",
    output: resourceIngredient(Resource.CHLORINE, 150),
    inputs: [productIngredient(Product.CHLORIDE_LATTICE, 1)],
    device: Device.REFINER
  },
  {
    name: "Concentrate Salt",
    output: resourceIngredient(Resource.CHLORINE, 1),
    inputs: [resourceIngredient(Resource.SALT, 2)],
    device: Device.REFINER
  },
  {
    name: "Dissolve Natural Salts",
    output: resourceIngredient(Resource.CHLORINE, 2),
    inputs: [resourceIngredient(Resource.KELP_SAC, 1), resourceIngredient(Resource.SALT, 1)],
    device: Device.REFINER
  },
  {
    name: "Dissolve Natural Salts",
    output: resourceIngredient(Resource.CHLORINE, 2),
    inputs: [resourceIngredient(Resource.KELP_SAC, 1), resourceIngredient(Resource.CHLORINE, 1)],
    device: Device.REFINER
  },
  {
    name: "Efficient Salt Evaporation",
    output: resourceIngredient(Resource.CHLORINE, 5),
    inputs: [resourceIngredient(Resource.SALT, 2), resourceIngredient(Resource.OXYGEN, 2)],
    device: Device.REFINER
  },
  {
    name: "Pugneum Washing",
    output: resourceIngredient(Resource.CHLORINE, 2),
    inputs: [resourceIngredient(Resource.KELP_SAC, 1), resourceIngredient(Resource.PUGNEUM, 1)],
    device: Device.REFINER
  },
  {
    name: "Salt Production",
    output: resourceIngredient(Resource.CHLORINE, 6),
    inputs: [resourceIngredient(Resource.CHLORINE, 1), resourceIngredient(Resource.OXYGEN, 2)],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Chromatic Metal
  {
    name: "Chromatic Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 2),
    inputs: [resourceIngredient(Resource.CADMIUM, 1), resourceIngredient(Resource.PURE_FERRITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Chromatic Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 3),
    inputs: [resourceIngredient(Resource.EMERIL, 1), resourceIngredient(Resource.PURE_FERRITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Chromatic Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 1),
    inputs: [resourceIngredient(Resource.COPPER, 1), resourceIngredient(Resource.PURE_FERRITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Chromatic Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 4),
    inputs: [resourceIngredient(Resource.INDIUM, 1), resourceIngredient(Resource.PURE_FERRITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Chromatic Stellar Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 5),
    inputs: [
      resourceIngredient(Resource.SILVER, 1),
      resourceIngredient(Resource.GOLD, 1),
      resourceIngredient(Resource.COPPER, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Chromatic Stellar Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 10),
    inputs: [
      resourceIngredient(Resource.SILVER, 1),
      resourceIngredient(Resource.GOLD, 1),
      resourceIngredient(Resource.CADMIUM, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Chromatic Stellar Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 20),
    inputs: [
      resourceIngredient(Resource.SILVER, 1),
      resourceIngredient(Resource.GOLD, 1),
      resourceIngredient(Resource.EMERIL, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Chromatic Stellar Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 30),
    inputs: [
      resourceIngredient(Resource.SILVER, 1),
      resourceIngredient(Resource.GOLD, 1),
      resourceIngredient(Resource.INDIUM, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 1),
    inputs: [resourceIngredient(Resource.CADMIUM, 1)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 4),
    inputs: [resourceIngredient(Resource.INDIUM, 2)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 3),
    inputs: [resourceIngredient(Resource.EMERIL, 2)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 1),
    inputs: [resourceIngredient(Resource.COPPER, 2)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 2),
    inputs: [resourceIngredient(Resource.ACTIVATED_CADMIUM, 1)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 4),
    inputs: [resourceIngredient(Resource.ACTIVATED_INDIUM, 1)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 3),
    inputs: [resourceIngredient(Resource.ACTIVATED_EMERIL, 1)],
    device: Device.REFINER
  },
  {
    name: "Extract Chromatic Material",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 1),
    inputs: [resourceIngredient(Resource.ACTIVATED_COPPER, 1)],
    device: Device.REFINER
  },
  {
    name: "Stellar / Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 4),
    inputs: [
      resourceIngredient(Resource.ACTIVATED_CADMIUM, 1),
      resourceIngredient(Resource.PURE_FERRITE, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Stellar / Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 8),
    inputs: [
      resourceIngredient(Resource.ACTIVATED_INDIUM, 1),
      resourceIngredient(Resource.PURE_FERRITE, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Stellar / Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 6),
    inputs: [
      resourceIngredient(Resource.ACTIVATED_EMERIL, 1),
      resourceIngredient(Resource.PURE_FERRITE, 1)
    ],
    device: Device.REFINER
  },
  {
    name: "Stellar / Metal Fusion",
    output: resourceIngredient(Resource.CHROMATIC_METAL, 2),
    inputs: [
      resourceIngredient(Resource.ACTIVATED_COPPER, 1),
      resourceIngredient(Resource.PURE_FERRITE, 1)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Dirty Bronze
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.TRITIUM, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.TRITIUM, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.SILVER, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.SILVER, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.GOLD, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.GOLD, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.PLATINUM, 5)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.DIRTY_BRONZE, 1),
    inputs: [
      resourceIngredient(Resource.PYRITE, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.PLATINUM, 5)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Enriched Carbon
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.ENRICHED_CARBON, 1),
    inputs: [
      resourceIngredient(Resource.RADON, 100),
      resourceIngredient(Resource.CARBON, 20),
      resourceIngredient(Resource.SALT, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.ENRICHED_CARBON, 1),
    inputs: [
      resourceIngredient(Resource.RADON, 100),
      resourceIngredient(Resource.CONDENSED_CARBON, 10),
      resourceIngredient(Resource.SALT, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.ENRICHED_CARBON, 1),
    inputs: [
      resourceIngredient(Resource.RADON, 100),
      resourceIngredient(Resource.CARBON, 20),
      resourceIngredient(Resource.CHLORINE, 5)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.ENRICHED_CARBON, 1),
    inputs: [
      resourceIngredient(Resource.RADON, 100),
      resourceIngredient(Resource.CONDENSED_CARBON, 10),
      resourceIngredient(Resource.CHLORINE, 5)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Herox
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.COBALT, 60),
      resourceIngredient(Resource.TRITIUM, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.IONISED_COBALT, 30),
      resourceIngredient(Resource.TRITIUM, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.COBALT, 60),
      resourceIngredient(Resource.SILVER, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.IONISED_COBALT, 30),
      resourceIngredient(Resource.SILVER, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.COBALT, 60),
      resourceIngredient(Resource.GOLD, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.IONISED_COBALT, 30),
      resourceIngredient(Resource.GOLD, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.COBALT, 60),
      resourceIngredient(Resource.PLATINUM, 5)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.HEROX, 1),
    inputs: [
      resourceIngredient(Resource.AMMONIA, 30),
      resourceIngredient(Resource.IONISED_COBALT, 30),
      resourceIngredient(Resource.PLATINUM, 5)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Glass
  {
    name: "Glass",
    output: productIngredient(Product.GLASS, 1),
    inputs: [resourceIngredient(Resource.FROST_CRYSTAL, 40)],
    device: Device.REFINER
  },
  {
    name: "Glass",
    output: productIngredient(Product.GLASS, 1),
    inputs: [resourceIngredient(Resource.SILICATE_POWDER, 40)],
    device: Device.REFINER
  },
  {
    name: "Salt Crystal Polishing",
    output: productIngredient(Product.GLASS, 1),
    inputs: [
      resourceIngredient(Resource.CYTO_PHOSPHATE, 50),
      resourceIngredient(Resource.SALT, 50)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Lemmium
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.TRITIUM, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.TRITIUM, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.SILVER, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.SILVER, 20)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.GOLD, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.GOLD, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.FERRITE_DUST, 120),
      resourceIngredient(Resource.PLATINUM, 5)
    ],
    device: Device.REFINER
  },
  {
    name: "Alloy Latticing",
    output: productIngredient(Product.LEMMIUM, 1),
    inputs: [
      resourceIngredient(Resource.URANIUM, 30),
      resourceIngredient(Resource.PURE_FERRITE, 60),
      resourceIngredient(Resource.PLATINUM, 5)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Nanite Clusters
  {
    name: "Alchemical Construction",
    output: productIngredient(Product.NANITE_CLUSTERS, 1),
    inputs: [resourceIngredient(Resource.FAECIUM, 1), resourceIngredient(Resource.HEXITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Doom Cycling",
    output: productIngredient(Product.NANITE_CLUSTERS, 50),
    inputs: [productIngredient(Product.HADAL_CORE, 1)],
    device: Device.REFINER
  },
  {
    name: "Reality Warping",
    output: productIngredient(Product.NANITE_CLUSTERS, 1),
    inputs: [resourceIngredient(Resource.PLATINUM, 35)],
    device: Device.REFINER
  },
  {
    name: "Reality Filtering",
    output: productIngredient(Product.NANITE_CLUSTERS, 1),
    inputs: [resourceIngredient(Resource.PUGNEUM, 25)],
    device: Device.REFINER
  },
  {
    name: "Recyle Waste Materials",
    output: productIngredient(Product.NANITE_CLUSTERS, 1),
    inputs: [resourceIngredient(Resource.RUNAWAY_MOULD, 5)],
    device: Device.REFINER
  },
  {
    name: "Transmutation",
    output: productIngredient(Product.NANITE_CLUSTERS, 1),
    inputs: [
      resourceIngredient(Resource.SILVER, 15),
      resourceIngredient(Resource.GOLD, 15),
      resourceIngredient(Resource.PLATINUM, 25)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Nitrogen Salt
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.NITROGEN_SALT, 1),
    inputs: [
      resourceIngredient(Resource.NITROGEN, 100),
      resourceIngredient(Resource.CARBON, 20),
      resourceIngredient(Resource.SALT, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.NITROGEN_SALT, 1),
    inputs: [
      resourceIngredient(Resource.NITROGEN, 100),
      resourceIngredient(Resource.CONDENSED_CARBON, 10),
      resourceIngredient(Resource.SALT, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.NITROGEN_SALT, 1),
    inputs: [
      resourceIngredient(Resource.NITROGEN, 100),
      resourceIngredient(Resource.CARBON, 20),
      resourceIngredient(Resource.CHLORINE, 5)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.NITROGEN_SALT, 1),
    inputs: [
      resourceIngredient(Resource.NITROGEN, 100),
      resourceIngredient(Resource.CONDENSED_CARBON, 10),
      resourceIngredient(Resource.CHLORINE, 5)
    ],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Platinum
  {
    name: "Chromatic Alchemy",
    output: resourceIngredient(Resource.PLATINUM, 10),
    inputs: [
      resourceIngredient(Resource.FERRITE_DUST, 1),
      resourceIngredient(Resource.OXYGEN, 1),
      resourceIngredient(Resource.CHROMATIC_METAL, 250)
    ],
    device: Device.REFINER
  },
  {
    name: "Extreme Alloy Separation",
    output: resourceIngredient(Resource.PLATINUM, 250),
    inputs: [productIngredient(Product.GEODESITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Extreme Alloy Separation",
    output: resourceIngredient(Resource.PLATINUM, 250),
    inputs: [productIngredient(Product.IRIDESITE, 1)],
    device: Device.REFINER
  },
  {
    name: "Transmutation",
    output: resourceIngredient(Resource.PLATINUM, 1),
    inputs: [resourceIngredient(Resource.SILVER, 1), resourceIngredient(Resource.GOLD, 1)],
    device: Device.REFINER
  },
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // Thermic Condensate
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.THERMIC_CONDENSATE, 1),
    inputs: [
      resourceIngredient(Resource.SULPHURINE, 100),
      resourceIngredient(Resource.CARBON, 20),
      resourceIngredient(Resource.SALT, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.THERMIC_CONDENSATE, 1),
    inputs: [
      resourceIngredient(Resource.SULPHURINE, 100),
      resourceIngredient(Resource.CONDENSED_CARBON, 10),
      resourceIngredient(Resource.SALT, 10)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.THERMIC_CONDENSATE, 1),
    inputs: [
      resourceIngredient(Resource.SULPHURINE, 100),
      resourceIngredient(Resource.CARBON, 20),
      resourceIngredient(Resource.CHLORINE, 5)
    ],
    device: Device.REFINER
  },
  {
    name: "High-Speed Sublimation",
    output: productIngredient(Product.THERMIC_CONDENSATE, 1),
    inputs: [
      resourceIngredient(Resource.SULPHURINE, 100),
      resourceIngredient(Resource.CONDENSED_CARBON, 10),
      resourceIngredient(Resource.CHLORINE, 5)
    ],
    device: Device.REFINER
  }
  // ///////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   name: "Alchemical Construction",
  //   output: resourceIngredient(Resource.GOLD, 1),
  //   inputs: [resourceIngredient(Resource.HEXITE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Metal Restructuring",
  //   output: resourceIngredient(Resource.PYRITE, 1),
  //   inputs: [resourceIngredient(Resource.GOLD, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Assisted Decomposition",
  //   output: resourceIngredient(Resource.COPRITE, 1),
  //   inputs: [resourceIngredient(Resource.MORDITE, 3)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Inefficient Burn",
  //   output: resourceIngredient(Resource.CARBON, 1),
  //   inputs: [resourceIngredient(Resource.OXYGEN, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Condense Di-hydrogen",
  //   output: productIngredient(Product.DI_HYDROGEN_JELLY, 1),
  //   inputs: [resourceIngredient(Resource.DI_HYDROGEN, 30)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbon Melting",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 150),
  //   inputs: [productIngredient(Product.CARBON_CRYSTAL, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Rare Metal Detoxification",
  //   output: resourceIngredient(Resource.PURE_FERRITE, 150),
  //   inputs: [productIngredient(Product.RARE_METAL_ELEMENT, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Cobalt Cracking",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 150),
  //   inputs: [productIngredient(Product.TETRACOBALT, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Sodium Stabilisation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 150),
  //   inputs: [productIngredient(Product.DESTABLISED_SODIUM, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygen Decompression",
  //   output: resourceIngredient(Resource.OXYGEN, 150),
  //   inputs: [productIngredient(Product.SUPEROXIDE_CRYSTAL, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Di-hydrogen Cycling",
  //   output: resourceIngredient(Resource.DI_HYDROGEN, 50),
  //   inputs: [productIngredient(Product.DI_HYDROGEN_JELLY, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ionise Mineral",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 1),
  //   inputs: [resourceIngredient(Resource.COBALT, 2)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Deionise Mineral",
  //   output: resourceIngredient(Resource.COBALT, 2),
  //   inputs: [resourceIngredient(Resource.IONISED_COBALT, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Release Carbon",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.CONDENSED_CARBON, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Condense Carbon",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 1),
  //   inputs: [resourceIngredient(Resource.CARBON, 2)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Process Sodium",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //   inputs: [resourceIngredient(Resource.SODIUM, 2)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Free Sodium",
  //   output: resourceIngredient(Resource.SODIUM, 2),
  //   inputs: [resourceIngredient(Resource.SODIUM_NITRATE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extract Metallic Elements",
  //   output: resourceIngredient(Resource.PURE_FERRITE, 1),
  //   inputs: [resourceIngredient(Resource.FERRITE_DUST, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Magnetise Metal",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 1),
  //   inputs: [resourceIngredient(Resource.PURE_FERRITE, 2)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Demagnetise Metal",
  //   output: resourceIngredient(Resource.PURE_FERRITE, 2),
  //   inputs: [resourceIngredient(Resource.MAGNETISED_FERRITE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ferrite Dust extraction",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.PARAFFINIUM, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ferrite Dust extraction",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.PYRITE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ferrite Dust extraction",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.AMMONIA, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ferrite Dust extraction",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.URANIUM, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ferrite Dust extraction",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.DIOXITE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ferrite Dust extraction",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.PHOSPHORUS, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Salt Production",
  //   output: resourceIngredient(Resource.SALT, 2),
  //   inputs: [resourceIngredient(Resource.CHLORINE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Transfer",
  //   output: resourceIngredient(Resource.RADON, 1),
  //   inputs: [resourceIngredient(Resource.SULPHURINE, 3)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Transfer",
  //   output: resourceIngredient(Resource.NITROGEN, 1),
  //   inputs: [resourceIngredient(Resource.RADON, 3)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Transfer",
  //   output: resourceIngredient(Resource.SULPHURINE, 1),
  //   inputs: [resourceIngredient(Resource.NITROGEN, 3)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Recyle Waste Materials",
  //   output: resourceIngredient(Resource.VISCOUS_FLUIDS, 1),
  //   inputs: [resourceIngredient(Resource.RESIDUAL_GOOP, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Recyle Waste Materials",
  //   output: resourceIngredient(Resource.FERRITE_DUST, 1),
  //   inputs: [resourceIngredient(Resource.RUSTED_METAL, 5)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Recyle Waste Materials",
  //   output: resourceIngredient(Resource.RUNAWAY_MOULD, 1),
  //   inputs: [resourceIngredient(Resource.LIVING_SLIME, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Recyle Waste Materials",
  //   output: resourceIngredient(Resource.LIVING_SLIME, 1),
  //   inputs: [resourceIngredient(Resource.VISCOUS_FLUIDS, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Tritium Cycling",
  //   output: resourceIngredient(Resource.DI_HYDROGEN, 1),
  //   inputs: [resourceIngredient(Resource.TRITIUM, 5)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Burn Plantlife",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.FUNGAL_MOULD, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Burn Plantlife",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.FROST_CRYSTAL, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Burn Plantlife",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.GAMMA_ROOT, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Burn Plantlife",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.CACTUS_FLESH, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Burn Plantlife",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.SOLANIUM, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Burn Plantlife",
  //   output: resourceIngredient(Resource.CARBON, 2),
  //   inputs: [resourceIngredient(Resource.STAR_BULB, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extract Organic Sodium",
  //   output: resourceIngredient(Resource.SODIUM, 1),
  //   inputs: [resourceIngredient(Resource.MARROW_BULB, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extract Micro-bubbles",
  //   output: resourceIngredient(Resource.OXYGEN, 1),
  //   inputs: [resourceIngredient(Resource.KELP_SAC, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Reassembly",
  //   output: resourceIngredient(Resource.MORDITE, 2),
  //   inputs: [resourceIngredient(Resource.COPRITE, 3)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extreme Alloy Separation",
  //   output: resourceIngredient(Resource.SILVER, 250),
  //   inputs: [productIngredient(Product.ARONIUM, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extreme Alloy Separation",
  //   output: resourceIngredient(Resource.SILVER, 250),
  //   inputs: [productIngredient(Product.DIRTY_BRONZE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extreme Alloy Separation",
  //   output: resourceIngredient(Resource.SILVER, 250),
  //   inputs: [productIngredient(Product.HEROX, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extreme Alloy Separation",
  //   output: resourceIngredient(Resource.GOLD, 125),
  //   inputs: [productIngredient(Product.LEMMIUM, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extreme Alloy Separation",
  //   output: resourceIngredient(Resource.GOLD, 125),
  //   inputs: [productIngredient(Product.MAGNO_GOLD, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extreme Alloy Separation",
  //   output: resourceIngredient(Resource.GOLD, 125),
  //   inputs: [productIngredient(Product.GRANTINE, 1)],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alchemical Construction",
  //   output: resourceIngredient(Resource.GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.RESIDUAL_GOOP, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Harness Energy",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 2),
  //   inputs: [
  //     resourceIngredient(Resource.URANIUM, 1),
  //     resourceIngredient(Resource.DI_HYDROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Sulphur Injection",
  //   output: resourceIngredient(Resource.SOLANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.DI_HYDROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Catalyse Radiation",
  //   output: resourceIngredient(Resource.URANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.RADON, 1),
  //     resourceIngredient(Resource.DI_HYDROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Rapid Formation / Evaporation",
  //   output: resourceIngredient(Resource.SALT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Assisted Decomposition",
  //   output: resourceIngredient(Resource.COPRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 1),
  //     resourceIngredient(Resource.CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Reassembly",
  //   output: resourceIngredient(Resource.MORDITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbonise Metal",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbonise Metal",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbonise Metal",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.PURE_FERRITE, 1),
  //     resourceIngredient(Resource.CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbonise Metal",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.PURE_FERRITE, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Di-hydrogen Cycling",
  //   output: resourceIngredient(Resource.DEUTERIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 1),
  //     resourceIngredient(Resource.TRITIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxidise Metal",
  //   output: resourceIngredient(Resource.RUSTED_METAL, 2),
  //   inputs: [
  //     resourceIngredient(Resource.PURE_FERRITE, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxidise Metal",
  //   output: resourceIngredient(Resource.RUSTED_METAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygenate Carbon",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 5),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 2),
  //     resourceIngredient(Resource.OXYGEN, 2)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygenate Carbon",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 6),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1),
  //     resourceIngredient(Resource.OXYGEN, 2)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygenate Sodium",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygenate Sodium",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Catalyse Carbon",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 1),
  //     resourceIngredient(Resource.SODIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Catalyse Carbon",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1),
  //     resourceIngredient(Resource.SODIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Advanced Carbon Processing",
  //   output: resourceIngredient(Resource.DIOXITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 1),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Advanced Carbon Processing",
  //   output: resourceIngredient(Resource.DIOXITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Anomaly / Organic Hybridisation",
  //   output: resourceIngredient(Resource.MORDITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Anomaly / Organic Hybridisation",
  //   output: resourceIngredient(Resource.MORDITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Sentinel Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Sentinel Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Runaway Decomposition",
  //   output: resourceIngredient(Resource.COPRITE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 2),
  //     resourceIngredient(Resource.MORDITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Runaway Decomposition",
  //   output: resourceIngredient(Resource.COPRITE, 4),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1),
  //     resourceIngredient(Resource.MORDITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Fertilizer Synthesis ",
  //   output: resourceIngredient(Resource.MARROW_BULB, 3),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM, 2),
  //     resourceIngredient(Resource.MORDITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Fertilizer Synthesis ",
  //   output: resourceIngredient(Resource.MARROW_BULB, 4),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //     resourceIngredient(Resource.MORDITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Matter Expansion",
  //   output: resourceIngredient(Resource.PURE_FERRITE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 2),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Matter Expansion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.PURE_FERRITE, 2),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Matter Expansion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 4),
  //   inputs: [
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 3),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chromatic Expansion",
  //   output: resourceIngredient(Resource.CADMIUM, 4),
  //   inputs: [
  //     resourceIngredient(Resource.CADMIUM, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chromatic Expansion",
  //   output: resourceIngredient(Resource.INDIUM, 4),
  //   inputs: [
  //     resourceIngredient(Resource.INDIUM, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chromatic Expansion",
  //   output: resourceIngredient(Resource.EMERIL, 4),
  //   inputs: [
  //     resourceIngredient(Resource.EMERIL, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chromatic Expansion",
  //   output: resourceIngredient(Resource.COPPER, 4),
  //   inputs: [
  //     resourceIngredient(Resource.COPPER, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Expansion",
  //   output: resourceIngredient(Resource.STAR_BULB, 2),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 1),
  //     resourceIngredient(Resource.STAR_BULB, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Expansion",
  //   output: resourceIngredient(Resource.CACTUS_FLESH, 2),
  //   inputs: [
  //     resourceIngredient(Resource.PYRITE, 1),
  //     resourceIngredient(Resource.CACTUS_FLESH, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Expansion",
  //   output: resourceIngredient(Resource.FUNGAL_MOULD, 2),
  //   inputs: [
  //     resourceIngredient(Resource.AMMONIA, 1),
  //     resourceIngredient(Resource.FUNGAL_MOULD, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Expansion",
  //   output: resourceIngredient(Resource.GAMMA_ROOT, 2),
  //   inputs: [
  //     resourceIngredient(Resource.URANIUM, 1),
  //     resourceIngredient(Resource.GAMMA_ROOT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Expansion",
  //   output: resourceIngredient(Resource.FROST_CRYSTAL, 2),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 1),
  //     resourceIngredient(Resource.FROST_CRYSTAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic Expansion",
  //   output: resourceIngredient(Resource.SOLANIUM, 2),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 1),
  //     resourceIngredient(Resource.SOLANIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Efficient Cobalt Ionisation",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 5),
  //   inputs: [
  //     resourceIngredient(Resource.COBALT, 2),
  //     resourceIngredient(Resource.OXYGEN, 2)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Efficient Cobalt Ionisation",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 6),
  //   inputs: [
  //     resourceIngredient(Resource.IONISED_COBALT, 1),
  //     resourceIngredient(Resource.OXYGEN, 2)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Organic / Anomaly Synthesis",
  //   output: resourceIngredient(Resource.GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.MORDITE, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Mineral Alchemy",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 2),
  //   inputs: [
  //     resourceIngredient(Resource.SILVER, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Mineral Alchemy",
  //   output: resourceIngredient(Resource.PYRITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.GOLD, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Mineral Alchemy",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 10),
  //   inputs: [
  //     resourceIngredient(Resource.PLATINUM, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Transfer",
  //   output: resourceIngredient(Resource.RADON, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Transfer",
  //   output: resourceIngredient(Resource.NITROGEN, 1),
  //   inputs: [
  //     resourceIngredient(Resource.RADON, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Transfer",
  //   output: resourceIngredient(Resource.SULPHURINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.RADON, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.NITROGEN, 1),
  //   inputs: [
  //     resourceIngredient(Resource.RADON, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.SULPHURINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.SODIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Bonded Cobalt Extraction",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygenate Microbes",
  //   output: resourceIngredient(Resource.COPRITE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Pugneum Washing",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extract Organic Sodium",
  //   output: resourceIngredient(Resource.SODIUM, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Release Captured Oxygen",
  //   output: resourceIngredient(Resource.OXYGEN, 2),
  //   inputs: [
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Feed Microbes",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 2),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.CARBON, 2)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Harness Organic Nitrogren",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.SODIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Harness Organic Nitrogren",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.SODIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Feed Microbes",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.SODIUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Extract Organic Sodium",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Release Captured Oxygen",
  //   output: resourceIngredient(Resource.OXYGEN, 2),
  //   inputs: [
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Feed Microbes",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 3),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Harness Organic Nitrogren",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Harness Organic Nitrogren",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Feed Microbes",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ionise Bulbs",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.COBALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ionise Bulbs",
  //   output: resourceIngredient(Resource.IONISED_COBALT, 2),
  //   inputs: [
  //     resourceIngredient(Resource.MARROW_BULB, 1),
  //     resourceIngredient(Resource.IONISED_COBALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Pugneum Alchemy",
  //   output: resourceIngredient(Resource.GOLD, 2),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.PUGNEUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Feed Microbes",
  //   output: resourceIngredient(Resource.CONDENSED_CARBON, 2),
  //   inputs: [
  //     resourceIngredient(Resource.COPRITE, 1),
  //     resourceIngredient(Resource.MORDITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 4),
  //   inputs: [
  //     resourceIngredient(Resource.INDIUM, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.CADMIUM, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.EMERIL, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.COPPER, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 4),
  //   inputs: [
  //     resourceIngredient(Resource.ACTIVATED_CADMIUM, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 8),
  //   inputs: [
  //     resourceIngredient(Resource.ACTIVATED_INDIUM, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 6),
  //   inputs: [
  //     resourceIngredient(Resource.ACTIVATED_EMERIL, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Stellar / Metal Fusion",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.ACTIVATED_COPPER, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.STAR_BULB, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 2),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.CACTUS_FLESH, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PYRITE, 2),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.FUNGAL_MOULD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.AMMONIA, 2),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.GAMMA_ROOT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.URANIUM, 2),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.FROST_CRYSTAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 2),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.SOLANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 2),
  //     resourceIngredient(Resource.OXYGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PYRITE, 2),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.DIOXITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.AMMONIA, 2),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.PYRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.URANIUM, 2),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.PHOSPHORUS, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 2),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.URANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 2),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PYRITE, 2),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.DIOXITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.AMMONIA, 2),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.PYRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.URANIUM, 2),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.PHOSPHORUS, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 2),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Enviromental Element Transfer",
  //   output: resourceIngredient(Resource.URANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 2),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Floral Titration",
  //   output: resourceIngredient(Resource.DIOXITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.FROST_CRYSTAL, 2),
  //     resourceIngredient(Resource.SALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Floral Titration",
  //   output: resourceIngredient(Resource.URANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.GAMMA_ROOT, 2),
  //     resourceIngredient(Resource.SALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Floral Titration",
  //   output: resourceIngredient(Resource.PYRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CACTUS_FLESH, 2),
  //     resourceIngredient(Resource.SALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Floral Titration",
  //   output: resourceIngredient(Resource.PHOSPHORUS, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SOLANIUM, 2),
  //     resourceIngredient(Resource.SALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Floral Titration",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.STAR_BULB, 2),
  //     resourceIngredient(Resource.SALT, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbon Crystallisation",
  //   output: productIngredient(Product.CARBON_CRYSTAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 50),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Sodium Destabilisation",
  //   output: productIngredient(Product.DESTABLISED_SODIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM, 50),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chlorine Latticing",
  //   output: productIngredient(Product.CHLORIDE_LATTICE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SALT, 50),
  //     resourceIngredient(Resource.CHLORINE, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Cobalt Supercharging",
  //   output: productIngredient(Product.TETRACOBALT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.COBALT, 50),
  //     resourceIngredient(Resource.IONISED_COBALT, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygen Nucleation",
  //   output: productIngredient(Product.SUPEROXIDE_CRYSTAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 100),
  //     resourceIngredient(Resource.TRITIUM, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Rare Metal Detoxification",
  //   output: productIngredient(Product.RARE_METAL_ELEMENT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 25),
  //     resourceIngredient(Resource.OXYGEN, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Loosen Bonds",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Metal Enrichment",
  //   output: resourceIngredient(Resource.URANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.RADON, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.FERRITE_DUST, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Loosen Bonds",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 2),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Metal Enrichment",
  //   output: resourceIngredient(Resource.URANIUM, 2),
  //   inputs: [
  //     resourceIngredient(Resource.RADON, 1),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 2),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.PURE_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Loosen Bonds",
  //   output: resourceIngredient(Resource.PARAFFINIUM, 3),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Metal Enrichment",
  //   output: resourceIngredient(Resource.URANIUM, 3),
  //   inputs: [
  //     resourceIngredient(Resource.RADON, 1),
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Gas Catalysation",
  //   output: resourceIngredient(Resource.SODIUM_NITRATE, 3),
  //   inputs: [
  //     resourceIngredient(Resource.NITROGEN, 1),
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.FUNGAL_MOULD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.AMMONIA, 1),
  //     resourceIngredient(Resource.NITROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.FROST_CRYSTAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 1),
  //     resourceIngredient(Resource.RADON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.GAMMA_ROOT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.URANIUM, 1),
  //     resourceIngredient(Resource.RADON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.CACTUS_FLESH, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PYRITE, 1),
  //     resourceIngredient(Resource.SULPHURINE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.SOLANIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 1),
  //     resourceIngredient(Resource.SULPHURINE, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.STAR_BULB, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 1),
  //     resourceIngredient(Resource.NITROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.MARROW_BULB, 1),
  //   inputs: [
  //     resourceIngredient(Resource.COBALT, 1),
  //     resourceIngredient(Resource.NITROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.KELP_SAC, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SALT, 1),
  //     resourceIngredient(Resource.NITROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Encourage Growth",
  //   output: resourceIngredient(Resource.COPRITE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SULPHURINE, 1),
  //     resourceIngredient(Resource.NITROGEN, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Rare Metal Fusion",
  //   output: productIngredient(Product.RARE_METAL_ELEMENT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 35),
  //     resourceIngredient(Resource.PURE_FERRITE, 35),
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 35)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Deep Metal Compression",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 5),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.PURE_FERRITE, 1),
  //     resourceIngredient(Resource.SILVER, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Deep Metal Compression",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 8),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.PURE_FERRITE, 1),
  //     resourceIngredient(Resource.GOLD, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Deep Metal Compression",
  //   output: resourceIngredient(Resource.MAGNETISED_FERRITE, 12),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.PURE_FERRITE, 1),
  //     resourceIngredient(Resource.PLATINUM, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Carbon Crystallisation",
  //   output: productIngredient(Product.CARBON_CRYSTAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 40),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 40),
  //     resourceIngredient(Resource.TRITIUM, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Rare Metal Fusion",
  //   output: productIngredient(Product.RARE_METAL_ELEMENT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 20),
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 20),
  //     resourceIngredient(Resource.TRITIUM, 25)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Cobalt Supercharging",
  //   output: productIngredient(Product.TETRACOBALT, 1),
  //   inputs: [
  //     resourceIngredient(Resource.COBALT, 40),
  //     resourceIngredient(Resource.IONISED_COBALT, 40),
  //     resourceIngredient(Resource.TRITIUM, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chlorine Latticing",
  //   output: productIngredient(Product.CHLORIDE_LATTICE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SALT, 40),
  //     resourceIngredient(Resource.CHLORINE, 40),
  //     resourceIngredient(Resource.TRITIUM, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Sodium Destabilisation",
  //   output: productIngredient(Product.DESTABLISED_SODIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.SODIUM, 40),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 40),
  //     resourceIngredient(Resource.TRITIUM, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Oxygen Nucleation",
  //   output: productIngredient(Product.SUPEROXIDE_CRYSTAL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 40),
  //     resourceIngredient(Resource.URANIUM, 40),
  //     resourceIngredient(Resource.TRITIUM, 50)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Artificial Photosynthesis",
  //   output: resourceIngredient(Resource.OXYGEN, 10),
  //   inputs: [
  //     resourceIngredient(Resource.FUNGAL_MOULD, 1),
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Artificial Photosynthesis",
  //   output: resourceIngredient(Resource.OXYGEN, 10),
  //   inputs: [
  //     resourceIngredient(Resource.FROST_CRYSTAL, 1),
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Artificial Photosynthesis",
  //   output: resourceIngredient(Resource.OXYGEN, 10),
  //   inputs: [
  //     resourceIngredient(Resource.CACTUS_FLESH, 1),
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Artificial Photosynthesis",
  //   output: resourceIngredient(Resource.OXYGEN, 10),
  //   inputs: [
  //     resourceIngredient(Resource.SOLANIUM, 1),
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Artificial Photosynthesis",
  //   output: resourceIngredient(Resource.OXYGEN, 10),
  //   inputs: [
  //     resourceIngredient(Resource.GAMMA_ROOT, 1),
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Artificial Photosynthesis",
  //   output: resourceIngredient(Resource.OXYGEN, 10),
  //   inputs: [
  //     resourceIngredient(Resource.STAR_BULB, 1),
  //     resourceIngredient(Resource.KELP_SAC, 1),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Chromatic Alchemy",
  //   output: resourceIngredient(Resource.GOLD, 10),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 1),
  //     resourceIngredient(Resource.OXYGEN, 1),
  //     resourceIngredient(Resource.EMERIL, 1)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Antimatter Bypass",
  //   output: productIngredient(Product.WARP_CELL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 25),
  //     resourceIngredient(Resource.SODIUM, 10),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 250)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Antimatter Bypass",
  //   output: productIngredient(Product.WARP_CELL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CARBON, 50),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 5),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 250)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Antimatter Bypass",
  //   output: productIngredient(Product.WARP_CELL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.CONDENSED_CARBON, 25),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 5),
  //     resourceIngredient(Resource.CHROMATIC_METAL, 250)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Plasma Pressurisation",
  //   output: productIngredient(Product.UNSTABLE_PLASMA, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 10),
  //     resourceIngredient(Resource.FERRITE_DUST, 20),
  //     resourceIngredient(Resource.CARBON, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Plasma Pressurisation",
  //   output: productIngredient(Product.UNSTABLE_PLASMA, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 10),
  //     resourceIngredient(Resource.FERRITE_DUST, 20),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Plasma Pressurisation",
  //   output: productIngredient(Product.UNSTABLE_PLASMA, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 10),
  //     resourceIngredient(Resource.PURE_FERRITE, 20),
  //     resourceIngredient(Resource.CARBON, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Plasma Pressurisation",
  //   output: productIngredient(Product.UNSTABLE_PLASMA, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 10),
  //     resourceIngredient(Resource.PURE_FERRITE, 20),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Advanced Oxygen Capture",
  //   output: productIngredient(Product.LIFE_SUPPORT_GEL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.OXYGEN, 10),
  //     resourceIngredient(Resource.CONDENSED_CARBON, 10),
  //     resourceIngredient(Resource.DI_HYDROGEN, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Di-hydrogen Capture",
  //   output: productIngredient(Product.STARSHIP_LAUNCH_FUEL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 10),
  //     resourceIngredient(Resource.FERRITE_DUST, 20),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Di-hydrogen Capture",
  //   output: productIngredient(Product.STARSHIP_LAUNCH_FUEL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 10),
  //     resourceIngredient(Resource.PURE_FERRITE, 20),
  //     resourceIngredient(Resource.SODIUM, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Di-hydrogen Capture",
  //   output: productIngredient(Product.STARSHIP_LAUNCH_FUEL, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DI_HYDROGEN, 10),
  //     resourceIngredient(Resource.MAGNETISED_FERRITE, 10),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Ion Capture",
  //   output: productIngredient(Product.ION_BATTERY, 1),
  //   inputs: [
  //     resourceIngredient(Resource.FERRITE_DUST, 10),
  //     resourceIngredient(Resource.SILVER, 10),
  //     resourceIngredient(Resource.SODIUM, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Advanced Ion Capture",
  //   output: productIngredient(Product.ADVANCED_ION_BATTERY, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PURE_FERRITE, 10),
  //     resourceIngredient(Resource.SILVER, 10),
  //     resourceIngredient(Resource.SODIUM_NITRATE, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.TRITIUM, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.TRITIUM, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.SILVER, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.SILVER, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.GOLD, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.GOLD, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.PLATINUM, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.ARONIUM, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PARAFFINIUM, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.PLATINUM, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.TRITIUM, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.TRITIUM, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.SILVER, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.SILVER, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.GOLD, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.GOLD, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.PLATINUM, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.MAGNO_GOLD, 1),
  //   inputs: [
  //     resourceIngredient(Resource.PHOSPHORUS, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.PLATINUM, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.TRITIUM, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.TRITIUM, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.SILVER, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.SILVER, 20)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.GOLD, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.GOLD, 10)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.COBALT, 60),
  //     resourceIngredient(Resource.PLATINUM, 5)
  //   ],
  //   device: Device.REFINER
  // },
  // {
  //   name: "Alloy Latticing",
  //   output: productIngredient(Product.GRANTINE, 1),
  //   inputs: [
  //     resourceIngredient(Resource.DIOXITE, 30),
  //     resourceIngredient(Resource.IONISED_COBALT, 30),
  //     resourceIngredient(Resource.PLATINUM, 5)
  //   ],
  //   device: Device.REFINER
  // },
];

export default RefinerRecipe;
