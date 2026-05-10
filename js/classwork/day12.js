//   const data = JSON.parse('{"name":"Priya"');   // missing closing brace
//   console.log(data);


// function parser(){
//     try {
//         const data = JSON.parse('{"name":"Priya"');   // missing closing brace
//         console.log(data);
// }      catch (err) {
//             console.log("Couldn't parse:", err.message);
// }
//     console.log("App keeps running");
// }
 
// parser();


function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
//   console.log(divide("hello","world"));
  console.log(divide(10, 2));    
  console.log(divide(10, 0));    
} catch (err) {
  console.log("Caught:", err.message);
}