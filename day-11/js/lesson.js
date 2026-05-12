// Day 11 - Events: Code Snippets

const topic1Snippet = `let button = document.querySelector("#myButton");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});

// Or with arrow function
button.addEventListener("click", () => {
  console.log("Clicked!");
});`;

const topic2Snippet = `let btn = document.querySelector("button");

btn.addEventListener("click", function(e) {
  console.log(e.type);           // "click"
  console.log(e.target);         // the button element
  console.log(e.target.textContent);  // button text
  console.log(e.clientX, e.clientY);  // mouse coordinates
});`;

const topic3Snippet = `// Input events
let input = document.querySelector("input");
input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log("Pressed:", e.key);
});

// Form submission
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();  // Stop page reload
  console.log("Form submitted");
});`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// DEMO: addEventListener with click counter
let clickCount = 0;
let demoBtn = document.querySelector("#demo-btn");
let clickLog = document.querySelector("#click-log");

demoBtn.addEventListener("click", function() {
  clickCount++;
  clickLog.textContent = "Clicks: " + clickCount;
  console.log("Button clicked!");
});

// Multiple listeners
demoBtn.addEventListener("click", () => {
  console.log("Second handler also fires");
});


// DEMO: Event Object
let eventInfoBtn = document.querySelector("#event-info-btn");
let eventDetails = document.querySelector("#event-details");

eventInfoBtn.addEventListener("click", (e) => {
  eventDetails.innerHTML = `
    <strong>Event Type:</strong> ${e.type}<br>
    <strong>Target:</strong> ${e.target.textContent}<br>
    <strong>Position:</strong> X: ${e.clientX}, Y: ${e.clientY}
  `;
  console.log("Event object:", e);
});


// DEMO: Input event
let demoInput = document.querySelector("#demo-input");
let inputOutput = document.querySelector("#input-output");

demoInput.addEventListener("input", (e) => {
  inputOutput.textContent = "You typed: " + e.target.value;
  console.log("User typed:", e.target.value);
});

// Keyboard event
document.addEventListener("keydown", (e) => {
  console.log("Pressed:", e.key);
});
