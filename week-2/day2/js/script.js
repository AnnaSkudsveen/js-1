// Recap

//EcmaScript
//ES 5
//  var name = "Anniken"

//  //ES 6

//  let secondName = "Hesh"

//  const thirdName = "Marius"

 //2. console.log -- console.dir, console.info, yellow, console.error

 //3. >=, <=, =, ==, !=, !==, ===

 //4. Conditions
 //if() {}

 //Switch case

 //5. objects
let car = {
    make: "BMW",
    year: 1992,
    used: true
}

console.log(car.make);
console.log(car["year"]);

//6. for loops
//for(let i = 1; i <= 10; i++){console.log(i)}

//7. Arrays
//                 0     1    2     3
let myBigBox = ["paper", 1, true, "car", {user: Kaja, age: 39}]
console.log(myBigBox);
console.log(myBigBox[2]);
console.log(myBigBox[4].user)

const lastItemIndex = myBigBox.length - 1;
console.log(lastItemIndex);
console.log(myBigBox[lastItemIndex]);

//8 Looping over an array
for (let i = 0; i < myBigBox.length; i++) {
    console.log(myBigBox[i]);
}

//9. Concatenation
let name = "Anniken";
let secondName = "Hesham";
let thirdName = "Line";

//"" 
const myParagraph = "hello" + name + "hello" + secondName + "hello friend" + thirdName;
console.log(myParagraph);

//``
const mySecondParagraph = `hello ${name} and hello ${secondName}, hello friend ${thirdName}`;
console.log(mySecondParagraph)

//10. Functions
function logWord(name) {
    if(name !== undefined) {
        console.log("Hello " + name);
    } else {
        console.log("sorry")
    }

    // if(name) {
    //     console.log("Hello " + name);
    // } else {
    //     console.log("sorry")
    // }
}

logWord("Jonas");
logWord("Hesham");
logWord(); //sorry
//When liking on instagram this is used. When the user likes, the code runs "show heart", "notify the user it got a like", "change heart from white to red" etc
