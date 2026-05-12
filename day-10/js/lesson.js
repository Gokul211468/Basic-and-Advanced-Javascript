// Day 10 - DOM Basics: Code Snippets

const topic1Snippet = `// Select by ID
let elem = document.getElementById("myId");

// Select by class
let elements = document.querySelectorAll(".myClass");

// Select by tag
let paragraphs = document.getElementsByTagName("p");

// Modern way
let first = document.querySelector("#header");
let all = document.querySelectorAll(".box");`;

const topic2Snippet = `let heading = document.getElementById("title");

// Change text
heading.textContent = "New Title";

// Change HTML
heading.innerHTML = "<span>Formatted Title</span>";

// Change attributes
heading.setAttribute("class", "highlight");
heading.id = "newId";`;

const topic3Snippet = `let box = document.querySelector(".box");

// Inline styles
box.style.backgroundColor = "blue";
box.style.padding = "20px";
box.style.borderRadius = "8px";

// Add/remove classes
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// DEMO 1: Selection
let selectDemoBtn = document.querySelector("#select-demo");

selectDemoBtn.addEventListener("click", function() {
  let elem = document.getElementById("demo-selector");
  let elements = document.querySelectorAll(".demo-class");
  let paragraphs = document.querySelectorAll("p");

  console.log("=== Selection Demo ===");
  console.log("By ID (#demo-selector):", elem);
  console.log("By class (.demo-class):", elements);
  console.log("Number of .demo-class elements:", elements.length);
  console.log("All paragraphs:", paragraphs.length);
  
  selectDemoBtn.textContent = "Check console (F12)";
});


// DEMO 2: Modifying Content
let modifyDemoBtn = document.querySelector("#modify-demo");

modifyDemoBtn.addEventListener("click", function() {
  let heading = document.querySelector("#demo-title h4");
  
  if (heading.textContent === "Original Title") {
    heading.textContent = "Title Changed with textContent!";
    modifyDemoBtn.textContent = "Click again to change HTML";
  } else if (heading.textContent === "Title Changed with textContent!") {
    heading.innerHTML = "Changed with <strong>innerHTML</strong> - now bold!";
    modifyDemoBtn.textContent = "Reset";
  } else {
    heading.textContent = "Original Title";
    modifyDemoBtn.textContent = "Modify Content Demo";
  }
});


// DEMO 3: Changing Styles
let styleDemoBtn = document.querySelector("#style-demo");
let styleState = 0;

styleDemoBtn.addEventListener("click", function() {
  let boxes = document.querySelectorAll(".demo-box");
  
  styleState++;
  
  boxes.forEach(function(box) {
    if (styleState === 1) {
      box.style.backgroundColor = "#1976D2";
      box.style.color = "white";
      box.style.padding = "30px";
      box.style.borderRadius = "12px";
    } else if (styleState === 2) {
      box.style.backgroundColor = "#4CAF50";
      box.style.transform = "scale(1.05)";
      box.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    } else {
      box.style.backgroundColor = "#E8F5E9";
      box.style.color = "black";
      box.style.padding = "15px";
      box.style.transform = "scale(1)";
      box.style.boxShadow = "none";
      styleState = 0;
    }
  });
});