// Day 9 - Modern Syntax: Code Snippets

const topic1Snippet = `let name = "Alice";
let age = 25;

// Old way
console.log("Name: " + name + ", Age: " + age);

// Modern way
console.log(\`Name: \${name}, Age: \${age}\`);

// Multi-line strings
let text = \`Hello,
This is a
multi-line string\`;
console.log(text);`;

const topic2Snippet = `let scores = [88, 75, 92];

// Old way
let first = scores[0];
let second = scores[1];

// Modern way
let [top, second, third] = scores;

// Skip elements
let [best, , medium] = scores;`;

const topic3Snippet = `let user = { name: "Bob", age: 30, city: "Delhi" };

// Extract properties
let { name, age } = user;
console.log(name);  // "Bob"

// Rename during extraction
let { name: fullName, city: location } = user;`;

const topic4Snippet = `// Copy array
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);  // [1, 2, 3, 4, 5]

// Merge objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2);  // { a: 1, b: 2, c: 3 }`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;

// Run demonstrations
console.log("=== Day 9: Modern Syntax ===");

let name = "Alice";
let age = 25;
console.log(`Name: ${name}, Age: ${age}`);

let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let person = { firstName: "John", lastName: "Doe" };
let { firstName, lastName } = person;
console.log(firstName, lastName);

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

let obj1 = { x: 1, y: 2 };
let obj2 = { ...obj1, z: 3 };
console.log(obj2);
