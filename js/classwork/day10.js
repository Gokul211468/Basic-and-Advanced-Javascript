
title.style.color = "red";
title.style.backgroundColor = "yellow";   
title.style.fontSize = "32px";

const newHeading = document.createElement("h1");
newHeading.textContent = "Gokul";

const divBlock = document.querySelector("#title");
divBlock.appendChild(newHeading);