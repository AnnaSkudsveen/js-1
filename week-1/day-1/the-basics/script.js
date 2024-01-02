//console.log("hello world!");

//Variables
var myName = "Anna";
console.log(myName); // Output : Anna

console.log("myName"); // Output : myName

let age = 31;
console.log(age); // Output : 31

const make = "BMW";
console.log(make) // Output : BMW

// Data Types
let greeting = "Hello, World!";
console.log(typeof greeting); // Output : string

let isHappy = true;
console.log(typeof isHappy) // Output : boolean

let someVar;
console.log(typeof someVar) // Output : undefined

let emptyValue = null;
console.log(typeof emptyValue); //Output : null

// Object - 
let person = {
    firstName: "Anna",
    lastName: "Skudsveen",
    age: 25
};

console.log(person.firstName);

let car = {
    Make: "Volvo",
    Year: 1992,
    Condition: "used",
    Price: 10000
};

console.log("I have a " +
            car.Condition + "",
            car.Year + "",
            car.Make + " to sell, and its only " + 
            car.Price);

console.log(`I have a ${car.Condition}, ${car.Year} ${car.Make} to sell and its only ${car.Price}`)

// Array
let colors = ["Red", "Green", "Blue"]

let random = [55687, 
    "Red", 
    { name: "Anna", age: 25},
    ["boy", "girl"]
];

console.log(random[0]);

// Type conversion
let year = "1992" //string 
let convertedYear = parseInt(year);
console.log(convertedYear);

// Convert from number to string
let num = 123;
let convertedNumber = num.toString();
console.log(convertedNumber)