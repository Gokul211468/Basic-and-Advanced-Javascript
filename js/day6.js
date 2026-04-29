
function add(a, b) { return a + b; }
console.log(add(5, 3));

function silent() { console.log("hi"); }
const x = silent();
console.log(x);

const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Gokul"));



function add1(a, b){
  return a+b;
}
console.log(add1(3,5))
const add2 = (a, b) => a + b;
console.log(add2(3,5));

function square1(x){
  return x*x;
}
console.log(square1(2));
const square2 = x => x * x;
console.log(square2(2));


function greet1(){
  return "Hello!"
}
console.log(greet1());
const greet2 = () => "Hello!";
console.log(greet2());


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