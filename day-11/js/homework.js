// Exercise 1: Form Validation
let loginForm = document.querySelector("#login-form");
let formResult = document.querySelector("#form-result");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let name = document.querySelector("#form-name").value;
  let email = document.querySelector("#form-email").value;
  
  if (name === "" || email === "") {
    formResult.innerHTML = "<span style='color: red;'>❌ All fields required!</span>";
    console.log("All fields required!");
  } else {
    formResult.innerHTML = "<span style='color: green;'>✓ Form valid, submitted successfully!</span>";
    console.log("Form valid, submitting...");
  }
});


// Exercise 2: Dynamic Event Listeners
let items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", function() {
    console.log("Clicked:", this.textContent);
    this.style.backgroundColor = "#C8E6C9";
  });
  
  item.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.05)";
    this.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
  });
  
  item.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
  });
});


// Exercise 3: Keyboard Events
let keyDisplay = document.querySelector("#key-display");

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    keyDisplay.textContent = "⏎ Enter key pressed!";
    console.log("Enter pressed");
  } else if (e.key === "Escape") {
    keyDisplay.textContent = "⎋ Escape key pressed!";
    console.log("Escape pressed");
  } else {
    keyDisplay.textContent = "🔑 Key pressed: " + e.key;
    console.log("Pressed:", e.key);
  }
});