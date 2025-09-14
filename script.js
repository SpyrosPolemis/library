const myLibrary = [];

/* Book Object */

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = crypto.randomUUID()
}

Book.prototype.getInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead ? "have read" : "have not read"}.`
} 

/* Book Helpers */

function addBookToLibrary(title, author, pages, haveRead) {
    // Creates a book object and stores it in myLibrary array
    myLibrary.push(new Book(title, author, pages, haveRead))
}

function displayBooks() {
    const bookTable = document.querySelector("table") 
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].getInfo())

        const newBook = document.createElement("tr");
        newBook.innerHTML = `<td>${myLibrary[i].title}</td><td>${myLibrary[i].author}</td><td>${myLibrary[i].pages}</td><td>${myLibrary[i].haveRead ? "Yes" : "No"}</td>`
        bookTable.appendChild(newBook)
    }    
}

/* Adding Book */

const addBookBtn = document.querySelector("#add-book-btn");
addBookBtn.onclick = () => {
    addBookModal.showModal()
}

const addBookModal = document.querySelector("#add-book-modal");


/* Testing */

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
displayBooks()