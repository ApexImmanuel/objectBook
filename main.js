const addBookButton = document.querySelector("#addBookButton");
const closeFormButton = document.querySelector("#closeform");
const divPopup = document.querySelector(".formpopup");
const submitButton = document.querySelector("#submit");
const gridContainer = document.querySelector(".gridContainer");

// Event listeners
addBookButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
submitButton.addEventListener("click", submitForm);

// Open the form
function openForm() {
  divPopup.style.display = "block";
  closeFormButton.style.display = "block";
}

// Close the form
function closeForm() {
  divPopup.style.display = "none";
  closeFormButton.style.display = "none";
}

// Submit the form
function submitForm(e) {
  e.preventDefault();
  const inputTitle = document.querySelector(".inputTitle");
  const inputAuthor = document.querySelector(".inputAuthor");
  const inputPages = document.querySelector(".inputPages");
  const readSelect = document.querySelector("select");
  const readValue = readSelect.value;
  const bookTitle = inputTitle.value;
  const bookAuthor = inputAuthor.value;
  const bookPages = inputPages.value;

  const book = {
    title: bookTitle,
    author: bookAuthor,
    pages: bookPages,
    read: readValue,
  };

  inputTitle.value = "";
  inputAuthor.value = "";
  inputPages.value = "";

  addBookToLibrary(book);
  closeForm();
}

// Add book to library
function addBookToLibrary(book) {
  const bookCard = createBookCard(book);
  gridContainer.appendChild(bookCard);
}

// Create a book card
function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");

  const deleteButton = createButton("deleteButton", "X");
  deleteButton.addEventListener("click", () => {
    bookCard.remove();
  });

  const readStatusButton = createButton("statusButton", "Change Read Status");
  readStatusButton.addEventListener("click", () => {
    const spanRead = bookCard.querySelector(".bookRead");
    if (spanRead.textContent === "Yes") {
      readStatusButton.style.backgroundColor = "red";
      spanRead.textContent = "No";
    } else {
      readStatusButton.style.backgroundColor = "green";
      spanRead.textContent = "Yes";
    }
  });

  const pTitle = createParagraph("Book Title: ", "bookTitle", book.title);
  const pAuthor = createParagraph("Author: ", "bookAuthor", book.author);
  const pPages = createParagraph("Pages: ", "bookPages", book.pages);
  const pRead = createParagraph("Have you read it? ", "bookRead", book.read);

  bookCard.appendChild(pTitle);
  bookCard.appendChild(pAuthor);
  bookCard.appendChild(pPages);
  bookCard.appendChild(pRead);
  bookCard.appendChild(deleteButton);
  bookCard.appendChild(readStatusButton);

  return bookCard;
}

// Helper function to create a button
function createButton(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}

// Helper function to create a paragraph with a span element
function createParagraph(label, className, text) {
  const p = document.createElement("p");
  const span = document.createElement("span");
  span.textContent = text;
  p.textContent = label;
  p.appendChild(span);
  p.classList.add(className);
  return p;
}