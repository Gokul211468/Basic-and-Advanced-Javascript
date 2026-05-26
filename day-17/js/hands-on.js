// Task 1 Basic Class with Getter
// Build a Rectangle class with width , height instance properties.
// Add a get area() getter that returns width * height .
// Add a method scale(factor) that multiplies both dimensions in place.
// Create a 2 × 3 rectangle, log the area, scale by 2 , log the area again.

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height;
    }

    scale(factor){
        this.width *= factor;
        this.height *= factor;
    }
}

const rect = new Rectangle(2,3)

console.log(rect.area); 
rect.scale(2);
console.log(rect.area); 


// Task 2 Inheritance with super
// Build an Employee(name, salary) class with a describe() method that logs ${name} earns ₹${salary}/month.
// Build a Manager(name, salary, team) class that extends Employee.
// Override describe() to first call super.describe() then log Leads team of ${team.length}.
// Test with a Manager named "Riya", salary 80000, team ["Priya", "Aarav", "Anaya"].


// Parent class
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    describe() {
      console.log(`${this.name} earns ₹${this.salary}/month`);
    }
  }
  
  // Child class
  class Manager extends Employee {
    constructor(name, salary, team) {
      super(name, salary); // call parent constructor
      this.team = team;
    }
  
    // Override method
    describe() {
      super.describe(); // call parent method
      console.log(`Leads team of ${this.team.length}`);
    }
  }
  
  // Test
  const manager = new Manager(
    "Riya",
    80000,
    ["Priya", "Aarav", "Anaya"]
  );
  
  manager.describe();
  
  /*
  Output:
  Riya earns ₹80000/month
  Leads team of 3
  */



//   Task 3 Private Field with `#`
//   Build a Counter class with a #count private field starting at 0.
//   Add inc(), dec(), and a get value() getter.
//   Throw an Error if dec() would make the count negative.
//   Create a counter, call inc three times, dec once, log the value, then try to dec four more times in a try/catch.

class Counter {
    // Private field
    #count = 0;
  
    inc() {
      this.#count++;
    }
  
    dec() {
      if (this.#count === 0) {
        throw new Error("Count cannot go below 0");
      }
  
      this.#count--;
    }
  
    // Getter
    get value() {
      return this.#count;
    }
  }
  
  // Create counter
  const counter = new Counter();
  
  // Increment 3 times
  counter.inc();
  counter.inc();
  counter.inc();
  
  // Decrement once
  counter.dec();
  
  // Log value
  console.log(counter.value); // 2
  
  try {
    counter.dec(); // 1
    counter.dec(); // 0
    counter.dec(); // Error
    counter.dec(); // Won't run
  } catch (error) {
    console.log(error.message);
  }
  
  /*
  Output:
  2
  Count cannot go below 0
  */


//   Bonus Custom Error Class
//   Build a ValidationError class that extends Error. Constructor takes field and message.
//   Set this.name = "ValidationError" and this.field = field inside the constructor.
//   Write a validateUser({ name, age }) function that throws a ValidationError("name", ...) if name is missing and ValidationError("age", ...) if age < 0.
//   Call it twice in try/catch — once with bad name, once with bad age. Log e.field and e.message.

// Custom error class
class ValidationError extends Error {
    constructor(field, message) {
      super(message);
  
      this.name = "ValidationError";
      this.field = field;
    }
  }
  
  // Validation function
  function validateUser({ name, age }) {
    if (!name) {
      throw new ValidationError(
        "name",
        "Name is required"
      );
    }
  
    if (age < 0) {
      throw new ValidationError(
        "age",
        "Age cannot be negative"
      );
    }
  
    return "User is valid";
  }
  
  // Test 1 - bad name
  try {
    validateUser({ name: "", age: 25 });
  } catch (e) {
    console.log(e.field);   // name
    console.log(e.message); // Name is required
  }
  
  // Test 2 - bad age
  try {
    validateUser({ name: "Priya", age: -5 });
  } catch (e) {
    console.log(e.field);   // age
    console.log(e.message); // Age cannot be negative
  }



