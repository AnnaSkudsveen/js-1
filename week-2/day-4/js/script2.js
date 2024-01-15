const myVariable1 = window.localStorage.getItem("variable 1");
console.log(myVariable1);

const myCar = window.localStorage.getItem("myCar");
console.log(myCar);

// Parse

const myCarParsed = JSON.parse(myCar);
console.log(myCarParsed);

const pudding1 = window.localStorage.getItem("puddingFlavor");

const shoppingList1 = window.localStorage.getItem("shoppingList");
const shoppingListParsed = JSON.parse(shoppingList1);

const coffee1 = window.localStorage.getItem("coffee");
const coffeeParsed = JSON.parse(coffee1);

console.log(pudding1);
console.log(coffeeParsed);
console.log(shoppingListParsed);
