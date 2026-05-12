// Day 9 - Modern Syntax
// Homework

// Rest parameters in functions
function joinNames(separator, ...names) {
  return names.join(separator);
}

console.log(joinNames(", ", "Priya", "Aarav", "Riya"));
console.log(joinNames(" - ", "Alice", "Bob", "Charlie"));

// Merging objects with spread
let userDefaults = { theme: "light", fontSize: 14, lang: "en" };
let userSettings = { theme: "dark", fontSize: 18 };
let final = { ...userDefaults, ...userSettings };
console.log("Final settings: ", final);

// Nested destructuring
let student = {
  id: 101,
  name: "Gokul",
  grades: {
    math: 95,
    english: 88
  }
};

let { name, grades: { math } } = student;
console.log(`${name} scored ${math} in math`);
