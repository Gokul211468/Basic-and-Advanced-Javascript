// Task 1: Basic try-catch
let divideAInput = document.querySelector("#divide-a");
let divideBInput = document.querySelector("#divide-b");
let divideBtn = document.querySelector("#divide-btn");
let divideOutput = document.querySelector("#divide-output");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

divideBtn.addEventListener("click", function() {
  try {
    let a = Number(divideAInput.value);
    let b = Number(divideBInput.value);
    let result = divide(a, b);
    divideOutput.innerHTML = `<span style='color: green;'>✓ Result: ${a} ÷ ${b} = ${result}</span>`;
    console.log("Result:", result);
  } catch (e) {
    divideOutput.innerHTML = `<span style='color: red;'>✗ Error: ${e.message}</span>`;
    console.log("Error:", e.message);
  }
});


// Task 2: Validate Input
let userNameInput = document.querySelector("#user-name");
let userEmailInput = document.querySelector("#user-email");
let validateUserBtn = document.querySelector("#validate-user");
let userOutput = document.querySelector("#user-output");

function processUser(data) {
  try {
    if (!data) throw new Error("Data is required");
    if (!data.name) throw new Error("Name is required");
    if (!data.email) throw new Error("Email is required");
    
    console.log("User valid:", data.name);
    return `User valid: ${data.name}`;
  } catch (error) {
    console.log("Validation error:", error.message);
    throw error;
  }
}

validateUserBtn.addEventListener("click", function() {
  try {
    let userData = {
      name: userNameInput.value,
      email: userEmailInput.value
    };
    let result = processUser(userData);
    userOutput.innerHTML = `<span style='color: green;'>✓ ${result}</span>`;
  } catch (error) {
    userOutput.innerHTML = `<span style='color: red;'>✗ ${error.message}</span>`;
  }
});


// Task 3: Parse JSON Safely
let jsonInput = document.querySelector("#json-input");
let parseJsonBtn = document.querySelector("#parse-json");
let jsonOutput = document.querySelector("#json-output");

parseJsonBtn.addEventListener("click", function() {
  try {
    let jsonString = jsonInput.value;
    let data = JSON.parse(jsonString);
    jsonOutput.innerHTML = `<span style='color: green;'>✓ Parsed: ${JSON.stringify(data)}</span>`;
    console.log(data);
  } catch (error) {
    jsonOutput.innerHTML = `<span style='color: red;'>✗ Invalid JSON: ${error.message}</span>`;
    console.log("Invalid JSON:", error.message);
  }
});
