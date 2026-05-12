// Exercise 1: Safe Array Access
let arrayIndexInput = document.querySelector("#array-index");
let accessArrayBtn = document.querySelector("#access-array");
let arrayOutput = document.querySelector("#array-output");

const testArray = [10, 20, 30];

function getArrayElement(arr, index) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error("First argument must be an array");
    }
    if (index < 0 || index >= arr.length) {
      throw new Error("Index out of bounds");
    }
    return arr[index];
  } catch (e) {
    console.log("Error:", e.message);
    throw e;
  }
}

accessArrayBtn.addEventListener("click", function() {
  try {
    let index = Number(arrayIndexInput.value);
    let result = getArrayElement(testArray, index);
    arrayOutput.innerHTML = `<span style='color: green;'>✓ Element at index ${index}: ${result}</span>`;
  } catch (e) {
    arrayOutput.innerHTML = `<span style='color: red;'>✗ Error: ${e.message}</span>`;
  }
});
