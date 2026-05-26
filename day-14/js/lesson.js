//Topic 1 Lexical (Static) Scope

const city = "Jaipur";              // lives in the OUTER (global) scope

function outer() {
  const language = "Hindi";         // lives in outer's scope
  function inner() {
    const greeting = "Namaste";     // lives in inner's scope
    console.log(greeting, language, city);  // can see all three — looks outward
  }
  inner();
}

outer();   // "Namaste Hindi Jaipur"

// inner() can reach OUT to language and city because of WHERE it is written —
// nested inside outer(), which is nested inside the global scope.


//Topic 2 The Scope Chain

const a = "global a";

function outer() {
  const b = "outer b";
  function inner() {
    const c = "inner c";
    console.log(a);   // "global a"  ← walked up: inner → outer → global ✓
    console.log(b);   // "outer b"   ← walked up: inner → outer ✓
    console.log(c);   // "inner c"   ← found in current scope ✓
  }
  inner();
  // console.log(c);  // ReferenceError ← outer scope cannot see inner's variables
}
outer();


//Topic 3 What is a Closure?

function makeGreeter(name) {        // outer function
    // 'name' lives in the outer EC
  
    return function () {              // inner function — referenced after outer returns
      console.log(`Namaste, ${name}!`);
    };
  }
  
  const greetPriya = makeGreeter("Priya");
  const greetAarav = makeGreeter("Aarav");
  
  greetPriya();    // "Namaste, Priya!"   ← still remembers name = "Priya"
  greetAarav();    // "Namaste, Aarav!"   ← independent closure, name = "Aarav"


  //Topic 4 Practical Closure Patterns

  // 1. Counter — private state
function makeCounter() {
    let count = 0;                      // private — cannot be reached from outside
    return function () {
      count++;                          // each call mutates the SAME closed-over count
      return count;
    };
  }
  
  const c = makeCounter();
  console.log(c());     // 1
  console.log(c());     // 2
  console.log(c());     // 3
  // console.log(count) // ReferenceError — count is private to the closure
  
  // 2. Private variables — bank account
  function createAccount(initial) {
    let balance = initial;              // PRIVATE — no one outside can touch it
    return {
      deposit:    (amt) => balance += amt,
      withdraw:   (amt) => balance -= amt,
      getBalance: ()    => balance,
    };
  }
  
  const acc = createAccount(1000);
  acc.deposit(500);
  console.log(acc.getBalance());   // 1500
  // acc.balance                   // undefined — truly private
  
  // 3. Memoization — cache expensive results
  function memoize(fn) {
    const cache = {};                   // closed-over cache, lives across calls
    return function (n) {
      if (n in cache) return cache[n];  // hit  → return cached
      cache[n] = fn(n);                 // miss → compute and store
      return cache[n];
    };
  }
  
  const slowSquare = (n) => { console.log("computing..."); return n * n; };
  const fastSquare = memoize(slowSquare);
  fastSquare(5);   // "computing..."  → 25
  fastSquare(5);   // 25 (no log — served from cache)


//Topic 5 The var-in-Loop Bug

// THE BUG — using var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
  // Logs: 3, 3, 3   ← surprising!

// FIX 1 — let (block-scoped: each iteration gets a FRESH i)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
  }
  // Logs: 0, 1, 2
  
  // FIX 2 — IIFE creating a new scope per iteration (the classic pre-ES6 fix)
  for (var i = 0; i < 3; i++) {
    (function (j) {                      // j is a fresh parameter each iteration
      setTimeout(() => console.log(j), 100);
    })(i);
  }
  // Logs: 0, 1, 2
  
  // FIX 3 — bind the value into a function call
  for (var i = 0; i < 3; i++) {
    setTimeout(console.log.bind(null, i), 100);
  }
  // Logs: 0, 1, 2



  //Topic 6 IIFE

  // Basic IIFE — runs once, creates a private scope
(function () {
    const secret = "hidden";            // not visible outside
    console.log("IIFE ran");
  })();
  
  // IIFE with parameters
  (function (city) {
    console.log(`Greetings from ${city}`);
  })("Jaipur");
  
  // Arrow IIFE (modern)
  (() => {
    const x = 42;
    console.log(x);
  })();
  
  // Pre-ES6 module pattern — the most common historical use
  const counterModule = (function () {
    let count = 0;                      // private (closure)
    return {
      inc: () => ++count,
      get: () => count,
    };
  })();
  
  counterModule.inc();
  counterModule.inc();
  console.log(counterModule.get());    // 2
  // counterModule.count                 // undefined — private


  