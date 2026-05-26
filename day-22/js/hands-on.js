// Task 1 Map vs Object
// Build a Map of products: "pen" → 50, "book" → 200, "bag" → 800.
// Iterate with for...of and log each as "item: ₹price".
// Use .has, .get, .delete, .size.
// Convert it to an Object with Object.fromEntries and back to a Map with new Map(Object.entries(...)).

const products = new Map()

products.set("pen", 50)
products.set("book", 200)
products.set("bag", 800)

for(const [item, value] of products){
    console.log(`${item}: ₹${value}`)
}

console.log(products.has("pen"))
console.log(products.get("pen"))
products.delete("pen")
console.log(products.size)
const obj = Object.fromEntries(products)
console.log(obj)
const map = new Map(Object.entries(obj))
console.log(map)



// Task 2 Deduplicate with Set
// Take an array of student IDs with duplicates: [101, 102, 103, 101, 104, 102, 105].
// Use a Set to deduplicate. Convert back to an array.
// Now compute the count of UNIQUE IDs.
// Try with mixed types [1, "1", 1, true, 1n] — predict and verify.

// Student IDs with duplicates
const ids = [101, 102, 103, 101, 104, 102, 105];

// Deduplicate using Set
const uniqueIds = [...new Set(ids)];

console.log(uniqueIds);

// Count unique IDs
console.log(uniqueIds.length);

// Mixed types
const mixed = [1, "1", 1, true, 1n];

const uniqueMixed = [...new Set(mixed)];

console.log(uniqueMixed);
console.log(uniqueMixed.length);

/*
Output:
[101, 102, 103, 104, 105]
5
[1, "1", true, 1n]
4
*/


// Task 3 Cache with Map
// Write memoize(fn) from Day 2 — but this time use a Map instead of an object.
// Wrap an expensiveSquare(n) that logs "computing..." and returns n * n.
// Verify that calling it twice with 5 only logs "computing..." once.
// Then add a cache.size check.

function memoize(fn) {
    const cache = new Map();
  
    function memoized(arg) {
      if (cache.has(arg)) {
        return cache.get(arg);
      }
  
      const result = fn(arg);
  
      cache.set(arg, result);
  
      return result;
    }
  
    // expose cache for size check
    memoized.cache = cache;
  
    return memoized;
  }
  
  function expensiveSquare(n) {
    console.log("computing...");
    return n * n;
  }
  
  const memoizedSquare = memoize(expensiveSquare);
  
  console.log(memoizedSquare(5));
  console.log(memoizedSquare(5));
  
  console.log(memoizedSquare.cache.size);
  
  /*
  Output:
  computing...
  25
  25
  1
  */


// Bonus WeakMap for Private Data
// Use a WeakMap to store "metadata" for objects without modifying them.
// Build a tiny attach/get API: attach(obj, data) and get(obj).
// Test by attaching { lastClick: Date.now() } to two button objects.
// Drop one of the button references. Conceptually, the WeakMap entry will be GC'd.

// WeakMap for private metadata
const metadata = new WeakMap();

// Attach data
function attach(obj, data) {
  metadata.set(obj, data);
}

// Get data
function get(obj) {
  return metadata.get(obj);
}

// Button objects
let button1 = {
  id: "save-btn"
};

let button2 = {
  id: "cancel-btn"
};

// Attach metadata
attach(button1, {
  lastClick: Date.now()
});

attach(button2, {
  lastClick: Date.now()
});

// Read metadata
console.log(get(button1));
console.log(get(button2));

// Drop one reference
button1 = null;
