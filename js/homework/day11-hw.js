const colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener("click", () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});


const username = document.querySelector("#username");
username.addEventListener("input", (e) => {

    if (e.target.value.length < 3) {
        username.style.backgroundColor = "red";
    } else {
        username.style.backgroundColor = "green";
    }

});


const form = document.querySelector("#sum-form");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const sum =
        Number(num1.value) +
        Number(num2.value);
    result.textContent = `Sum: ${sum}`;
});


const itemList = document.querySelector("#item-list");
itemList.addEventListener("click", (e) => {

    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }

});
const newItem = document.createElement("li");
newItem.textContent = "Item 6";
itemList.appendChild(newItem);