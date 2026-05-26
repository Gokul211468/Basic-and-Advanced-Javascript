// Task 1 Map vs Object
// Build a Map of products: "pen" → 50, "book" → 200, "bag" → 800.
// Iterate with for...of and log each as "item: ₹price".
// Use .has, .get, .delete, .size.
// Convert it to an Object with Object.fromEntries and back to a Map with new Map(Object.entries(...)).

const products = new Map()

products.set("pen", 50)
products.set("book", 200)
products.set("bag", 800)

for(const [item, value] of products){
    console.log(`${item}: ₹${value}`)
}

console.log(products.has("pen"))
console.log(products.get("pen"))
products.delete("pen")
console.log(products.size)
const obj = Object.fromEntries(products)
console.log(obj)
const map = new Map(Object.entries(obj))
console.log(map)