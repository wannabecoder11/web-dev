const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");


function submit(element) {
    element.preventDefault();
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const liButton = document.createElement('button');
    listItem.appendChild(span);
    listItem.appendChild(liButton);

    span.innerText = `${input.value}`;
    liButton.textContent = "Delete";
    liButton.id = "listButton"
    ul.appendChild(listItem);
    input.value = "";
    liButton.addEventListener("click", function(e) {
        const li = e.target.closest('li'); // Find the closest <li> ancestor
        if (li) {
            li.remove(); // Remove the entire list item from DOM
        }
        input.focus()
});

};



button.addEventListener("click", submit);