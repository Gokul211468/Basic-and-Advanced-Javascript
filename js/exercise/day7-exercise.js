
//Task 1 Cart Manipulation
const cart = ["bread", "milk", "eggs"];

cart.push("butter");
cart.unshift("rice");

console.log(cart);

cart.pop()
console.log(cart);
cart.splice(1, 1);
console.log(cart);

//Task 2 Filter Passing Scores

const scores = [88, 42, 75, 60, 91, 39, 55, 70];
const passing = scores.filter(score => score >= 60);
console.log(passing); 

const firstFail = scores.find(score => score < 60);
console.log(firstFail); 

const allPassing = scores.every(score => score >= 60);
console.log(allPassing); 

const anyAbove90 = scores.some(score => score > 90);
console.log(anyAbove90); 


//Task 3 Map Prices with GST
const prices = [100, 250, 500, 1200, 80];
const withGST = prices.map(price => price * 1.18);

console.log("Original:", prices);
console.log("With GST:", withGST);

const withGSTRounded = withGST.map(price => price.toFixed(2));

console.log(withGSTRounded);

//Bonus: Reduce to Total

const expenses = [250, 800, 120, 50, 1500, 75];
const totalExpense = expenses.reduce((total, expense) => total + expense, 0);
console.log(totalExpense);

const highestExpense = expenses.reduce((max, expense) => expense > max ? expense : max, expenses[0]);
console.log(highestExpense);

const totalExpenseAbove100 = expenses.filter(expense => expense > 100).reduce((total, expense) => total + expense, 0);
console.log(totalExpenseAbove100);

