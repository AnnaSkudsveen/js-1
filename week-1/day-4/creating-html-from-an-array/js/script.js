const pets = [
    {
        type: null,
        colour: "brown",
        age: 10,
        friendly: true,
    },
    {
        colour: "orange",
        age: 7,
        friendly: false,
    },
    {
        type: "duck",
        colour: "#00ff00",
        age: 20,
        friendly: false,
    },
];
// Select the pet-container class

const petContainer = document.querySelector(".pet-container");
console.log(petContainer);

// Create a html variable to hold our html in it when we use the loop

let html = "";

// Loop over the array

const totalItemsOfPets = pets.length;

console.log(totalItemsOfPets)

for(i = 0; i < totalItemsOfPets; i++) {
    //console.log(pets[i]);

    console.log(pets[i].colour);

    html += `
        <div>
            <h2>Type: ${pets[i].type}</h2>
            <p>Color: ${pets[i].colour}</p>
            <p>Age: ${pets[i].age}</p>
            <p>Friendly: ${pets[i].friendly ? "yes" : "no"}</p>
        </div>
    `
}

// change the innerHTML

petContainer.innerHTML = html;










