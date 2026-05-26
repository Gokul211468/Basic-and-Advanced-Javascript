//Topic 1 What is `this`?

function whoAmI() {
    console.log(this);
  }
  
  whoAmI();                                // strict mode: undefined; non-strict: window/global
  
  const user = { name: "Priya", whoAmI };
  user.whoAmI();                           // logs the user object — called as a method
  
  const other = { name: "Aarav", whoAmI };
  other.whoAmI();                          // logs other — same function, different this


//Topic 2 The 4 Binding Rules

// 1. Default — plain function call
function speak() { console.log(this); }
speak();                                 // undefined (strict mode)

// 2. Implicit — method call
const car = {
  brand: "Tata",
  show() { console.log(this.brand); },
};
car.show();                              // "Tata"  ← this = car

// 3. Explicit — call/apply/bind
function intro(city) { console.log(`${this.name} from ${city}`); }
const u = { name: "Priya" };
intro.call(u, "Jaipur");                 // "Priya from Jaipur"   ← this = u

// 4. new — constructor binding
function User(name) { this.name = name; }
const p = new User("Anaya");
console.log(p.name);                     // "Anaya"  ← this = the new object


//Topic 3 call / apply / bind

function greet(city, lang) {
    console.log(`${this.name} from ${city} speaks ${lang}`);
  }
  
  const u1 = { name: "Priya" };
  
  // call — invoke now, args listed
  greet.call(u1, "Jaipur", "Hindi");                // "Priya from Jaipur speaks Hindi"
  
  // apply — invoke now, args as array
  greet.apply(u1, ["Jaipur", "Hindi"]);             // same output
  
  // bind — returns a new function for later
  const greetPriya = greet.bind(u, "Jaipur");      // partially applied: city pre-set
  greetPriya("English");                            // "Priya from Jaipur speaks English"
  greetPriya("Marathi");                            // "Priya from Jaipur speaks Marathi"
  
  // Once bound, this CANNOT be re-bound
  greetPriya.call({ name: "Aarav" }, "Tamil");     // still "Priya from Jaipur speaks Tamil"


//Topic 4 Arrow Functions — Lexical this

const user1 = {
    name: "Priya",
    // Regular function — has its own this
    regular: function () {
      console.log(this.name);              // "Priya"  ← implicit binding
    },
    // Arrow — no own this; inherits from enclosing scope (here: module/global)
    arrow: () => {
      console.log(this.name);              // undefined ← arrow doesn't see user as this
    },
  };
  
  user1.regular();   // "Priya"
  user1.arrow();     // undefined          ← surprise!  arrow as a method is usually wrong
  
  // Where arrow shines: nested callbacks
  const team = {
    members: ["Priya", "Aarav", "Riya"],
    greetAll() {
      this.members.forEach((m) => {
        // Arrow here inherits 'this' from greetAll → which is 'team'
        console.log(`Hi ${m}, from team ${this.members.length}`);
      });
    },
  };
  team.greetAll();
  // "Hi Priya, from team 3"
  // "Hi Aarav, from team 3"
  // "Hi Riya, from team 3"



//Topic 5 `this` in Classes

class User {
    constructor(name) {
      this.name = name;                    // this = the new instance
    }
  
    greet() {
      console.log(`Hi, I'm ${this.name}`); // this = whichever instance .greet() was called on
    }
  }
  
  const a = new User("Priya");
  const b = new User("Aarav");
  a.greet();                               // "Hi, I'm Priya"
  b.greet();                               // "Hi, I'm Aarav"
  
  // Classic loss-of-this:
  const greetFn = a.greet;                 // pulled off as a plain function
  // greetFn();                            // TypeError: cannot read 'name' of undefined
                                            //   (this is now undefined in strict mode



//Topic 6 The "Lost this" Bug & Fixes

class Counter {
    constructor() { this.count = 0; }
    inc() { this.count++; console.log(this.count); }
  }
  
  const c = new Counter();
  
  // BUG — passed as plain function reference, this is lost
  setTimeout(c.inc, 100);                  // TypeError: cannot read 'count' of undefined
  
  // FIX 1 — bind
  setTimeout(c.inc.bind(c), 100);          // works — this permanently bound to c
  
  // FIX 2 — arrow wrapper (closes over c lexically)
  setTimeout(() => c.inc(), 100);          // works — c.inc() called as a method
  
  // FIX 3 — class field as arrow (modern syntax)
  class CounterArrow {
    count = 0;
    inc = () => { this.count++; console.log(this.count); };  // arrow → lexical this
  }
  const ca = new CounterArrow();
  setTimeout(ca.inc, 100);                 // works — arrow's this is the instance


