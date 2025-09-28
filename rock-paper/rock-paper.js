let userScore = 0
let computerScore = 0
const validChoices = ["rock", "paper", "scissors"];
playGame()

function getComputerChoice() {
   let randomInt =  Math.floor(Math.random() * 3) + 1

   if (randomInt === 1) {
    return "rock";
   };
    if (randomInt === 2) {
        return "paper";
    };
    if (randomInt === 3) {
        return "scissors";
    };
};

function getHumanChoice() {
    let userInput = prompt("Give your input between rock, paper & scissors").toLowerCase()

    if (validChoices.includes(userInput)) {
        return userInput;
    } else {
        console.log("Invalid input, choose between rock, paper and scissors")
    }
}

function playRound() {

    let computerChoice = getComputerChoice();
    console.log(`Computer Choice is ${computerChoice}`);
    let userInput = getHumanChoice()
    console.log(`Human choice is ${userInput}`);

    if (userInput === computerChoice) {
        console.log("It's a tie");
    }  else if (
            userInput == "rock" && computerChoice === "scissors" || 
            userInput == "paper" && computerChoice === "rock" || 
            userInput === "scissors" && computerChoice === "paper") {
            userScore++    // increment userScore
            console.log(`User won, his score is ${userScore}`)
    } else {
            computerScore++
            console.log(`Computer won, his score is ${computerScore}`); //increment computerScore
    }

    
}
function playGame() {
    console.log(`Round One ----------------`)
    playRound()
    console.log(`Round Two ----------------`)
    playRound()
    console.log(`Round Three --------------`)
    playRound()

    console.log(`Scores are, User ${userScore}, Computer: ${computerScore}`);
    if (userScore > computerScore) {
        console.log('User Won');
    } else if (userScore < computerScore) {
        console.log('Computer Won');
    } else {
        console.log("It was a tie!!");
    };
};