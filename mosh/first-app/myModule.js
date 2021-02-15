// All the content of this file is wrapped inside a wrapper function: 
//      function (exports, require, module, __filename, __dirname) { your code... }

console.log(__filename, __dirname);

const someFruits = ['apple', 'peach', 'raspberry'];
const thisVariableCanNotBeUsedOutsideOfThisModule = 'becauseItIsNotExported.';

function eatFruit(fruit) {
    console.log(`Eating a ${fruit}... YumYum :)`);
}

// Setting the function eatFruit to the module object
module.exports.eatFruit = eatFruit;
module.exports.fruits = someFruits;