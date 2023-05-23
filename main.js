//Form POPUP
const addBookButton = document.querySelector("#addBookButton");
const closeFormButton = document.querySelector("#closeform");
const divPopup = document.querySelector(".formpopup");

function openForm() {
  divPopup.style.display = "block";
  closeFormButton.style.display = "block";
}
function closeForm() {
  divPopup.style.display = "none";
  closeFormButton.style.display = "none";
}
addBookButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
/////////////////////
/////////////////////
// Getting users input
let bookObject = [];
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", function () {
  let bookTitle = document.querySelector(".inputTitle").value;
  let bookAuthor = document.querySelector(".inputAuthor").value;
  let bookPages = document.querySelector(".inputPages").value;
  bookObject.push({
    title: bookTitle,
    author: bookAuthor,
    pages: bookPages,
  });
});

console.log(bookObject);

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//   }
  
//   Book.prototype.info = function () {
//     return (`The ${this.title} is a great book written by ${this.author} and has ${this.pages} pages`);
//   }
//   let bookOne = new Book("One piece", "Oda", 900);
//   console.log(bookOne.title);
//   console.log(bookOne.info());
  
  