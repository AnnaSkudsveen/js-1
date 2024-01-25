// 1. select my dropdown menu
const dropdown = document.querySelector("#circles");

const circleContainer = document.querySelector(".circle-container");

dropdown.onchange = function (event) {
  circleContainer.innerHTML = ``;

  if (this.value == 0) {
    circleContainer.innerHTML += `
    <div class="circle"> </div>
    `;
  } else {
    for (let i = 1; i <= this.value; i++) {
      circleContainer.innerHTML += `
        <div class="circle">${i}</div>
        `;
    }
  }
};
