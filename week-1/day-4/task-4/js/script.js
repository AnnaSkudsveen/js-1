const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const booksContainer = document.querySelector(".book-container");

let html = "";

const totalNumberOfBooks = books.length;
console.log(totalNumberOfBooks);

for(i = 0; i < totalNumberOfBooks; i++) {
    //console.log(books[i])
    html += `
        <div class="book">
            <h2>${books[i].title} </h2>
            <p>Author: ${books[i].author} </p>
            <p>Avaliability:  ${books[i].available ? "Avaliable" : "Not avaliable"} </p>
        </div>
    `
}

booksContainer.innerHTML = html;