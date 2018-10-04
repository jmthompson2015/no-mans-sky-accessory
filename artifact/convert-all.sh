#! /bin/bash

cd resource-converter

node ResourceGroupGenerator
node ResourceRarityGenerator
node ResourceConverter

cd ../product-converter

node ProductGroupGenerator
node ProductConverter

cd ../recipe-converter

node ResourceListGenerator
node ProductListGenerator
node RefinerRecipeConverter
