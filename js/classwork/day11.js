const btn = document.querySelector("#my-btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});

// You can attach multiple listeners — all run
btn.addEventListener("click", () => {
  console.log("Second handler also fires");
});

btn.addEventListener("click", (e) => {
  console.log(e.type);            // "click"
  console.log(e.target);          // the <button> element
  console.log(e.target.textContent);   // its text
  console.log(e.clientX, e.clientY);   // mouse coordinates
});


// Input — e.target.value is what the user typed
const input = document.querySelector("#name-input");
input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

// Keyboard — e.key is which key
document.addEventListener("keydown", (e) => {
  console.log("Pressed:", e.key);   // "a", "Enter", "ArrowUp"
});


const form = document.querySelector("#login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();     // stop the page reload
  console.log("Custom form handling here");
  // ... validate, send via fetch, etc.
});

// WITHOUT delegation — one listener per item, repeated work
// document.querySelectorAll("#todo-list li").forEach(li => {
//   li.addEventListener("click", () => {
//     li.classList.toggle("done");
//   });
// });


const list = document.querySelector("#todo-list");

list.addEventListener("click", (e) => {
  // Was the click on an <li>?
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
    console.log("Toggled item", e.target.dataset.id);
  }
});

// Now even items added LATER work — no extra wiring
const newLi = document.createElement("li");
newLi.textContent = "Brand new task";
newLi.dataset.id = "4";
list.appendChild(newLi); 
