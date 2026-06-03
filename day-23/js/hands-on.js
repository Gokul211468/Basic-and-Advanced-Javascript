// Task 1 Manual Iterator
// Build a range(from, to) ITERABLE OBJECT (not a generator) using [Symbol.iterator].
// Test with for...of over range(3, 7). Should log 3, 4, 5, 6, 7.
// Test with [...range(1, 3)]. Should give [1, 2, 3].


const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// Now range works with for...of, spread, destructuring
for (const n of range) console.log(n);    // 1, 2, 3, 4, 5
console.log([...range]);                  // [1, 2, 3, 4, 5]
const [first, ...rest] = range;
console.log(first, rest);        




// Task 2 Range Generator
// Re-do Task 1 — but using function*.
// Verify the same for...of and spread tests pass.
// In a comment, note the line-count difference.

function* range(from, to) {
  for (let current = from; current <= to; current++) {
      yield current;
  }
}

// Test 1
for (const num of range(3, 7)) {
  console.log(num);
}

// Test 2
console.log([...range(1, 3)]);

/*
Output:
3
4
5
6
7
[1, 2, 3]
*/


// Task 3 Take from Infinite
// Write take(iter, n) that takes ONLY the first n values from any iterator/generator.
// Build an infinite naturals() generator: 1, 2, 3, ...
// Use take(naturals(), 5) to safely get [1, 2, 3, 4, 5] without hanging.


// Infinite generator
function* naturals() {
  let n = 1;

  while (true) {
      yield n++;
  }
}

// Take first n values from any iterable
function take(iter, n) {
  const result = [];

  for (const value of iter) {
      result.push(value);

      if (result.length === n) {
          break;
      }
  }

  return result;
}

console.log(take(naturals(), 5));

//Output: [1, 2, 3, 4, 5]



// Bonus Tree Walk with yield*
// Build a tree: { value: 1, children: [{ value: 2, children: [{ value: 3, children: [] }] }, { value: 4, children: [] }] }.
// Write a generator walk(node) that yields each value in depth-first order.
// Use yield* to recurse.
// Spread to an array. Should be [1, 2, 3, 4].


const tree = {
  value: 1,
  children: [
      {
          value: 2,
          children: [
              {
                  value: 3,
                  children: []
              }
          ]
      },
      {
          value: 4,
          children: []
      }
  ]
};

function* walk(node) {
  yield node.value;

  for (const child of node.children) {
      yield* walk(child);
  }
}

console.log([...walk(tree)]);

//Output: [1, 2, 3, 4]