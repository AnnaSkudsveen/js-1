let name = "Kenneth";
let teacherName = "Hesh";
let teacherFriendName = "Monde";

name = "Erica"
console.log(name);

const PI = 3.14159265359;
const GRAVITY = 9.8;

// Arrays
//                   0         1       2       3      4    5       6
const greenBox = ["marker", "paper", "pen", "stone", true, 99, "wrapper"]
console.log(greenBox.length);

// .push
greenBox.push("pencil");
console.log(greenBox); // ["marker", "paper", "pen", "stone", true, 99, "wrapper", "pencil"]

// .unshift
greenBox.unshift("eraser");
console.log(greenBox); // ["eraser", "marker", "paper", "pen", "stone", true, 99, "wrapper", "pencil"]

// .pop
greenBox.pop();
console.log(greenBox);

// .shift
greenBox.shift();
console.log(greenBox); //["marker", "paper", "pen", "stone", true, 99, "wrapper"]

// .sort
const array1 = [4, 5, 3, 2, 100000];
array1.sort((a, b) => a - b);
console.log(array1);

//indexOf
console.log(greenBox.indexOf("pen")); //2

// .find
const user = {
    name: "Monde",
    age: 30,
    job: "Software Engineer",
    wealth: 456789865
}

console.log(user);
console.log(user.name);

// console log: Hello, my name is Monde, and I am 30 years old. I own 456789865 in NOK and i am a Software engineer
console.log("My name is " + user.name + ", and I am " + user.age + " years old. I own " + user.wealth + " in NOK and I am a " + user.job);

const textTwo = `My name is ${user.name} and I am ${user.age} years old. I own ${user.wealth} in NOK and I am a ${user.job}`;
console.log(textTwo)

//object in array
const books = [
    {
        title: "The Hobbit",
        author: "J.R.R Tolkien",
        pages: "320"
    },
    {
        title: "The Fellowship of the Ring",
        author: "J.R.R Tolkien",
        pages: "432"
    },
    {
        title: "Two towers",
        author: "J.R.R Tolkien",
        pages: "352"
    },
    {
        title: "Return of the King",
        author: "J.R.R Tolkien",
        pages: "512"
    }
]

console.log("my first book", books[0]);

const searchedBook = books.find(function (book){
    return book.title==="the hobbit";
});

//const searchedBook = books.find(function (book){
//    return book.title.toLowerCase()===("the hobbit").toLocaleLowerCase();
//});

console.log("searchedBook", searchedBook);

//function name (){what will happen}
function doorbell (withCamera){
	console.log("Open the door if the photo is:", withCamera)
}

//calling on the function
doorbell("Monde photo")
//Open the door

function logWord(theWord) {
    console.log(theWord);
}

logWord("Apple");
logWord("Pear");

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

const sum = addTwoNumbers(5, 6);
console.log("sum", sum);