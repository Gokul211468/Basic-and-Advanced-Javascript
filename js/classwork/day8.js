const u = { name: "Priya" };
console.log(u.name);

const f = "name";
console.log(u[f])

console.log(u.email);


const user = { name: "Riya", age: 23, city: "Jaipur", email: "r@x.in" };

// Without destructuring — verbose
const name1 = user.name;
const age1 = user.age;

// WITH destructuring — clean
const { name, age } = user;
console.log(name, age);   // Riya 23

// Rename — pull `name` but call it `userName`
const { name: userName, city } = user;
console.log(userName, city);   // Riya Jaipur

// Default values — when property is missing
const { phone = "N/A" } = user;
console.log(phone);            // "N/A"

// Use it in function parameters
const greet = ({ name, age }) => `Hi ${name}, age ${age}`;
console.log(greet(user));      // Hi Riya, age 23



const user1 = { name: "Anaya", age: 21, city: "Jaipur" };

console.log(Object.keys(user1));     // ["name", "age", "city"]
console.log(Object.values(user1));   // ["Anaya", 21, "Jaipur"]
console.log(Object.entries(user1));  // [["name","Anaya"], ["age",21], ["city","Jaipur"]]

// Combine with array methods — clean!
Object.entries(user1).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});