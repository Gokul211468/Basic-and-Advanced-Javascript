// Day 8 - Objects: Code Snippets

const topic1Snippet = `let person = {
  name: "Aarav",
  age: 25,
  city: "Mumbai",
  email: "aarav@example.com"
};

console.log(person.name);      // "Aarav"
console.log(person["age"]);    // 25`;

const topic2Snippet = `let student = {
  name: "Priya",
  grade: 10
};

student.age = 16;           // Add property
student.grade = 11;         // Update property
delete student.grade;       // Remove property

console.log(student);`;

const topic3Snippet = `let calculator = {
  num1: 10,
  num2: 5,
  add: function() {
    return this.num1 + this.num2;
  },
  multiply: function() {
    return this.num1 * this.num2;
  }
};

console.log(calculator.add());      // 15
console.log(calculator.multiply()); // 50`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 8: Objects ===");

const u = { name: "Priya" };
console.log(u.name);

const f = "name";
console.log(u[f]);

const user = { name: "Riya", age: 23, city: "Jaipur", email: "r@x.in" };
const { name, age } = user;
console.log(name, age);

const { name: userName, city } = user;
console.log(userName, city);

const { phone = "N/A" } = user;
console.log(phone);

const greet = ({ name, age }) => `Hi ${name}, age ${age}`;
console.log(greet(user));

const user1 = { name: "Anaya", age: 21, city: "Jaipur" };
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));