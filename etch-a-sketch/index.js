const container = document.querySelector("div.container")
const conatinerSize = 960;
const input = document.querySelector("input");
const button = document.querySelector("button");

// drawing 16x16 squares by default
drawSquares(16);

button.addEventListener("click", redrawSquares);


function redrawSquares() {
    if (input.value < 100 & input.value > 2) {
        drawSquares(`${input.value}`)
    } else {
        console.log("Please enter a value between 2 and 100")
    }

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

    
    //const squares = document.querySelectorAll("div.square"); // array like object of all squares created above
    // function colorSquare(event) {
    // }
    // squares.forEach((sq) => {
    //         sq.addEventListener("mouseover", colorSquare);

    // added event listener of the parent node, the container iteself, and then ran the function on the target/square, this saves a lot of memory
    container.addEventListener("mouseover", (event) => {
        let target = event.target;
            target.style.backgroundColor = "red";
    })
    };
