//#region
// function doSomething() {
//   console.log("I do something");
//   console.log("I do something");
//   console.log("I do something");

//   console.log("I do something");
//   console.log("I do something");
//   console.log("I do something");
// }

// doSomething();
// //I do something

// //                           parameter (Can be how many and whatever we like)
// function doSomethingWithData(someData) {
//   console.log("Idid something with someData here: " + someData);
// }

// // void with soe paramters (A function that doesnt give anything, it doesnt do anything when called)
// doSomethingWithData("Here is my data");
// //Idid something with someData here: Here is my data

// function doSomethingReturnsAString() {
//   console.log("Idid something, is something for you: ");
//   return "This is not really easy";
// }
// //When you call instanceof,it will return anything behind.
// //So if you need the thing it return, you can just call it
// //These variables are the same
// let result = doSomethingReturnsAString();
// let resultSame = "This is not really easy";
// let resultResult = doSomethingReturnsAString() + doSomethingReturnsAString();

// console.log(resultResult);
// //This is not really easyThis is not really easy

// function doSomethingThatReturnsASomething(someData) {
//   return "This is easy" + someData;
// }

// let result2 = doSomethingThatReturnsASomething("This is my data");
// console.log(result2);

// //This is easyThis is my data

//#endregion
//#region
// function doSomething(someParam) {
//   console.log("I do something");
//   console.log("I do something");
//   console.log("I do something");

//   someParam()

//   console.log("I do something");
//   console.log("I do something");
//   console.log("I do something");
// }

// doSomething(function () {
//   console.log("I am a Callback");
// });
//#endregion

//#region
//Fetch reuest
fetch("https://catfact.ninja/facts", function (response) {
  console.log(response);
});
