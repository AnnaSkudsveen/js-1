// // Set timeout

// // 1.

// setTimeout(function () {
//   console.log("Hello, World!");
// }, 5000);

// function logHello() {
//   console.log("Hello");
// }

// setTimeout(logHello, 5000);

// //selectloader with .loader class

// const loader = document.querySelector(".loader");
// //console.log(loader);

// //2. Use setTimeout
// setTimeout(function () {
//   //3. change the innerHTML/Text of the .loader class
//   loader.innerHTML = "Loading finished";
// }, 5000);

// const counter = document.querySelector(".counter");
// //console.log(counter);
// let timeLeft = 10;

const banner = document.querySelector(".ad");

function showBanner() {
  banner.style.display = "block";
}

setTimeout(showBanner, 5000);
