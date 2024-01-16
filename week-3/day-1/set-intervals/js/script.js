// let count = 0;
// let intervalId = setInterval(function () {
//   console.log("Hello World!");
//   count++; //increment
//   if (count == 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// let countdown = 10;
// let intervalCountDown = setInterval(function () {
//   console.log(countdown);
//   countdown--;
//   if (countdown == 0) {
//     clearInterval(intervalCountDown);
//   }
// }, 1000);

const list = document.querySelector(".counting-list");
// console.log(list);

let count = 1;

function ListItem() {
  list.innerHTML += `
      <li>item ${count}</li>
      `;
  count++;
  if (count == 6) {
    clearInterval(addListItem);
  }
}

let addListItem = setInterval(ListItem, 1000);
