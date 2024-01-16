export function addThreeNumbers(num1, num2, num3) {
  return num1 + num2 + num3;
}

//You could console log it, but that does nothing in the dom.
addThreeNumbers(10, 2, 30);

//The result of the function inside the let variable:
let Sum = addThreeNumbers(10, 2, 30);

//Do the same for multiplication:
function multiplyThreeNumbers(num1, num2, num3) {
  return num1 * num2 * num3;
}

let resultOfSum = multiplyThreeNumbers(2, 5, 7);
console.log(resultOfSum);

// When Color button is clicked Then the background changes to green AND the text color changes to orange
//When the text button is clckes, Then the text changes to Happy Birthday

const body = document.querySelector("body");

const heading = document.querySelector("h1");

const colorButton = document.querySelector(".color");
console.log(colorButton);

const headingButton = document.querySelector("button");

const randomColor = ["red", "blue", "green", "orange", "pink", "lightgreen"];

//MY ANSWER
// headingButton.addEventListener("click", function() {
//     heading.innerText = `Happy Birthday Hesh!`
// });

//HESH ANSWER
function changeHeading() {
  heading.innerHTML = "Happy Birthday Hesh";
}

headingButton.onclick = changeHeading;

//MY FIRST ANSWER
// colorButton.addEventListener("click", function(){
//     body.style.backgroundColor = "Green";
//     heading.style.color = "orange";
// });

//MY SECOND ANSWER
function changeColor() {
  body.style.backgroundColor = "Green";
  heading.style.color = "orange";
}

colorButton.onclick = changeColor;

//Functions inside objects
let soundButton = document.querySelector(".sound");

const pet = {
  type: "cat",
  name: "Kitty",
  age: 10,
  isFriendly: false,
  Sound: function () {
    console.log("mjaumjau");
  },
};

// pet.Sound();

soundButton.onclick = pet.Sound;
