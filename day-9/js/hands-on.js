// Day 9 - Modern Syntax
// Hands-on exercises

// Template Literals
let product = "Laptop";
let price = 50000;
let tax = 0.18;
console.log(`${product} costs ₹${price} + ₹${price * tax} GST = ₹${price + (price * tax)}`);

// Destructuring
let scores = [88, 75, 92, 60, 45];
let [top, second, ...rest] = scores;
console.log("Top: " + top + ", Second: " + second + ", Rest: " + rest);

let user = { name: "Anaya", age: 21, city: "Jaipur" };
let { name, age } = user;
console.log(`${name} is ${age} years old`);

// Spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log("Merged array: " + arr2);

let defaults = { theme: "light", lang: "en" };
let userPrefs = { theme: "dark" };
let merged = { ...defaults, ...userPrefs };
console.log("Merged settings: ", merged);
