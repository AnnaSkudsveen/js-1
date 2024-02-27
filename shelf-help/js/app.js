const bookListDiv = document.getElementById("book-list");
const filterBtn = document.querySelector(".btn-filter");
const dropdownAuthorList = document.querySelector("#authorList");
const resetButton = document.getElementById("reset-button");
const loadingDiv = document.getElementById("loader");

let bookData = [];

function displayBook(book) {
  const bookDiv = document.createElement("div");
  const bookTitleParagraph = document.createElement("p");
  bookTitleParagraph.innerText = book.title;
  const bookImg = document.createElement("img");
  bookImg.src = `http://localhost:3000/assets/images/${book.coverImg}`;
  bookImg.alt = "a picture of a book";
  bookDiv.appendChild(bookImg);
  //legger bookTitleParagraph inn i bookDiv
  bookDiv.appendChild(bookTitleParagraph);
  //Legger bookDiv inn i bookListDiv
  bookListDiv.appendChild(bookDiv);
}

function filterByAuthor(authorToFilterBy) {
  //filter array by authors name
  let filteredResults = [];

  for (const book of bookData) {
    if (book.author === authorToFilterBy) {
      filteredResults.push(book);
    }
  }

  //Update the DOM to change after filtering:
  //Clear the old list from DOM
  bookListDiv.innerHTML = "";
  // loop through the new filtered list
  for (const book of filteredResults) {
    // display/render each book
    displayBook(book);
  }
}

function loadAuthorsIntoDropDown() {
  for (const book of bookData) {
    //Create an option with author name
    const authorOption = document.createElement("option");
    authorOption.innerText = book.author;
    //add it to the dropdown
    dropdownAuthorList.appendChild(authorOption);
  }
}

function resetButtonClick() {
  resetButton.addEventListener("click", () => {
    bookListDiv.innerHTML = "";
    for (const book of bookData) {
      displayBook(book);
    }
  });
}

//fetch book data
fetch("http://localhost:3000/books")
  .then((response) => response.json())
  .then((bookResultData) => {
    bookData = bookResultData;
    for (const book of bookData) {
      displayBook(book);
    }
    loadAuthorsIntoDropDown();

    resetButtonClick();

    loadingDiv.hidden = true;

    // loadingDiv.style.display="none"
  });

filterBtn.addEventListener("click", () =>
  filterByAuthor(dropdownAuthorList.value)
);
