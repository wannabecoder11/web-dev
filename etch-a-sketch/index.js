const container = document.querySelector("div.container")
const conatinerSize = 960;
const input = document.querySelector("input");
const button = document.querySelector("button");

// drawing 16x16 squares by default
drawSquares(16);

button.addEventListener("click", redrawSquares);


function redrawSquares() {
    drawSquares(`${input.value}`);

};

function drawSquares(s) {
        container.replaceChildren(); // removing all the previous squares

    // creating squares using the dimesion 's' passed to the function drawSqaures
    for (let index = 0; index < s*s; index++) {
        const div = document.createElement("div");
        div.setAttribute("class", "square");
        container.appendChild(div);
        div.style.width = `${conatinerSize/s - 2}px`;
        div.style.height = `${conatinerSize/s - 2}px`;
    };

    
    const squares = document.querySelectorAll("div.square"); // array like object of all squares created above

    squares.forEach((sq) => {
                sq.addEventListener("mouseover", (event) => {
                        sq.style.backgroundColor = "red";
                    })   
            });
    
};

