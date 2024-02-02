const bookListDiv = document.getElementById("book-list");

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
  });

// document.createElement();
