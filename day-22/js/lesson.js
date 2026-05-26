//Topic 1 Map — Better Keyed Storage

const m = new Map();

m.set("name", "Priya");
m.set(42, "the answer");
m.set(true, "a boolean key");

const userObj = { id: 1 };
m.set(userObj, "value associated with userObj");   // OBJECT as key — Object can't!

console.log(m.get("name"));     // "Priya"
console.log(m.get(userObj));    // "value associated with userObj"
console.log(m.size);            // 4
console.log(m.has(42));         // true
m.delete(42);

// Initialise from an array of pairs
const m2 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(m2.get("a"));       // 1

// Iterate — preserves insertion order
for (const [key, value] of m2) {
  console.log(key, value);
}


//Topic 2 Object ↔ Map Conversion

const obj = { name: "Priya", city: "Jaipur" };

// Object → Map
const map = new Map(Object.entries(obj));
console.log(map.get("name"));    // "Priya"

// Map → Object (keys must be strings/symbols)
const back = Object.fromEntries(map);
console.log(back);                // { name: "Priya", city: "Jaipur" }

// Map iteration helpers
for (const key of map.keys())   console.log("key:", key);
for (const val of map.values()) console.log("val:", val);
for (const [k, v] of map.entries()) console.log(k, "=", v);

map.forEach((value, key) => console.log(key, "=", value));   // value FIRST!



//Topic 3 Set — Unique Values
const s = new Set();

s.add("a");
s.add("b");
s.add("a");                      // duplicate — ignored

console.log(s.size);             // 2
console.log(s.has("a"));         // true
s.delete("b");

// Initialise from an array
const tags = new Set(["js", "react", "js", "node", "react"]);
console.log(tags.size);          // 3   ← duplicates removed

// Most common Set use: deduplicate an array
const arr   = [1, 2, 2, 3, 4, 4, 5];
const uniq  = [...new Set(arr)];
console.log(uniq);               // [1, 2, 3, 4, 5]

// Iterate
for (const v of tags) console.log(v);

// Object identity, not value equality
const set = new Set();
set.add({ id: 1 });
set.add({ id: 1 });              // DIFFERENT object → both kept
console.log(set.size);           // 2