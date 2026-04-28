// console.log(10 + 3);
// console.log(10 - 3);
// console.log(10 * 3);
// console.log(10 / 3);
// console.log(10 % 3);
// console.log(2 ** 8);

// let x = 10;
// console.log(x++);
// console.log(x);



// let x = 10;

// console.log(x += 5);
// console.log(x -= 3);
// console.log(x *= 2);
// console.log(x /= 4);

// const x = 5;
// const y = "5"
// console.log(x == y);
// console.log(x === y);

// const a = 0;
// const b = false;
// console.log(a == b);
// console.log(a === b);

// const c = null;
// let d;
// console.log(c == d);

// const firstValue = true;
// const secondValue = false;

// console.log(firstValue && secondValue); 

// const firstOperand = 5;
// const secondOperand = 2;
// const thirdOperand = 10;
// const fourthOperand = 20;

// console.log(firstOperand > secondOperand && thirdOperand < fourthOperand); 

// const boolValue = true;
// console.log(!boolValue);


// const age = 24;
// const status = age >= 18 ? "adult" : "minor"; 
// console.log(status);

// const score = 70
// const result = score >= 50 ? "pass" : "fail";
// console.log(result);

const order = {
  id: 123,
  customer: {
    name: "Alice",
    address: {
      city: "New York"
    }
  }
};
 

console.log(order?.customer?.address?.city);    
console.log(order?.customer?.phone?.number);     
console.log(order?.shipping?.address?.street);   
 

const result = order?.customer?.getName?.();     

const userAge = 0;
const ageToShow = userAge ?? "Not provided";  
const ageWithOr = userAge || "Not provided";  

console.log(ageToShow);
console.log(ageWithOr);
 

const config = {
  retryCount: 0,      
  timeout: null,     
  enableLogging: false 
};
 
const retries = config.retryCount ?? 3;      
const timeout = config.timeout ?? 5000;      
const logging = config.enableLogging ?? true; 

console.log(retries);
console.log(timeout);
console.log(logging);


