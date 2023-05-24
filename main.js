let objStorage = 0;
let gridContainer = document.querySelector(".gridContainer");
let hello = "Hello World";

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
submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  let bookTitle = document.querySelector(".inputTitle").value;
  let bookAuthor = document.querySelector(".inputAuthor").value;
  let bookPages = document.querySelector(".inputPages").value;
  objStorage++;
  bookObject.push({
    title: bookTitle,
    author: bookAuthor,
    pages: bookPages,
    read: checkbox,
  });
});
console.log(bookObject);
let checkbox;
  let read = document.querySelector(".read");
  read.addEventListener("click", (e) => {
  checkbox = e. target.checked;
});

for (obj of bookObject) {
  
}

// report cardContainer//
for (let i = 0; i < 1; i++) {
  let reportCard = document.createElement("div");
  let pTitle = document.createElement("p");
  let pAuthor = document.createElement("p");
  let pPages = document.createElement("p");
  reportCard.style.textAlign = "center";
  reportCard.appendChild(pTitle);
  reportCard.appendChild(pAuthor);
  reportCard.appendChild(pPages);
  gridContainer.appendChild(reportCard);
}

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
  
  