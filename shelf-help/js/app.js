const bookListDiv = document.getElementById("book-list");
const filterBtn = document.querySelector(".btn-filter");

// filterBtn.addEventListener("click", filterByAuthor("Stephen Gundry"));

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

  console.log(filteredResults);
  //update DOM to show new array
}

//fetch book data
fetch("http://localhost:3000/books")
  .then((response) => response.json())
  .then((bookResultData) => {
    bookData = bookResultData;
    for (const book of bookData) {
      displayBook(book);
    }

    // bookData.forEach(book => {
    //     displayBook(book)
    // });
    filterByAuthor("Stephen Gundry");
  });

// document.createElement();
