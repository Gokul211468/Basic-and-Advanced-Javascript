// Write a generator chunked(arr, size) that yields successive chunks of arr of length size. 
// E.g. [...chunked([1,2,3,4,5], 2)] → [[1,2], [3,4], [5]].

function* chunked(arr, size) {
    for (let i = 0; i < arr.length; i += size) {
        yield arr.slice(i, i + size);
    }
}

console.log([...chunked([1, 2, 3, 4, 5], 2)]);
//Output: [[1, 2], [3, 4], [5]]



// Build an infinite generator of primes.
// Use it with take(primes(), 10) to get the first 10.

// Reuse take() from the previous task
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

// Helper function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Infinite prime generator
function* primes() {
    let num = 2;

    while (true) {
        if (isPrime(num)) {
            yield num;
        }

        num++;
    }
}
console.log(take(primes(), 10));
//Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


// Write zip(a, b) — a generator that yields pairs from two iterables,
// stopping when either ends. Test with arrays of different lengths.

function* zip(a, b) {
    const iterA = a[Symbol.iterator]();
    const iterB = b[Symbol.iterator]();

    while (true) {
        const nextA = iterA.next();
        const nextB = iterB.next();

        if (nextA.done || nextB.done) {
            return;
        }

        yield [nextA.value, nextB.value];
    }
}

// Test 1: Same length
console.log([...zip([1, 2, 3], ["a", "b", "c"])]);

// Test 2: First array shorter
console.log([...zip([1, 2], ["a", "b", "c", "d"])]);

// Test 3: Second array shorter
console.log([...zip([1, 2, 3, 4], ["a", "b"])]);

// Output:

// [[1, "a"], [2, "b"], [3, "c"]]

// [[1, "a"], [2, "b"]]

// [[1, "a"], [2, "b"]]