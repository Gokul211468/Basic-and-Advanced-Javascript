// Task 1 Select and Change Text

const title = document.querySelector("#title");

title.textContent = "Hello, Gokul!";   
title.style.color = "crimson";
title.style.fontFamily = "Georgia, serif";


//Task 2 Toggle Dark Theme Class

const themeBtn = document.querySelector("#theme-btn");
function changeTheme(){
    document.body.classList.toggle("dark")
}

//Task 3 Build a List Dynamically

const names = ["Priya", "Aarav", "Riya", "Kabir"];
const nameList = document.querySelector("#names-list")
names.forEach((value,index)=>{
    const li = document.createElement("li")
    li.textContent = `${index+1}. ${value}`
    li.classList.add("name-item")

    nameList.appendChild(li)
})


//Bonus Build a Card

const product = { name: "Laptop", price: 60000, brand: "Dell" };

const card = document.createElement("div")
card.classList.add("card")

const h3 = document.createElement("h3")
const p = document.createElement("p")
const span = document.createElement("span")

h3.textContent = product.name;
p.textContent = product.brand;
span.textContent = `₹ ${product.price}`

card.appendChild(h3)
card.appendChild(p)
card.appendChild(span)

const cards = document.querySelector("#cards");
cards.appendChild(card)


