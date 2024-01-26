console.log("Hello");

const article = document.querySelector("#post");

// I have a button in my HTML. When I click on this button,
//I want to show an alert with the autor and category

const button = document.querySelector(".information-button");

button.addEventListener("click", function () {
  alert(
    `Author: ${article.dataset.author}
Category: ${article.dataset.category}`
  );

  //   Adding with inner html

  //   article.innerHTML += `
  //   <h2>Author: ${article.dataset.author}</h2>
  //   <h3>Category: ${article.dataset.category}</h3>
  //   `;
});

// button.onclick = function () {
//   showBookDetails(article.dataset.author, article.dataset.category);
// };

// function showBookDetails(author, category) {
//   alert(`Book author ${author}, and the category is ${category}`);
// }

const image = document.querySelector("img");
console.log(image);

image.addEventListener("click", function () {
  window.open(image.dataset.fullsize);
});
