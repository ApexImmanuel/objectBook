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
    const readSelect  = document.querySelector("select");
    const readValue = readSelect.value;
    const bookTitle = inputTitle.value;
    const bookAuthor = inputAuthor.value;
    const bookPages = inputPages.value;
    bookObject.push({
      title: bookTitle,
      author: bookAuthor,
      pages: bookPages,
      read: readValue,
    });
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
  
    libraryBook(bookObject);
    bookObject.shift();
    closeForm();
  }); 
  

  ///////////////////////////
  // report cardContainer//
  function libraryBook(books) {
    let gridContainer = document.querySelector(".gridContainer");
    for (const book of books) {
      const bookCard = document.createElement("div");
      let spanTitle = document.createElement("span");
      let spanAuthor = document.createElement("span");
      let spanPages = document.createElement("span");
      let spanRead = document.createElement("span");
      let deleteButton = document.createElement("button");
      let readStatusButton = document.createElement("button");
      readStatusButton.textContent= "Change Read Status";
      deleteButton.id = "deleteButton";
      deleteButton.textContent = "X"

      const pTitle = document.createElement("p");
      const pAuthor = document.createElement("p");
      const pPages = document.createElement("p");
      const pRead = document.createElement("p");

      pTitle.textContent = `Book Title: `;
      pAuthor.textContent = `Author: `;
      pPages.textContent = `Pages: `;
      pRead.textContent = "Have you read it? ";

      spanTitle.textContent = `${book.title}`;
      spanAuthor.textContent = `${book.author}`;
      spanPages.textContent = `${book.pages}`;
      spanRead.textContent = `${book.read}`;

      gridContainer.appendChild(bookCard);
      bookCard.appendChild(pTitle);
      bookCard.appendChild(pAuthor);
      bookCard.appendChild(pPages);
      bookCard.appendChild(pRead);
      pTitle.appendChild(spanTitle);
      pAuthor.appendChild(spanAuthor);
      pPages.appendChild(spanPages);
      pRead.appendChild(spanRead);
      bookCard.appendChild(deleteButton);
      readStatusButton.addEventListener("click", () => {
        if (spanRead.textContent == "Yes") {
          spanRead.textContent = "No";
        } else {
          spanRead.textContent = "Yes";
        }
      })
      deleteButton.addEventListener("click", () => {
        bookCard.remove();
      });
      bookCard.appendChild(readStatusButton);
    }
  }
  function readStatus(spanRead) {
    if (spanRead === "Yes") {
      spanRead.textContent = "No"
    } else if (spanRead === "No") {
      spanRead.textContent = "Yes"
    }
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
    
    