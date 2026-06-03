// Implement compose from scratch (right-to-left). 
// Use it with the same addOne, square, negate as today's task. 
// Confirm the output ordering vs pipe.

function compose(...fns) {
    return function (value) {
        return fns.reduceRight((acc, fn) => fn(acc), value);
    };
}

const addOne = x => x + 1;
const square = x => x * x;
const negate = x => -x;

const result = compose(addOne, square, negate);

console.log(result(5));

/*
Output:
26

compose(addOne, square, negate)(5)

Execution (right-to-left):
5 -> negate -> -5
-5 -> square -> 25
25 -> addOne -> 26

For comparison:

pipe(addOne, square, negate)(5)
Output:
-36
*/



// Implement curry(fn) — given a function of N args, 
// return a curried version. Test with curry(add)(1)(2)(3).

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }

        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));

/*
Output:
6
*/