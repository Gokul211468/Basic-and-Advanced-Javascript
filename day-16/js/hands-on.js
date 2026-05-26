
// Task 1 Inspect a Prototype
// Create const arr = [1, 2, 3];
// Use Object.getPrototypeOf(arr) and log it. What is it?
// Now log Object.getPrototypeOf(Object.getPrototypeOf(arr)) . What is it?
// And once more — log the next step. What value ends the chain?
// In a comment, draw the chain.


const arr = [1,2,3];
console.log(Object.getPrototypeOf(arr)) // Array.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr))) // Object.prototype
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr)))) // null

// Prototype Chain:
//
// arr
//  ↓
// Array.prototype
//  ↓
// Object.prototype
//  ↓
// null


// Task 2 Build with Object.create
// Create an object vehicle with method start() { console.log(`${this.name} starting`); }
// Use Object.create(vehicle) to make car and set car.name = "Tata Nexon" .
// Make bike the same way with name = "Royal Enfield" .
// Call start() on both.
// Use hasOwnProperty and in to confirm name is own and start is inherited.


const vehicle = {
    start(){
        console.log(`${this.name} starting`);
    }
}

const car = Object.create(vehicle)
car.name = "Tata Nexon"

const bike = Object.create(vehicle)
bike.name = "Royal Enfield"

car.start()
bike.start()

console.log(car.hasOwnProperty("start"))
console.log("start" in car)

console.log(car.hasOwnProperty("name"))
console.log("name" in car)


// Task 3 Constructor Function Inheritance
// Build a Person(name) constructor that sets this.name = name .
// Add Person.prototype.greet = function () { console.log("Hi, I'm " + this.name); } .
// Build a Student(name, school) constructor that calls Person.call(this, name) and sets
// this.school = school .
// Link Student.prototype to inherit from Person.prototype using Object.create .
// Add Student.prototype.study = function () { console.log(this.name + " studies at " +
// this.school); } .
// Create a new Student("Riya", "IIT Delhi") and call both greet and study .

function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log("Hi, I'm" + this.name)
}

function Student(name, school){
    Person.call(this, name)
    this.school = school;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function(){
    console.log(this.name + "studies at" + this.school)
}

const student = new Student("Riya", "IIT Delhi")
student.greet();
student.study();


// Bonus hasOwnProperty vs in
// Create const dog = Object.create({ species: "Canis" }); dog.name = "Bruno";
// Predict the result of: dog.hasOwnProperty("name") , dog.hasOwnProperty("species") , "name" in
// dog , "species" in dog , "toString" in dog .
// Run all five. Match against your prediction.
// In a comment, write the one-line rule for when to use which.

const dog = Object.create({species: "Canis"});
dog.name = "Bruno";

console.log(dog.hasOwnProperty("name")) //true
console.log(dog.hasOwnProperty("species")) //false
console.log("name" in dog) // true
console.log("species" in dog); // true
console.log("toString" in dog) //true

// hasOwnProperty()
// -> checks ONLY direct properties of the object
// in operator
// -> checks both own properties and inherited properties

;(function showHandsOnSourceOnPage() {
  if (typeof document === "undefined" || !__day16HandsOnScriptUrl) return;

  fetch(__day16HandsOnScriptUrl)
    .then(function (res) {
      if (!res.ok) throw new Error(res.status + " " + res.statusText);
      return res.text();
    })
    .then(function (text) {
      var el = document.querySelector("#hands-on-source-full");
      if (el) el.textContent = text;
    })
    .catch(function () {
      var el = document.querySelector("#hands-on-source-full");
      if (el) {
        el.textContent =
          "Could not load hands-on.js for display. Open this site over http:// (not file://) if fetch is blocked.";
      }
    });
})();
