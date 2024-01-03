const header1 = document.querySelector("h1");
header1.innerText = "Welcome to JavaScript Class";
header1.style.color = "blue";
header1.style.fontSize = "48px";

const listButton = document.querySelector("button")

const list = document.querySelector("#list");
console.log(list);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

listButton.addEventListener("click", function() {
    let someRandomNumber = getRandomInt(200);

    list.innerHTML += `<li>New Item ${someRandomNumber}</li>`
});
