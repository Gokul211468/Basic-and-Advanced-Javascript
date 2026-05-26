// Task 1 Predict the `this`
// Type the following snippet exactly: a user object with name: "Priya" and a method greet() { console.log(this.name); }. Then call user.greet(). Then assign const g = user.greet and call g().
// Predict the output of each call BEFORE running.
// Run. Note actual output.
// In a comment, explain why the second call lost the this.

// User object
const user = {
    name: "Priya",
  
    greet() {
      console.log(this.name);
    }
  };
  
  // First call
  user.greet();
  
  // Store method in a variable
  const g = user.greet;
  
  // Second call
  g();
  
  /*
  Prediction before running:
  
  user.greet() -> "Priya"
  
  g() -> many beginners expect "Priya"
  but actually it becomes undefined (or window.name in non-strict old browsers)
  */



//   Task 2 Fix it Three Ways
//   Take this code: class Timer { constructor() { this.sec = 0; } tick() { this.sec++; console.log(this.sec); } }
//   Create const t = new Timer(); then setInterval(t.tick, 1000);
//   Run it — observe the TypeError.
//   Now fix it THREE different ways: (1) using .bind, (2) using an arrow wrapper, (3) using a class field arrow.
//   Verify all three log 1, 2, 3, ...


// Original code
class Timer {
    constructor() {
      this.sec = 0;
    }
  
    tick() {
      this.sec++;
      console.log(this.sec);
    }
  }
  
  const t = new Timer();
  
  setInterval(t.tick, 1000);
  
  /*
  Error because:
  t.tick loses its object context.
  this becomes undefined.
  */

// FIX 1 — bind()

class Timer1 {
    constructor() {
      this.sec = 0;
    }
  
    tick() {
      this.sec++;
      console.log(this.sec);
    }
  }
  
  const t1 = new Timer1();
  
  setInterval(t1.tick.bind(t1), 1000);
  
  /*
  bind() permanently sets this to t1.
  */

// FIX 2 — arrow wrapper

class Timer2 {
    constructor() {
      this.sec = 0;
    }
  
    tick() {
      this.sec++;
      console.log(this.sec);
    }
  }
  
  const t2 = new Timer2();
  
  setInterval(() => t2.tick(), 1000);
  
  /*
  Arrow calls t2.tick() correctly.
  */

// FIX 3 — class field arrow

class Timer3 {
    sec = 0;
  
    tick = () => {
      this.sec++;
      console.log(this.sec);
    };
  }
  
  const t3 = new Timer3();
  
  setInterval(t3.tick, 1000);
  
  /*
  Arrow function keeps lexical this.
  */



//   Task 3 call / apply / bind
//   Define function describe(role, city) { console.log(`${this.name} is a ${role} from ${city}`); }
//   Create const u = { name: "Aarav" }
//   Call describe with u as this using .call, then .apply, then create a bound version with .bind (pre-fill role to "developer") and call it.
//   In a comment, write the one-line difference between the three.


function describe(role, city) {
    console.log(`${this.name} is a ${role} from ${city}`);
  }
  
  const u = {
    name: "Aarav"
  };
  
  // call -> arguments passed separately
  describe.call(u, "designer", "Mumbai");
  
  // apply -> arguments passed as array
  describe.apply(u, ["tester", "Delhi"]);
  
  // bind -> returns a new function
  const boundDescribe = describe.bind(u, "developer");
  
  boundDescribe("Bangalore");
  
  /*
  Output:
  Aarav is a designer from Mumbai
  Aarav is a tester from Delhi
  Aarav is a developer from Bangalore
  */
  
  /*
  Difference:
  call -> invokes immediately with separate args
  apply -> invokes immediately with array args
  bind -> returns a new bound function
  */


//   Bonus Arrow vs Regular Method
//   Build an object team with members: ["Priya", "Aarav", "Riya"] and TWO methods.
//   Method A — printRegular() uses forEach(function(m) { console.log(this.members.length, m); }).
//   Method B — printArrow() uses forEach((m) => { console.log(this.members.length, m); }).
//   Call both. Note which one breaks and why.


const team = {
    members: ["Priya", "Aarav", "Riya"],
  
    // Regular function inside forEach
    printRegular() {
      this.members.forEach(function (m) {
        console.log(this.members.length, m);
      });
    },
  
    // Arrow function inside forEach
    printArrow() {
      this.members.forEach((m) => {
        console.log(this.members.length, m);
      });
    }
  };
  
  // Call regular version
  team.printRegular();
  
  // Call arrow version
  team.printArrow();
  
  /*
  printRegular() result:
  TypeError: Cannot read properties of undefined
  
  Reason:
  Regular functions get their own this.
  Inside forEach callback, this is undefined.
  
  printArrow() result:
  3 Priya
  3 Aarav
  3 Riya
  
  Reason:
  Arrow functions do not create their own this.
  They inherit this from printArrow(),
  so this still refers to team.
  */


