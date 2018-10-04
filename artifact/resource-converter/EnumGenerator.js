/* eslint no-console: ["error", { allow: ["log"] }] */

const fs = require("fs");
const R = require("ramda");

const EnumGenerator = {};

function toCamelCase(str) {
  return str
    .split(" ")
    .map((word, index) => {
      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }

      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

EnumGenerator.createEnumName = name => {
  const answer = R.pipe(
    R.replace(/[().!#'"’]/g, ""),
    R.replace(/[- /]/g, "_"),
    R.toUpper
  )(name);

  return answer;
};

EnumGenerator.createEnumValue = name => {
  const answer = R.pipe(
    R.replace(/[().!#'"’]/g, ""),
    R.replace(/[-/]/g, " ")
  )(name);

  return toCamelCase(answer);
};

EnumGenerator.pushUnique = (array, element) => {
  let answer = array;

  if (!array.includes(element)) {
    answer = array.slice();
    answer.push(element);
  }

  return answer;
};

EnumGenerator.writeFile = (outputFile, content) => {
  fs.writeFile(outputFile, content, err => {
    // throws an error, you could also catch it here
    if (err) {
      throw err;
    }

    // success case, the file was saved
    console.log(`${outputFile} saved`);
  });
};

module.exports = EnumGenerator;
