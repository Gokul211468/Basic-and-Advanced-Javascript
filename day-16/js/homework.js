var __day16HomeworkScriptUrl =
  typeof document !== "undefined" && document.currentScript
    ? document.currentScript.src
    : "";

// 1. Use Object.create to build a 3-level chain: tool → vehicle → car.
// Each level adds one method.
// Confirm a car instance can call all three methods.

const tool = {
    repair() {
      console.log("Repairing...");
    },
  };
  
  const vehicle = Object.create(tool);
  
  vehicle.start = function () {
    console.log("Starting...");
  };
  
  const car = Object.create(vehicle);
  
  car.drive = function () {
    console.log("Driving...");
  };
  
  car.drive();   // Driving...
  car.start();   // Starting...
  car.repair();  // Repairing...


  // 2. Build a Shape(name) constructor with a describe() method on the prototype.
// Then build Circle(name, radius) that inherits from Shape and adds an area() method.
// Test with a Circle of name "C1" and radius 5.

function Shape(name) {
    this.name = name;
  }
  
  Shape.prototype.describe = function () {
    console.log("Shape name is " + this.name);
  };
  
  function Circle(name, radius) {
    Shape.call(this, name);
  
    this.radius = radius;
  }
  
  Circle.prototype = Object.create(Shape.prototype);
  
  Circle.prototype.constructor = Circle;
  
  Circle.prototype.area = function () {
    console.log(Math.PI * this.radius * this.radius);
  };
  
  const c1 = new Circle("C1", 5);
  
  c1.describe(); // Shape name is C1
  c1.area(); // 78.53981633974483


  // 3. Take any built-in prototype (e.g. String.prototype) and inspect it in the console.
// Find five methods you didn't know about.
// Document one with a code example.

console.log(String.prototype);

// Some less commonly noticed String methods:
//
// 1. at()
// 2. padStart()
// 3. padEnd()
// 4. matchAll()
// 5. normalize()

// Example using at()

const str = "JavaScript";

console.log(str.at(2)); // v
console.log(str.at(-1)); // t


// 4. Write a function chainOf(obj) that returns an array of every prototype
// in obj's chain, ending at the prototype just before null.

function chainOf(obj) {
    const chain = [];
  
    let current = Object.getPrototypeOf(obj);
  
    while (current !== null) {
      chain.push(current);
  
      current = Object.getPrototypeOf(current);
    }
  
    return chain;
  }
  
  const arr = [1, 2, 3];
  
  console.log(chainOf(arr));
  
  /*
  Output:
  
  [
    Array.prototype,
    Object.prototype
  ]
  */

;(function showHomeworkSourceOnPage() {
  if (typeof document === "undefined" || !__day16HomeworkScriptUrl) return;

  fetch(__day16HomeworkScriptUrl)
    .then(function (res) {
      if (!res.ok) throw new Error(res.status + " " + res.statusText);
      return res.text();
    })
    .then(function (text) {
      var el = document.querySelector("#homework-source-full");
      if (el) el.textContent = text;
    })
    .catch(function () {
      var el = document.querySelector("#homework-source-full");
      if (el) {
        el.textContent =
          "Could not load homework.js for display. Open this site over http:// (not file://) if fetch is blocked.";
      }
    });
})();
