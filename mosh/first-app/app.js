const awesomeModule = require('./myModule'); // or ./myModule.js
const myCustomLogger = require('./myLogFunction');

function sayHi(name) {
    console.log('hello ' + name);
}

sayHi('sarah');

console.log('Now look the global object:');
console.log(global);

console.log('The global object does not contains variables nor functions defined in this file:');
console.log(global.sayHi);

console.log('Now look the module object:');
console.log(module);

console.log('and now an imported module:');
console.log(awesomeModule);

console.log('and now eat something:');
awesomeModule.eatFruit(awesomeModule.fruits[1]);

myCustomLogger('It was delicious!');