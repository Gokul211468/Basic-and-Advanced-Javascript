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