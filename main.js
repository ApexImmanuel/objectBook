  let objStorage = 0;
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
    // objStorage++;
    bookObject.push({
      title: bookTitle,
      author: bookAuthor,
      pages: bookPages,
      // read: checkRead(read),
    });
  });
  console.log(bookObject);

  let checkbox;
  let read = document.querySelector(".read");
  read.addEventListener("click", (e) => {
    checkbox = e. target.checked;
  });

  function checkRead(read) {
    if (read === true) {
      true;
    }
    false
  }

  ///////////////////////////
  // report cardContainer//
  let testObj = [
    {title: "One piece", author: "Oda", pages: 900},
    {title: "Bible", author: "God", pages: 230},
    {title: "Hentai", author: "Anime", pages: 230},
    {title: "Bible", author: "God", pages: 230},
    {title: "Bible", author: "God", pages: 230},
  ]

  function libraryBook(books) {
    let gridContainer = document.querySelector(".gridContainer");
    for (const book of books) {
      const bookCard = document.createElement("div");
      const pTitle = document.createElement("p");
      const pAuthor = document.createElement("p");
      const pPages = document.createElement("p");

      pTitle.textContent = `Book Title: ${book.title}`;
      pAuthor .textContent = `Author: ${book.author}`;
      pPages.textContent = `Pages: ${book.pages}`;

      gridContainer.appendChild(bookCard);
      bookCard.appendChild(pTitle);
      bookCard.appendChild(pAuthor);
      bookCard.appendChild(pPages);
      console.log(book);
    }
  }
  libraryBook(testObj)


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
    
    