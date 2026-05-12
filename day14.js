// // 1. Counter — private state
// function makeCounter() {
// let count = 0; // private — cannot be reached from outside
// return function () {
// count++; // each call mutates the SAME closed-over count
// return count;
// };
// }
// const c = makeCounter();
// console.log(c()); // 1
// console.log(c()); // 2
// console.log(c()); // 3

// // console.log(count) // ReferenceError — count is private to the closure


// // 2. Private variables — bank account
// function createAccount(initial) {
// let balance = initial; // PRIVATE — no one outside can touch it
// return {
// deposit: (amt) => balance += amt,
// withdraw: (amt) => balance -= amt,
// getBalance: () => balance,
// };
// }
// const acc = createAccount(1000);
// acc.deposit(500);
// console.log(acc.getBalance()); // 1500
// // acc.balance // undefined — truly private


// // 3. Memoization — cache expensive results
// function memoize(fn) {
// const cache = {}; // closed-over cache, lives across calls
// return function (n) {
// if (n in cache) return cache[n]; // hit → return cached
// cache[n] = fn(n); // miss → compute and store
// return cache[n];
// };
// }

// const slowSquare = (n) => { console.log("computing..."); return n * n; };
// const fastSquare = memoize(slowSquare);
// fastSquare(5); // "computing..." → 25
// fastSquare(5); // 25 (no log — served from cache)


// // Basic IIFE — runs once, creates a private scope
// (function () {
// const secret = "hidden"; // not visible outside
// console.log("IIFE ran");
// })();

// // IIFE with parameters
// (function (city) {
// console.log(`Greetings from ${city}`);
// })("Jaipur");

// // Arrow IIFE (modern)
// (() => {
// const x = 42;
// console.log(x);
// })();


function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

console.log(counter2()); // 1
console.log(counter2()); // 2

