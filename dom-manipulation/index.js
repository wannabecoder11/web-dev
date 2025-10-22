// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);


const blackDiv = document.createElement("div");
blackDiv.style.borderColor = "black";
blackDiv.style.borderStyle = "solid";
blackDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.innerText = "I'm in a div"
blackDiv.appendChild(h1);

const innerp2 = document.createElement("p");
innerp2.innerText = "ME TOO!";
blackDiv.appendChild(innerp2);

container.appendChild(blackDiv);