// Exercise 1: Dynamic List
// Click button to add items dynamically to the list

let createListBtn = document.querySelector("#create-list-btn");

createListBtn.addEventListener("click", function() {
  let list = document.querySelector("#dynamic-list");
  
  // Clear existing items
  list.innerHTML = "";
  
  let items = ["Learn JavaScript", "Build Projects", "Master DOM"];
  
  items.forEach(function(item) {
    let li = document.createElement("li");
    li.textContent = item;
    li.style.padding = "8px";
    li.style.borderBottom = "1px solid #ddd";
    list.appendChild(li);
  });
  
  createListBtn.textContent = "Items Created!";
  createListBtn.disabled = true;
});


// Exercise 2: Toggle Visibility
// Click button to show/hide the box

let toggleBtn = document.querySelector("#toggle-btn");
let box = document.querySelector(".box");
let isVisible = true;

toggleBtn.addEventListener("click", function() {
  if (isVisible) {
    box.style.display = "none";
    toggleBtn.textContent = "Show Box";
    isVisible = false;
  } else {
    box.style.display = "block";
    toggleBtn.textContent = "Toggle Box Visibility";
    isVisible = true;
  }
});


// Exercise 3: Update Multiple Elements
// Click "Apply Styles" button to style all other buttons

let styleAllBtn = document.querySelector("#style-all-btn");
let styleMeButtons = document.querySelectorAll(".style-me");

styleAllBtn.addEventListener("click", function() {
  styleMeButtons.forEach(function(btn) {
    btn.style.backgroundColor = "#007bff";
    btn.style.color = "white";
    btn.style.padding = "10px 20px";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "14px";
  });
  
  styleAllBtn.textContent = "Styles Applied!";
  styleAllBtn.disabled = true;
});