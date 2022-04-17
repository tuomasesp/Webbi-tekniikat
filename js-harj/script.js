function q_(selector) { return document.querySelector(selector);}


// a
let content = document.querySelector("#content");
console.log(content.tagName);

// b
let basic = document.querySelector(".basic");
console.log(basic.tagName);

// c
let allLi = document.querySelectorAll("li")

for (elem of allLi) {
    console.log(elem.textContent);
}

// d
let allBodyDesc = document.querySelectorAll("body *");

for (elem of allBodyDesc) {
    console.log(elem.nodeName);
}

// e
let peesUnderArticle = document.querySelectorAll("article p");

for (elem of peesUnderArticle) {
    console.log(elem.textContent);
}

// f
let john = "John Doe";
for (elem of allLi) {
    elem.textContent=john;
}