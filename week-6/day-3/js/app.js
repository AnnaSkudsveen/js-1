let duck = {
  id: 1,
  name: "Tim",
  habitat: "Swamp",
  height: 25,
  diet: "Green stuff",
};

// Not deconstruted code
let duckName = duck.name;
let duckHabitat = duck.habitat;
let duckHeight = duck.height;

console.log(duckName);
console.log(duckHeight);
console.log(duckHabitat);

//Deconstructed code, this does the same as the lines above in one line.

let { name, habitat, height } = duck;

console.log(name);
console.log(habitat);
console.log(height);

//You could do the same to Arrays
//Its not as common, as you have array Methods that is more effective.
let array = [1, 2, 3, 4];

//not deconstructed
let num1 = array[0];
let num2 = array[1];

//Deconstructed
let [num1Des, num2Des] = array;

//Rest
//You could only pass two numbers in this function
//To be able to add more you would have to write a new code
//that can take 3 paramaters
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 6));

// ...numbers add the paramater to an array
function sumWithMultipleNumbers(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }
  return total;
}

//This should be able to take as many parameters as it would like
//It would also take anything else, that could be a problem
console.log(sumWithMultipleNumbers(1, 4, 6, 7, 31));

//Spread
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// ...nums spreads out the array
//So with sumWithMultipleArrays it wil sum all the
//numbers in the nums array
console.log(sumWithMultipleNumbers(...nums));

//You could also use it like this for example
let newDuck = {
  ...duck,
  dangerous: false,
};

//The most common way of using it however is to
//upodate objects without updating the original array
let copyOfNums = nums;

//This is just a copy
console.log(nums); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(copyOfNums); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

//If you push something to one, it will be pushed to the original
copyOfNums.push(2000);

console.log(nums); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 2000]
console.log(copyOfNums); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 2000]

let copyOfNumsSpread = [...nums];

//This is also just a copy, in the same way as above
console.log(nums); //(9) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(copyOfNumsSpread); //(9) [1, 2, 3, 4, 5, 6, 7, 8]

//However if you push to the new, it will only be pushed to the copy
copyOfNumsSpread.push(4000);

console.log(nums); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 2000]
console.log(copyOfNumsSpread); //(10) [1, 2, 3, 4, 5, 6, 7, 8, 2000, 4000]
