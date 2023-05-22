//Form POPUP
const addBookButton = document.querySelector("#addBookButton");
const closeFormButton = document.querySelector("#closeform");
const divPopup = document.querySelector(".formpopup");

addBookButton.addEventListener("click", () => {
  openForm();
});
closeFormButton.addEventListener("click", closeForm);

function openForm() {
  divPopup.style.display = "block";
  closeFormButton.style.display = "block";
}
function closeForm() {
  divPopup.style.display = "none";
  closeFormButton.style.display = "none";
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  Book.prototype.info = function () {
    return (`The ${this.title} is a great book written by ${this.author} and has ${this.pages} pages`);
  }
  let bookOne = new Book("One piece", "Oda", 900);
  console.log(bookOne.title);
  console.log(bookOne.info());
  
  