// Day 6 - Functions: Code Snippets

const topic1Snippet = `function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");
greet("Bob");`;

const topic2Snippet = `function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);  // 8`;

const topic3Snippet = `let multiply = function(x, y) {
  return x * y;
};

console.log(multiply(4, 5));  // 20`;

const topic4Snippet = `let square = (num) => {
  return num * num;
};

// Shorter syntax
let cube = (num) => num * num * num;

console.log(square(5));  // 25
console.log(cube(3));    // 27`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;
document.querySelector("#topic4Code code").textContent = topic4Snippet;

// Run demonstrations
console.log("=== Day 6: Functions ===");

function add(a, b) { return a + b; }
console.log(add(5, 3));

function silent() { console.log("hi"); }
const x = silent();
console.log(x);

const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Gokul"));

const addNum = (a, b) => a + b;
console.log(addNum(3, 5));

function square1(x){
  return x * x;
}
console.log(square1(2));

const square2 = x => x * x;
console.log(square2(2));
