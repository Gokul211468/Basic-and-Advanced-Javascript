
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

const addNum = (a, b) => a + b;
console.log(addNum(3,5));

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


