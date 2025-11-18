const books = [];


function Book(name, author, id) {
    this.name = name;
    this.author = author;
    this.id = id;
};

function createBook(name, author) {
    randomID = crypto.randomUUID();
    newBook = new Book(name, author, randomID);
    books.push(newBook);

    // console.log(`New Book created ${books[0].name}`)
}

createBook("The Harry Potter", "JK Rollings")
createBook("GoT", "G R R Martin")
createBook("Lord of the Rings", "Tolkins")

function displayBooks() {
    for (key in books) {
        // console.table(books[key]);
        const tableRows = document.getElementById("bookRows")
        const newRow = document.createElement("tr");

        const newRowHeader = document.createElement("th");
        const newBookCell = document.createElement("td");
        const newAuthorCell = document.createElement("td");
        const newIdCell = document.createElement("td");

        tableRows.appendChild(newRow)
        newRowHeader.textContent = `${key}`;
        newBookCell.textContent = `${books[key].name}`
        newAuthorCell.textContent = `${books[key].author}`
        newIdCell.textContent = `${books[key].id}`
        newRow.appendChild(newRowHeader);
        newRow.appendChild(newBookCell);
        newRow.appendChild(newAuthorCell);
        newRow.appendChild(newIdCell);


    }
}
displayBooks()