// Day 12 - Error Handling: Code Snippets

const topic1Snippet = `try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("Cleanup code always runs");
}`;

const topic2Snippet = `function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new Error("Invalid age!");
  }
  return "Valid age";
}

try {
  console.log(validateAge(200));
} catch (e) {
  console.log("Caught error:", e.message);
}`;

const topic3Snippet = `try {
  // ReferenceError
  console.log(undefinedVariable);
  
  // TypeError
  let obj = null;
  obj.method();
  
  // SyntaxError (detected at parse time)
  // eval("let x =");  
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Variable not defined");
  } else if (error instanceof TypeError) {
    console.log("Type error");
  } else {
    console.log("Unknown error");
  }
}`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// DEMO: try-catch Block
let tryCatchBtn = document.querySelector("#try-catch-demo");
let tryCatchOutput = document.querySelector("#try-catch-output");

tryCatchBtn.addEventListener("click", function() {
  try {
    let result = Math.sqrt(-1);
    console.log("Result:", result);
    tryCatchOutput.innerHTML = "✓ No error: Result is " + result;
  } catch (error) {
    tryCatchOutput.innerHTML = "✗ Error caught: " + error.message;
  } finally {
    console.log("Cleanup code always runs");
  }
});


// DEMO: Throwing Errors
let ageInput = document.querySelector("#age-input");
let validateAgeBtn = document.querySelector("#validate-age");
let ageOutput = document.querySelector("#age-output");

function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new Error("Invalid age! Must be between 0 and 150");
  }
  return "Valid age";
}

validateAgeBtn.addEventListener("click", function() {
  try {
    let age = Number(ageInput.value);
    console.log(validateAge(age));
    ageOutput.innerHTML = "<span style='color: green;'>✓ " + validateAge(age) + "</span>";
  } catch (e) {
    console.log("Caught error:", e.message);
    ageOutput.innerHTML = "<span style='color: red;'>✗ " + e.message + "</span>";
  }
});
