const books = [];

// book object constructor
function Book(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
};

// creates book and adds to the books array
function createBook(name, author) {
    randomID = crypto.randomUUID();
    newBook = new Book(name, author, randomID);
    books.push(newBook);

    // console.log(`New Book created ${books[0].name}`)
}
// creates the html content for all items in the books array, with delet button
function displayBooks() {
        const tableRows = document.getElementById("bookRows")
        tableRows.replaceChildren();
    for (key in books) {
        // console.table(books[key]);
        const newRow = document.createElement("tr");

        const newRowHeader = document.createElement("th");
        const newBookCell = document.createElement("td");
        const newAuthorCell = document.createElement("td");
        const newIdCell = document.createElement("td");
        const deleteBookCell = document.createElement("td")
        const deleteBook = document.createElement("button")
        deleteBookCell.appendChild(deleteBook);

        tableRows.appendChild(newRow)
        newRowHeader.textContent = `${key}`;
        newBookCell.textContent = `${books[key].name}`
        newAuthorCell.textContent = `${books[key].author}`
        newIdCell.textContent = `${books[key].id}`
        deleteBook.innerText = "Delete"
        deleteBook.setAttribute("class", "deleteButton")
        deleteBook.setAttribute("id", `${key}`)
        deleteBook.addEventListener("click", (e) => {
            books.splice(key,1);
            e.preventDefault();
            displayBooks();
        })
        newRow.appendChild(newRowHeader);
        newRow.appendChild(newBookCell);
        newRow.appendChild(newAuthorCell);
        newRow.appendChild(newIdCell);
        newRow.appendChild(deleteBookCell);
    }
}
// New Book button to show form for creating new book
const newform = document.querySelector("form")
const openFormButton = document.getElementById("openForm")
openFormButton.addEventListener("click", (e) => { 
    newform.toggleAttribute("hidden",)
})


const newBookSubmitButton = document.getElementById("submit")

//getting data from the form
const bookTitle = document.getElementById("title")
const bookAuthor = document.getElementById("author")

newBookSubmitButton.addEventListener("click", (e) => {
    createBook(bookTitle.value, bookAuthor.value);
    console.log(`${bookTitle.value} ${bookAuthor.value}`)
    e.preventDefault()
    displayBooks()
})

//creating some default books
createBook("The Harry Potter", "JK Rollings")
createBook("GoT", "G R R Martin")
createBook("Lord of the Rings", "Tolkins")


displayBooks()