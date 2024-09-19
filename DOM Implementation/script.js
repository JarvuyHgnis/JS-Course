// alert("jaldi khatm kar!");
// to access an element using it's id
let heading1 = document.getElementById("heading1");
console.dir(heading1);
// using it's class
let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2);
// using it's tagname
let paras = document.getElementsByTagName("p");
console.dir(paras);
// query selector
let firstElement = document.querySelector("p");
console.dir(firstElement);
let allElements = document.querySelectorAll("p"); // returns a nodelist
console.dir(allElements);
allElements = document.querySelector("#heading1");
console.dir(allElements);
allElements = document.querySelectorAll(".heading2");
console.dir(allElements);

// tagName : returns tag for element nodes
console.log(heading1.tagName);
// Read about Parent, Child and Siblings and about firstChild and lasthild of the node(element) tree
// innerText : returns the text content of the element and all its children
let div = document.querySelector("div");
console.log(div.innerText);
// innerHTML : returns the plain text or HTMl contents int the element
console.log(div.innerHTML);
// textContent : returns textual content even for hidden elements
let ele = document.getElementsByClassName("heading2");
console.log(ele.innerText);

// DOM Part 2
// attributes
// access
console.log(div.getAttribute("id"));
console.log(div.getAttribute("name"));
let att = document.getElementById("box");
// change
att.setAttribute("name","divName");
console.log(div.getAttribute("name"));
div.style.backgroundColor = "azure";
div.style.fontSize = "2vh";
// new
let newBtn = document.createElement("button"); // creating
newBtn.innerText = "click me!";
// div.append(newBtn); // adds at the end of the node and inside
// div.prepend(newBtn); // adds at start of the node and inside
// div.before(newBtn); // before a node and outside
div.after(newBtn); // adds after the node and outside
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>This is dynamically done</i>";
document.getElementById("heading1").after(newHeading);
// delete/remove
newHeading.remove();
// read about appendChild() and removeChild()

