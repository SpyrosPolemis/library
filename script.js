const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.id = crypto.randomUUID()

    // TODO: Move this to prototype
    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${haveRead ? "have read" : "have not read"}.`
    } 
}

function addBookToLibrary(title, author, pages, hasRead) {
    // Creates a book object and stores it in myLibrary array
    myLibrary.push(new Book(title, author, pages, hasRead))
}