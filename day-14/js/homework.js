// Write multiplier(factor) that returns a function multiplying its argument by factor. 
// Create double = multiplier(2) and triple = multiplier(3).
// Verify both work independently.

function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  // Create independent functions
  const double = multiplier(2);
  const triple = multiplier(3);
  
  // Test them
  console.log(double(5)); // 10
  console.log(double(10)); // 20
  
  console.log(triple(5)); // 15
  console.log(triple(10)); // 30

  

// Take the bank-account closure and add a transactionCount private variable that increments on every deposit/withdraw. 
// Add a getTransactionCount() method.

function createAccount(initial) {
    // Private variables
    let balance = initial;
    let transactionCount = 0;
  
    return {
      deposit(amount) {
        balance += amount;
        transactionCount++;
      },
  
      withdraw(amount) {
        balance -= amount;
        transactionCount++;
      },
  
      getBalance() {
        return balance;
      },
  
      getTransactionCount() {
        return transactionCount;
      }
    };
  }
  
  // Create account
  const account = createAccount(1000);
  
  // Perform transactions
  account.deposit(500);
  account.withdraw(200);
  account.deposit(300);
  
  // Check balance
  console.log(account.getBalance()); // 1600
  
  // Check transaction count
  console.log(account.getTransactionCount()); // 3
  
  // Verify private variables are inaccessible
  console.log(account.balance); // undefined
  console.log(account.transactionCount); // undefined



// Write once(fn) — a closure that takes a function and 
// returns a wrapped version that only runs the FIRST time it's called. 
// Subsequent calls return the cached first result.

function once(fn) {
    let hasRun = false;
    let cachedResult;
  
    return function (...args) {
      // Run only the first time
      if (!hasRun) {
        cachedResult = fn(...args);
        hasRun = true;
      }
  
      // Return cached result afterward
      return cachedResult;
    };
  }
  
  // Example function
  function greet(name) {
    console.log("Function is running...");
    return `Hello, ${name}!`;
  }
  
  // Wrap it
  const greetOnce = once(greet);
  
  // Calls
  console.log(greetOnce("Gokul"));
  console.log(greetOnce("Rahul"));
  console.log(greetOnce("Anu"));