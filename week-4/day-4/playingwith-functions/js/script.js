// Normal function
function myName(name) {
  console.log("my name is:" + name);
}

myName("Anna");

//Variable function
const showPetName = function (name) {
  console.log("Name of the pet:" + name);
};

showPetName("Milo");

//Fat arrow Function

//Example one:
const myAge = (age) => {
  console.log("my age is:" + age);
};

const showPetNameTwo = (name) => console.log("the pet name is:" + name);

//task:

const calculator = (sum1, sum2) => console.log("sum:", sum1 + sum2);

calculator(3, 6); //sum: 9
