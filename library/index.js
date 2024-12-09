let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryBook = document.querySelector('#book-list');
    libraryBook.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement('div');
        bookElement.setAttribute('class', 'book-card');
        bookElement.innerHTML = `
            <p>Title: ${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p class="read-status">Read: ${book.read ? 'Read' : 'Not read yet'}</p>
            <button class='remove-button' onclick='removeBook(${i})'>Remove</button>
            <button class='toggle-read' onclick='toggleRead(${i})'>Read</button>
            `;
        libraryBook.appendChild(bookElement);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBookEntry = new Book(title, author, pages, read);
    myLibrary.push(newBookEntry);
    render();
}

let addButton = document.querySelector('#add-book');
addButton.addEventListener('click', function () {
    let newBookForm = document.querySelector('#form');
    newBookForm.style.display = 'flex';
});

document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    addBook();
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => {
        if (singleInput.type === 'checkbox') {
            singleInput.checked = false;
        } else {
            singleInput.value = '';
        }
    });
    document.querySelector('#form').style.display = 'none';
});
