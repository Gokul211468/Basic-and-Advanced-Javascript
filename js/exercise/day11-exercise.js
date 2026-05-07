//Task 1 Click Counter

const counterButton = document.querySelector("#counter-btn")
const countSpan = document.querySelector("#count")

let count = 0;
function incrementCount(){
    count++;
    countSpan.textContent = count;
    if(count >+ 10){
        counterButton.textContent = "Stop Clicking"
    }
}

counterButton.addEventListener("click",incrementCount);


//Task 2 Live Input Preview

liveInput = document.querySelector("#live-input")
preview = document.querySelector("#preview")
preview.textContent = "start typing"

liveInput.addEventListener("input",(e)=>{
    if (e.target.value == ""){
        preview.textContent = "start typing"
    }
    else{
        preview.textContent = e.target.value
    }
})


//Task 3 Form preventDefault

const regForm = document.querySelector("#reg-form")
const nameField = document.querySelector("#name-field")
const para = document.querySelector("#welcome")

regForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = nameField.value

    if(name.trim() === ""){
        para.textContent = "please enter your name"
    }

    else{
        para.textContent = `welcome ${name}!`
    }
});

//bonus task
const todoList = document.querySelector("#todo-list")
todoList.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done")
    }
})

const li = document.createElement("li")
li.textContent = "New Task"
todoList.appendChild(li)