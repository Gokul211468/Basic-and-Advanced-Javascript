// =============================================================================
// Day 13 — Hands-on: Hoisting, TDZ, call stack
// Open the Console when you load hands-on.html.
// =============================================================================

// -----------------------------------------------------------------------------
// Task 1 — Predict the var hoist
// Type this EXACT snippet in a fresh JS file, predict, then run and compare.
// -----------------------------------------------------------------------------
console.log("=== Task 1: var hoist ===");
console.log(name);
var name = "Priya";
console.log(name);
// Prediction: first log is undefined; second is "Priya".
// Why the FIRST log is undefined and not ReferenceError:
// `var name` is hoisted to the top of the scope as `var name = undefined` during
// the creation phase. The binding exists before the assignment line runs, so
// `name` is a resolved identifier with value undefined — not a missing variable.

// -----------------------------------------------------------------------------
// Task 2 — Trigger the TDZ (then fix)
// Broken order (paste alone in a fresh file to see the error):
//   console.log(city);
//   let city = "Jaipur";
// Node / V8 error when run that way:
//   ReferenceError: Cannot access 'city' before initialization
//
// TDZ = Temporal Dead Zone — the period from the start of the block/scope until
// the `let`/`const` declaration runs, where you must not read the binding.
// -----------------------------------------------------------------------------
console.log("=== Task 2: let after use (fixed order for this runner) ===");
let city = "Jaipur";
console.log(city);

// -----------------------------------------------------------------------------
// Task 3 — Function declaration vs expression (exact order from the brief)
// In a fresh file, `greet()` throws and stops the script after "Hi".
// Here we catch so the Bonus section still runs.
// -----------------------------------------------------------------------------
console.log("=== Task 3: declaration vs var expression ===");
sayHi();
try {
  greet();
} catch (e) {
  // Expected in a fresh file: TypeError: greet is not a function
  console.log("Task 3 failing call:", e.name + ":", e.message);
}
function sayHi() {
  console.log("Hi");
}
var greet = function () {
  console.log("Hello");
};

// Hoisting difference (short):
// - Function declaration: the name is created and bound to the whole function
//   during creation phase, so calls above the declaration line work.
// - Function expression assigned to `var`: only the variable is hoisted as
//   undefined; the function value is assigned at runtime on that line, so an
//   earlier call tries to invoke undefined → TypeError.

// -----------------------------------------------------------------------------
// Bonus — Trace the call stack
// Hand-drawn stack the moment multiply(5, 5) is on TOP (four frames, outer → inner):
//   ┌──────────────────────────┐
//   │ multiply(5, 5)           │  ← TOP (active frame)
//   ├──────────────────────────┤
//   │ squareBonus(5)           │
//   ├──────────────────────────┤
//   │ printSquareBonus(5)      │
//   ├──────────────────────────┤
//   │ (global / module script) │  ← outer entry (label varies: Node vs browser)
//   └──────────────────────────┘
// Final console.log from printSquareBonus: 25
// Compare with DevTools after adding console.trace() below.
// -----------------------------------------------------------------------------
console.log("=== Bonus: printSquare + console.trace inside multiply ===");

function multiplyBonus(a, b) {
  console.trace();
  return a * b;
}

function squareBonus(n) {
  return multiplyBonus(n, n);
}

function printSquareBonus(n) {
  console.log(squareBonus(n));
}

printSquareBonus(5);
