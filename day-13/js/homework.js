// =============================================================================
// Day 13 — Homework (run in DevTools or Node; some items are “lab notebook” style)
// =============================================================================

// -----------------------------------------------------------------------------
// 1) Predict: console.log(typeof age); var age = 25;
// BEFORE running: `typeof age` sees the hoisted `var age` binding (undefined),
// so typeof returns "undefined" (the string) — this is why it is not a ReferenceError.
// AFTER running: console shows "undefined" then age becomes 25 on the next line.
// -----------------------------------------------------------------------------
console.log("=== HW1: typeof with hoisted var ===");
console.log(typeof age);
var age = 25;

// -----------------------------------------------------------------------------
// 2) let TDZ — access on the line above the declaration; screenshot the console.
// Paste THIS alone in a fresh file (do not mix with the line below in one run):
//   console.log(secret);
//   let secret = 42;
// Expected (V8 / Chrome / Node): ReferenceError: Cannot access 'secret' before initialization
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 3) Same logic three ways — call BEFORE the defining line in each mini-block
// -----------------------------------------------------------------------------
console.log("=== HW3: declaration vs var expression vs const arrow ===");

// Function declaration: works before the line (hoisted as a function).
console.log("decl before line:", hwDecl());
function hwDecl() {
  return "declaration OK";
}

// var + function expression: hoisted as undefined → TypeError when called early.
try {
  hwVarExpr();
} catch (e) {
  console.log("var expression early:", e.name, "-", e.message);
}
var hwVarExpr = function () {
  return "var expr OK after init";
};

// const + arrow: TDZ until init line → ReferenceError when called early.
try {
  hwConstArrow();
} catch (e) {
  console.log("const arrow early:", e.name, "-", e.message);
}
const hwConstArrow = () => "const arrow OK after init";

// -----------------------------------------------------------------------------
// HW3 — ANSWER KEY (calling each form *before* its defining line)
// -----------------------------------------------------------------------------
// | Form                         | Early call? | Error / result |
// |-----------------------------|------------|----------------|
// | function declaration        | Works      | No error: the whole function is hoisted in the creation phase, so the name already refers to the callable function before the line runs. |
// | var + function expression   | Throws     | TypeError (e.g. "hwVarExpr is not a function"): `var` hoists the *binding* as `undefined`; the assignment to the function value happens later. Calling `undefined()` is a TypeError. |
// | const + arrow function      | Throws     | ReferenceError (e.g. "Cannot access 'hwConstArrow' before initialization"): `const` is in the TDZ until the declaration line runs; you must not read the identifier early. |
