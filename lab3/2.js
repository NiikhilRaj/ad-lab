const choices = ["Rock", "Paper", "Scissors"];

const playerIndex = Math.floor(Math.random() * 3);
const computerIndex = Math.floor(Math.random() * 3);

const playerSelection = choices[playerIndex];
const computerSelection = choices[computerIndex];

let resultMessage = "";

if (playerIndex === computerIndex) {
    resultMessage = "It's a tie!";
}
else {
    if (playerIndex > computerIndex) {
        if (playerIndex === 2 && computerIndex === 0) {
            resultMessage = "Computer Wins! Rock beats Scissors.";
        } else {
            resultMessage = "Player Wins!";
        }
    } else {
        if (computerIndex === 2 && playerIndex === 0) {
            resultMessage = "Player Wins! Rock beats Scissors.";
        } else {
            resultMessage = "Computer Wins!";
        }
    }
}

console.log(`Player chose: ${playerSelection} (Index ${playerIndex})`);
console.log(`Computer chose: ${computerSelection} (Index ${computerIndex})`);
console.log(`Result: ${resultMessage}`);