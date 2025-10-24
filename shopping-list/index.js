const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");


function submit(element) {
    element.preventDefault();
    const listItem = document.createElement('li');

    listItem.innerText = `${input.value}`;

    ul.appendChild(listItem);
    input.value = "";
};

button.addEventListener("click", submit);