// 1 Functions
//Function declared in a varible'
// someFunction()
// You cant do this in varable function

const someFunction = function () {
  console.log("Hello World");
};

//Normal function
anotherFunction();
function anotherFunction() {
  console.log("hello world");
}

// 2 Clicking event

const button = document.querySelector(".btn");
console.log(button);

// Event eventlistener click

// way 1
//variable declared function
const clickButton1 = function () {
  console.log("Hello, you clicked the button");
};

button.addEventListener("click", clickButton1);

// way 2
//Using an anonymous function
button.addEventListener("click", function () {
  console.log("You clicked the button");
});

// way 3
//Function declared before using it, you could use it before it is declared,
//but it is cleaner to declare it first
function clickButton() {
  console.log("You clicked the button 1");
}

button.addEventListener("click", clickButton);

//onclick
button.onclick = function () {
  console.log("clicked using onclick");
};

button.onclick = function (event) {
  console.log(event.target.value);
  console.log(this.value);
};

//3 Key press
//onKeyDown: The event triggers on press down
//onKeyUp: The event triggers on realease of key, Nobody use this
//onKeyPress, nobody use this

const myFirstNameInput = document.querySelector("#firstName");
// console.log(myFirstNameInput);
const handleKeyPress = function () {
  console.log("key is pressed");
  //logs what is being written in input
  console.log(this.value);
  console.log(event.target.value);
};

myFirstNameInput.addEventListener("keydown", handleKeyPress);

const petButton = document.querySelector(".pet-btn");

const handleMouseOver = function (event) {
  console.log(event.target.dataset.animal);
  event.target.style.background = "red";
};

function handleMouseOut(event) {
  event.target.style.background = "blue";
}

petButton.addEventListener("mouseout", handleMouseOut);
petButton.addEventListener("mouseover", handleMouseOver);
