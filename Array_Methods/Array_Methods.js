// Map Example 1: Converting Fahrenheit to Celsius
const fahrenheitTemperatures = [32, 68, 104, 140];
const celsiusTemperatures = fahrenheitTemperatures.map(f => Math.round((f - 32) * (5/9)));
console.log(celsiusTemperatures); // [0, 20, 40, 60]

// Map Example 2: Formatting Array of Objects
const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];
const formattedUsers = users.map(user => ({ userId: user.id, fullName: `${user.name} (Age: ${user.age})` }));
console.log(formattedUsers);

// Filter Example 1: Filtering Odd Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5, 7, 9]

// Filter Example 2: Filtering Arrays of Objects
const users = [
    { id: 1, name: 'John', isAdmin: true },
    { id: 2, name: 'Alice', isAdmin: false },
    { id: 3, name: 'Bob', isAdmin: true },
    { id: 4, name: 'Eve', isAdmin: false }
];
const admins = users.filter(user => user.isAdmin);
console.log(admins);

// Reduce Example 1: Summing Array of Numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15

// Reduce Example 2: Flattening an Array of Arrays
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]
