// addEventListnener
// onclick

const body = document.querySelector("body");

const darkModeButton = document.querySelector(".dark-mode-btn");
let isDarkMode = false;

// console.log(body);
// console.log(darkModeButton);

function init() {
  //Will get dark mode staturs
  // once gotten wil change body background color

  isDarkMode = window.localStorage.getItem("darkMode");

  if (isDarkMode) {
    body.style.backgroundColor = "#0A0A0A";
  } else {
    body.style.backgroundColor = "#FFF";
  }
}

init();

console.log("darkmode before:", isDarkMode);

function toggleMode() {
  if (isDarkMode) {
    console;
  }
}

// function toggleMode() {
//   isDarkMode = !isDarkMode;

//   window.localStorage.setItem("darkMode", isDarkMode);

//   if (isDarkMode) {
//     body.style.backgroundColor = "#0A0A0A";
//     // isDarkMode = false;
//   } else {
//     body.style.backgroundColor = "#FFF";
//     // isDarkMode = true;
//   }
// }

darkModeButton.addEventListener("click", toggleMode);
