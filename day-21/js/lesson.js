// Topic 1 Shallow vs Deep Clone

const original = {
  name: "Priya",
  address: { city: "Jaipur", pin: 302001 },
  hobbies: ["reading", "trekking"],
};

// Shallow clones — three common ways, all behave the same
const a = { ...original };               // spread
const b = Object.assign({}, original);   // Object.assign
const c = JSON.parse(JSON.stringify(original));  // deep, but only for plain JSON data!

// Mutate the nested address on the shallow clone
a.address.city = "Mumbai";

console.log(original.address.city);      // "Mumbai"  ← original ALSO changed!
console.log(a.address === original.address);   // true — same nested object

// JSON deep clone is independent
c.address.city = "Delhi";
console.log(original.address.city);      // still "Mumbai" — c is independent

// But JSON loses Date, undefined, functions, Map, Set, ...
const tricky = { d: new Date(), m: new Map(), u: undefined };
console.log(JSON.parse(JSON.stringify(tricky)));   // { d: "...", m: {} }  ← lost!