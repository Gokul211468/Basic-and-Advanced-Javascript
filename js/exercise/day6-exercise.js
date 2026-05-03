//Task 1 Rectangle Area
function area(length, width) {
  return length * width;
}

console.log(area(5, 10));   
console.log(area(7, 3));   
console.log(area(12, 4));   

const areafn = (length, width) => length * width;

console.log(areafn(5, 10));
console.log(areafn(7, 3));
console.log(areafn(12, 4));


function greetName(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greetName("Priya")); 
console.log(greetName("Aarav")); 
console.log(greetName());         
console.log(greetName(null));  //default parameter only gets triggered for undefined

//Task 3 Temperature Converter
const temperature = (temp) => (temp * 9/5) + 32
console.log(temperature(0));
console.log(temperature(100));
console.log(temperature(37));
console.log(temperature(45));



//Bonus Pure vs Impure

function double(n) {
  return n * 2;
}

console.log(double(2));  
console.log(double(5));  
console.log(double(10)); 

let total = 0;

function addToTotal(n) {
  total += n;   
  return total;
}

console.log(addToTotal(2));  
console.log(addToTotal(5)); 
console.log(addToTotal(10)); 


