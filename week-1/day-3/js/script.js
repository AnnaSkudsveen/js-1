console.log("here");

// if else statements

let temp = 26;

if (temp > 30) {
    console.log("Its hot");
} else if (temp > 20) {
    console.log("The weather is nice")
} else if (temp > 0) {
    console.log("The weather is chilly")
} else {
    console.log("ITS COLD")
}

// Grade task:

let score = 91;
if (score >= 50) {
    console.log("passed");
} else {
    console.log("failed");
}

// ABCD grade task

// A = very good
// B = good
// C = average
// D = below average
// otherwise = fail

let grade = "A"

if (grade === "A") {
    console.log("very good");
} else if (grade === "B") {
    console.log("good");
} else if (grade === "C") {
    console.log("average");
} else if (grade === "D") {
    console.log("below average");
} else {
    console.log("fail");
}

// SWITCH
// a better way to write large if... else statements

let color = "jhgf";

/* if (color === "red") {
    console.log("STOP");
} */

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get ready/slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("follow regular traffic rules");
}

// 3. Scope
var name = "hesham"; // Global scope

let myName = "hesham"; // Function scope

var greeting = "hello";

if(true){
    var greeting = "hi"; //Redeclared the variable
    console.log(greeting);
}

console.log(greeting); // hi

//If you redeclare a variable inside a function, var will be redeclared outside of it as well because its a global scope variable. 

let message ="hello";
if(true) {
    let message = "hi";
    console.log(message);
}

console.log(message);

// Redeclaring a let variable inside of a scope it will not change outside it.
