// Task 1 Build a Counter
// Write a function makeCounter() that returns a function.
// The returned function, each time it is called, returns the next integer starting from 1.
// Create TWO independent counters with makeCounter() and verify they don't interfere.
// In a comment, explain WHERE the count variable lives between calls.


function makeCounter() {
    let count = 0; // private variable
  
    return function () {
      count++;
      return count;
    };
  }
  
  // Create first counter
  const counter1 = makeCounter();
  
  // Create second counter
  const counter2 = makeCounter();
  
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  console.log(counter1()); // 3
  
  console.log(counter2()); // 1
  console.log(counter2()); // 2
  
  console.log(counter1()); // 4


// Task 2 Fix the var-in-Loop Bug
// Type this snippet exactly: for (var i = 1; i <= 3; i++) { setTimeout(() => console.log(i), 100); }
// Predict the output. Run it. Note the actual output.
// Fix it by changing ONE keyword. Run again, verify it logs 1, 2, 3.
// In a comment, explain why var produced the surprising output and let fixes it.


// Original code
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
  
  /*
  Predicted output by many people:
  1
  2
  3
  
  Actual output after running:
  4
  4
  4
  
  Why?
  
  - var is function-scoped, so the loop creates only ONE shared variable: i
  - setTimeout runs later, after the loop has already finished
  - by the time callbacks execute, i has become 4
  - all callbacks reference the same i variable
  */

// Fixed version
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
  
  /*
  Output:
  1
  2
  3
  
  Why does let fix it?
  
  - let is block-scoped
  - in a for loop, JavaScript creates a NEW i for each iteration
  - each callback closes over its own separate i value
  - therefore callbacks remember:
    first callback  -> 1
    second callback -> 2
    third callback  -> 3
  */


// Task 3 Private Bank Balance
// Write a function createAccount(initial) that returns an object with three methods: deposit(amount), withdraw(amount), getBalance().
// balance must be PRIVATE — not accessible as account.balance.
// Test with: open an account with 1000, deposit 500, withdraw 200, log the balance.
// Verify account.balance is undefined.


function createAccount(initial) {
    // private variable
    let balance = initial;
  
    return {
      deposit(amount) {
        balance += amount;
      },
  
      withdraw(amount) {
        balance -= amount;
      },
  
      getBalance() {
        return balance;
      }
    };
  }
  
  // Open account with 1000
  const account = createAccount(1000);

  // Deposit 500
  account.deposit(500);
  
  // Withdraw 200
  account.withdraw(200);
  
  // Log balance
  console.log(account.getBalance()); // 1300
  
  // Verify balance is private
  console.log(account.balance); // undefined


// Bonus Build a Memoizer
// Write a function memoize(fn) that returns a new function caching results of fn by argument value.
// Use it to wrap an expensiveSquare(n) that logs "computing..." and returns n * n.
// Call the memoized version with 5 twice, then 10 once, then 5 again. Note when the log fires.
// In a comment, explain where the cache lives.

function memoize(fn) {
    // private cache
    const cache = {};
  
    return function (arg) {
      // if result already exists, return cached value
      if (cache[arg] !== undefined) {
        return cache[arg];
      }
  
      // otherwise compute and store
      const result = fn(arg);
      cache[arg] = result;
  
      return result;
    };
  }
  
  // Expensive function
  function expensiveSquare(n) {
    console.log("computing...");
    return n * n;
  }
  
  // Create memoized version
  const memoizedSquare = memoize(expensiveSquare);
  
  // Calls
  console.log(memoizedSquare(5));  // computing... 25
  console.log(memoizedSquare(5));  // 25
  
  console.log(memoizedSquare(10)); // computing... 100
  console.log(memoizedSquare(5));  // 25