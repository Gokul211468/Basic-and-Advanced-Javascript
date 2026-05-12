// Day 7 - Arrays: Code Snippets

const topic1Snippet = `let fruits = ["Apple", "Banana", "Orange"];
let numbers = [10, 20, 30, 40];
let mixed = [1, "Hello", true, 3.14];

console.log(fruits[0]);    // "Apple"
console.log(numbers[2]);   // 30`;

const topic2Snippet = `let arr = [1, 2, 3];

arr.push(4);           // Add to end
console.log(arr);      // [1, 2, 3, 4]

arr.pop();             // Remove from end
console.log(arr);      // [1, 2, 3]

arr.unshift(0);        // Add to start
console.log(arr);      // [0, 1, 2, 3]

console.log(arr.length);  // 4`;

const topic3Snippet = `let items = ["Book", "Pen", "Notebook"];

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// Or use forEach
items.forEach(function(item) {
  console.log(item);
});`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 7: Arrays ===");

let arr = [1, 2, 3, 4, 5];

console.log("Original: " + arr);

arr.push(6);
console.log("After push(6): " + arr);

arr.pop();
console.log("After pop(): " + arr);

arr.unshift(0);
console.log("After unshift(0): " + arr);

arr.shift();
console.log("After shift(): " + arr);

console.log("indexOf(3): " + arr.indexOf(3));
console.log("includes(4): " + arr.includes(4));

console.log("slice(1, 4): " + arr.slice(1, 4));

arr.forEach(function(num) {
  console.log("Number: " + num);
});
