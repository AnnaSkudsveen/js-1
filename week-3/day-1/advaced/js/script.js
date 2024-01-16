// Create an empty user object
let user = {};
//Add name property with the value Jonas
user.name = "Jonas";
//Add a surname property with thevalue of The Great
user.surname = "The Great";
//Change the name to "Helene"
user.name = "Helene";
//Remove the name property fro the object
delete user.name;

// Task 2
//Create a function isEmpty(obj) that returns true if the object
//has no properties and false if objects hat at least one property
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

const objectEmpty = isEmpty(user);
console.log("is my object empty: ", objectEmpty);

//Homework
//Given an array of numbers []
// 1) find the maximum and minimum value of the array
// 2) Write all positive and even numbers into another array
//Display the results on screen

let answer = document.querySelector(".answer");

const numbers = [1, 2, 31, 24, -67, 5, 3, 555, 79, -4, 21, 33, 89, -90];

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers);

const lengthOfNumbers = numbers.length;
console.log(lengthOfNumbers);

const smallestNumber = sortedNumbers[0];

const largestNumber = sortedNumbers[lengthOfNumbers - 1];

console.log(largestNumber);
console.log(smallestNumber);

let even = [];

let odd = [];

for (let i = 0; i < lengthOfNumbers; i++) {
  //   console.log(sortedNumbers[i]);
  if (sortedNumbers[i] % 2 === 0) {
    // console.log(sortedNumbers[i], "even");
    even.push(sortedNumbers[i]);
  } else {
    // console.log(sortedNumbers[i], "odd");
    odd.push(sortedNumbers[i]);
  }
}

console.log(even);
console.log(odd);
console.log(answer);

answer.innerHTML = `
    <h2>Answer<h2>
    <p>1) Smallest number: ${smallestNumber}</p>
    <p>Biggest number: ${largestNumber}</p>
    <p>2) Even: ${even}</p>
    <p>Odd: ${odd}</p>
    `;
