let firstLi = document.querySelector("li");
let allLi = document.querySelectorAll("li");

// let x = document.querySelectorAll("#days>li")

// console.log(firstLi.textContent);

// firstLi.textContent="Terve";
// firstLi.textContent="<h1>Moro</h1>";
// firstLi.innerHTML = "<h1>Moro</h1>"; Ei käytetä sisällön lisäämiseen!
// firstLi.innerText="Jee jee jee";

/* for (let i = 0; i < allLi.length; index++) {
    
    const element = array[i];
    console.log(element.textContent);
} 
*/

let i= 10;
for (elem of allLi) {
    elem.textContent = i--;
}