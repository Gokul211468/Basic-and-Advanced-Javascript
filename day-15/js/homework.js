// Build an object user = { name, greet } where greet logs this.name. 
// Now call user.greet(), const fn = user.greet; fn(), and user.greet.call({ name: "X" }).
// Predict each first, then run.

const user = {
    name: "Priya",
  
    greet() {
      console.log(this.name);
    }
  };
  
  /*
  Predictions:
  
  user.greet()                  -> "Priya"
  fn()                          -> undefined
  user.greet.call({name:"X"})   -> "X"
  */
  
  // Method call
  user.greet();
  
  // Store function separately
  const fn = user.greet;
  
  // Plain function call
  fn();
  
  // call() sets this manually
  user.greet.call({ name: "X" });
  
  /*
  Actual Output:
  Priya
  undefined
  X
  
  Why?
  
  user.greet()
  -> this = user
  
  fn()
  -> plain function call
  -> this = undefined
  
  call({name:"X"})
  -> this is manually set to {name:"X"}
  */


//   Write function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }. 
//   Use .apply to call it with an array [1, 2, 3, 4, 5].
//    Why does .apply shine here?

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  
  const arr = [1, 2, 3, 4, 5];
  
  // Using apply
  const result = sum.apply(null, arr);
  
  console.log(result); // 15
  
  /*
  Why apply shines here:
  
  apply lets us pass an array as function arguments.
  
  Without apply:
  sum(1, 2, 3, 4, 5)
  
  With apply:
  sum.apply(null, [1, 2, 3, 4, 5])
  
  So apply is useful when arguments already exist in an array.
  */


//   Take an arrow function const f = () => console.log(this) written at top-level of a module.
//    Try to .bind({ x: 1 }) it and call.
//    What does it log? Why?

// Top-level arrow function
const f = () => console.log(this);

// Try to bind a new this
const boundF = f.bind({ x: 1 });

// Call it
boundF();

/*
Output in ES modules:
undefined

(inside browsers without modules it may log window)
*/