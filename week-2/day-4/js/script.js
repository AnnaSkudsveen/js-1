const myVariable = "Some text in my variable";

window.localStorage.setItem("variable 1", myVariable);

let car = {
  make: "BMW",
  model: 1992,
  price: 30000,
};

window.localStorage.setItem("myCar", JSON.stringify(car));

// Task
const pudding = "chocolate";

const shoppingList = ["milk", "coffee", "jam"];

const coffee = {
  origin: "Brazil",
  intensity: "medium",
};

window.localStorage.setItem("puddingFlavor", pudding);
window.localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
window.localStorage.setItem("coffee", JSON.stringify(coffee));
