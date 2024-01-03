// 1. Select the heading h2

//querySelector
//querySelectorAll
//getElementById

const heading2 = document.querySelector("h2");
console.dir(heading2);

// 2. Select element with .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with an ID #list using querySelector

const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementById

const listById = document.getElementById("list");
console.log(listById);  

// 5. select single li item

const listItem = document.querySelector("li");
console.log(listItem);

// 6. select all li items

const listItems = document.querySelectorAll("li");
console.log(listItems);

// select the h1 and change the color to red

const heading1 = document.querySelector("h1");
console.log("before change")
console.dir(heading1);
heading1.style.color = "red";
heading1.style.border = "5px solid green";
heading1.style.padding = "1rem";

// Task: Change background color of heading1 varible

heading1.style.backgroundColor = "lightBlue";

// Select div, add class .container to it

const myDiv = document.querySelector("div");
console.dir(myDiv)

myDiv.classList.add("container")

// Change the heading text 
heading1.innerText = "Hello, World!";

heading1.innerHTML = `<p>Hello alle sammen!</p>`;

//                 0         1        2
const myArray = ["Anna", "Anette", "Siri"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

/* for(let i = 1; i<= 100; i++) {
    console.log(i);
} */

// Aritmetic operators
// + = - * ++

// 10 + 5 = 15
