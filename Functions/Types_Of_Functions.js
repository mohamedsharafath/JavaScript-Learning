// Function Declarations
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5

// Function Expressions
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(2, 3)); // 6

// Arrow Functions
const subtract = (a, b) => a - b;

console.log(subtract(5, 2)); // 3

// Anonymous Functions
setTimeout(function() {
    console.log('This is an anonymous function.');
}, 1000);

// Named Functions
const divide = function divide(a, b) {
    return a / b;
};

console.log(divide(6, 2)); // 3

// Immediately Invoked Function Expressions (IIFEs)
(function() {
    console.log('This is an IIFE.');
})();

// Higher-Order Functions
function map(array, fn) {
    const result = [];
    for (const item of array) {
        result.push(fn(item));
    }
    return result;
}

const double = n => n * 2;
console.log(map([1, 2, 3], double)); // [2, 4, 6]

// Generator Functions
function* count() {
    yield 1;
    yield 2;
    yield 3;
}

const counter = count();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

// Async Functions
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

fetchData().then(data => console.log(data));
