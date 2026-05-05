// Task 1 Template Literal Sentence Builder

const item = "Laptop";
const price = 60000;
const tax = 0.18;

const sentence = `The ${item} costs ₹${price} + ₹${price * tax} GST = ₹${price + (price * tax)}.`;

console.log(sentence);

// Task 2 Array + Object Destructuring

const scores = [88, 75, 92, 60, 45];

const [top, second, ...others] = scores;

console.log(top);   
console.log(second);  
console.log(others);  

const user = {
  name: "Anaya",
  age: 21,
  address: {
    city: "Jaipur",
    pincode: "302001"
  }
};

const { name, age: userAge, address: { city } } = user;

console.log(name);     
console.log(userAge); 
console.log(city);     

function joinNames(separator, ...names) {
  return names.join(separator);
}

console.log(joinNames(", ", "Priya", "Aarav", "Riya"));

// Bonus Spread to Merge Settings

const defaults = { theme: "light", lang: "en", notifications: true };
const userPrefs = { theme: "dark", fontSize: 16 };

const merged = { ...defaults, ...userPrefs };

console.log(merged);

function applyPrefs(defaults, prefs) {
  return { ...defaults, ...prefs };
}

console.log(applyPrefs(defaults, userPrefs));