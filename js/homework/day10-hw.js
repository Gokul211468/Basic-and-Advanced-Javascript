const p = document.createElement("p");
document.body.appendChild(p);

p.textContent = "This is plain text";

p.innerHTML = "This is <strong>bold</strong> text";

p.textContent = "Back to normal text";



const list = document.querySelectorAll("#list li");
list.forEach((item,index)=> {
    if(index % 2 == 0){
        item.classList.add("even");
    }
});


//Create a button programmatically with createElement, 
// set its text to "Click me", give it an ID and a class, append it to body.

const button = document.createElement("button");
button.textContent = "Click me"
button.id = "button"
button.classList.add("button")

document.body.appendChild(button)


const products = [
    { name: "Phone", price: 20000 },
    { name: "Laptop", price: 70000 },
    { name: "Headphones", price: 2000 }
];

// container to hold cards
const container = document.createElement("div");
container.id = "cards";
document.body.appendChild(container);

// loop through products
products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `Price: ₹${product.price}`;

    card.appendChild(title);
    card.appendChild(price);

    container.appendChild(card);
});