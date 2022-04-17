let ul = document.querySelector("#days");

// let fChild = ul.lastElementChild;

// console.log(fChild.nodeName);
// console.log(fChild.textContent);
// let liElements = ul.querySelectorAll();

// ul.innerHTML="<li>muok</li>" 

let li = document.createElement("li");
li.textContent="Lauantai";
// li = document.createTextNode("Termostaatti");
ul.appendChild(li);

// li.textContent = "Sunnuntai";

let special = ul.querySelector(".special");
let n = document.createElement("li");
n.textContent = "Pikkulauantai"
ul.insertBefore(n, special.nextElementSibling);

special.remove();