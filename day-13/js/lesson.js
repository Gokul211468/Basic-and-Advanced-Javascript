// Day 13 — Hoisting, TDZ, and the call stack

const topic1Snippet = `// One global execution context for the whole script/module
const city = "Jaipur";

function greetUser(name) {
  // Each call creates a new function execution context
  const message = \`Hi \${name} from \${city}\`;
  return message;
}

greetUser("Priya");
greetUser("Aarav");

// var is hoisted: declaration first, assignment stays in place
console.log(topicName); // undefined (not ReferenceError)
var topicName = "Priya";
console.log(topicName); // "Priya"`;

const topic2Snippet = `// Creation vs execution phase (mental model)
// var bindings exist from the start of the scope with value undefined
console.log(name);     // undefined
var name = "Priya";
console.log(name);     // "Priya"

// let / const exist but are in the TDZ until their line runs
// console.log(level); // ReferenceError: Cannot access 'level' before initialization
let level = 5;

// TDZ is block-scoped for let/const
{
  // console.log(mark); // ReferenceError (still in TDZ)
  let mark = 87;
  console.log(mark);   // 87
}`;

const topic3Snippet = `// Call stack (who called whom)
function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  console.log(square(n));
}

printSquare(5); // logs 25

// Function declaration: name + body hoisted as one unit
sayHi(); // works
function sayHi() {
  console.log("Hi");
}

// var + function expression: identifier hoisted as undefined, then assigned later
greet(); // TypeError: greet is not a function
var greet = function () {
  console.log("Hello");
};

// const / let + function expression: TDZ until the line runs
welcome(); // ReferenceError: Cannot access 'welcome' before initialization
const welcome = function () {
  console.log("Welcome");
};`;

function injectLessonSnippets() {
  const t1 = document.querySelector("#topic1Code code");
  const t2 = document.querySelector("#topic2Code code");
  const t3 = document.querySelector("#topic3Code code");
  if (t1) t1.textContent = topic1Snippet;
  if (t2) t2.textContent = topic2Snippet;
  if (t3) t3.textContent = topic3Snippet;
}
injectLessonSnippets();

// --- Live demos (console) — names chosen to avoid clashing with snippet text above

console.log("--- Day 13 demo: global vs function execution context ---");
const demoCity = "Jaipur";

function greetUser(name) {
  const message = `Hi ${name} from ${demoCity}`;
  return message;
}

console.log(greetUser("Priya"));
console.log(greetUser("Aarav"));

console.log("--- var hoisting (same idea as Task 1) ---");
console.log(lessonDemoName);
var lessonDemoName = "Priya";
console.log(lessonDemoName);

console.log("--- var: silent undefined ---");
console.log(score);
var score = 90;

console.log("--- let: TDZ throws (caught here so the rest of the lesson runs) ---");
try {
  console.log(level);
} catch (e) {
  console.log("TDZ example:", e.name + ":", e.message);
}
let level = 5;

{
  let mark = 87;
  console.log("block let after init:", mark);
}

console.log("--- Call stack: printSquare(5) ---");

function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  console.log(square(n));
}

printSquare(5);

console.log("--- Function declaration vs expressions ---");
sayHiLesson();
function sayHiLesson() {
  console.log("Hi (declaration)");
}

try {
  lessonGreet();
} catch (e) {
  console.log("var expression before assignment:", e.name + ":", e.message);
}
var lessonGreet = function () {
  console.log("Hello");
};
lessonGreet();

try {
  lessonWelcome();
} catch (e) {
  console.log("const binding in TDZ:", e.name + ":", e.message);
}
const lessonWelcome = function () {
  console.log("Welcome");
};
