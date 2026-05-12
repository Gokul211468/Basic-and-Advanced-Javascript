// Task 1: Button Click Handler
let myBtn = document.querySelector("#my-btn");
let clickCounter = document.querySelector("#click-counter");
let taskClicks = 0;

myBtn.addEventListener("click", () => {
  taskClicks++;
  clickCounter.textContent = "Total Clicks: " + taskClicks;
  console.log("Button clicked!");
});

// Multiple listeners
myBtn.addEventListener("click", () => {
  console.log("Second handler also fires");
});


// Task 2: Input Event
let nameInput = document.querySelector("#name-input");
let nameDisplay = document.querySelector("#name-display");

nameInput.addEventListener("input", (e) => {
  nameDisplay.textContent = "You typed: " + e.target.value;
  console.log("User typed:", e.target.value);
});


// Task 3: Event Delegation
let todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    let id = e.target.getAttribute("data-id");
    console.log("Clicked item with id:", id);
    e.target.classList.toggle("done");
    
    // Visual feedback
    if (e.target.style.backgroundColor === "rgb(144, 238, 144)") {
      e.target.style.backgroundColor = "white";
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.backgroundColor = "#90EE90";
      e.target.style.textDecoration = "line-through";
    }
  }
});