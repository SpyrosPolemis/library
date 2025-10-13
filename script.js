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

Book.prototype.changeReadStatus = function() {
    this.haveRead = !this.haveRead
    displayBooks()
}

/* Book Helpers */

function addBookToLibrary(title, author, pages, haveRead) {
    // Creates a book object and stores it in myLibrary array
    myLibrary.push(new Book(title, author, pages, haveRead))
}

function displayBooks() {
    const bookTable = document.querySelector("table")
    bookTable.classList.remove("none")
    const bookrows = document.querySelectorAll(".book-row"); 
    bookrows.forEach(element => {
        element.remove()        
    });
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].getInfo() + myLibrary[i].id)

        const newBook = document.createElement("tr");
        newBook.classList.add("book-row")
        newBook.innerHTML = `<td>${myLibrary[i].title}</td><td>${myLibrary[i].author}</td><td>${myLibrary[i].pages}</td><td><button class="change-read-status-btn" id="${myLibrary[i].id}">${myLibrary[i].haveRead ? "Yes" : "No"}</button></td><td><button class="remove-book-btn" id="${myLibrary[i].id}">X</button></td>`
        bookTable.appendChild(newBook)
    }    

    const deleteBookBtns = document.querySelectorAll(".remove-book-btn")
    deleteBookBtns.forEach((book) => {
        book.addEventListener("click", () => {
            let bookToDelete = book.id;
            // console.log(`Book id to delete: ${bookToDelete}`)

            let index =  myLibrary.findIndex(item => item.id == bookToDelete)
            // console.log(`Index of book to delete: ${index}`)

            myLibrary.splice(index, 1)
            // console.log(myLibrary)

            displayBooks()
            if (myLibrary.length === 0) {
                bookTable.classList.add("none")
            }
        })
    })

    const changeReadStatusButtons = document.querySelectorAll(".change-read-status-btn")
    changeReadStatusButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let bookToChange = button.id;
            let index = myLibrary.findIndex(book => book.id == bookToChange)
            myLibrary[index].changeReadStatus()
        })
    })
}

/* Adding Book */

const addBookBtn = document.querySelector("#add-book-btn");
addBookBtn.onclick = () => {
    addBookModal.showModal()
}

const bookForm = document.getElementById("book-form")
bookForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value);
    const haveRead = document.querySelector("#read").checked;

    addBookToLibrary(title, author, pages, haveRead)
    displayBooks()
    bookForm.reset()
    addBookModal.close()
})

const addBookModal = document.querySelector("#add-book-modal");

/* Testing */

const addSampleBooksButton = document.querySelector("#add-sample-books-btn")
addSampleBooksButton.onclick = addSampleBooks

function addSampleBooks() {
    addBookToLibrary("1984", "George Orwell", 328, true);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
    displayBooks()
}

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
displayBooks()