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

/* Helpers */

function addBookToLibrary(title, author, pages, hasRead) {
    // Creates a book object and stores it in myLibrary array
    myLibrary.push(new Book(title, author, pages, hasRead))
}

function loopArray() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].getInfo())
        
        const newBook = document.createElement("div");
        newBook.classList.add("book")
        document.body.appendChild(newBook)
    }    
}
/* Testing */

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
