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
    let inputTitle = document.querySelector(".inputTitle");
    let inputAuthor = document.querySelector(".inputAuthor");
    let inputPages = document.querySelector(".inputPages");
    const bookTitle = inputTitle.value;
    const bookAuthor = inputAuthor.value;
    const bookPages = inputPages.value;
    bookObject.push({
      title: bookTitle,
      author: bookAuthor,
      pages: bookPages,
    });
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
  
    libraryBook(bookObject)
    bookObject.shift();

  });
  console.log(bookObject);

  ///////////////////////////
  // report cardContainer//
  let testObj = [
    {title: "One piece", author: "Oda", pages: 900},
    {title: "The Narnia", author: "Logan", pages: 230},
    {title: "Driver", author: "Dom", pages: 230},
    {title: "Killer Bee", author: "Kage", pages: 230},
    {title: "Tokyo Ghoul", author: "Becham", pages: 230},
    {title: "Toomy", author: "Jimbei", pages: 230},
    {title: "Randys", author: "King", pages: 230},
  ]


  function libraryBook(books) {
    let gridContainer = document.querySelector(".gridContainer");
    for (const book of books) {
      const bookCard = document.createElement("div");
      let spanTitle = document.createElement("span");
      let spanAuthor = document.createElement("span");
      let spanPages = document.createElement("span");
      const pTitle = document.createElement("p");
      const pAuthor = document.createElement("p");
      const pPages = document.createElement("p");

      pTitle.textContent = `Book Title: `
      pAuthor.textContent = `Author: `
      pPages.textContent = `Pages: `

      spanTitle.textContent = `${book.title}`;
      spanAuthor.textContent = `${book.author}`;
      spanPages.textContent = `${book.pages}`;

      gridContainer.appendChild(bookCard);
      bookCard.appendChild(pTitle);
      bookCard.appendChild(pAuthor);
      bookCard.appendChild(pPages);
      pTitle.appendChild(spanTitle);
      pAuthor.appendChild(spanAuthor);
      pPages.appendChild(spanPages);
    }
  }
  // libraryBook(bookObject);

//function that checks the value of the array again(rerendering);


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
    
    