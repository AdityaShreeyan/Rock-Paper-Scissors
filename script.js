let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return ("Rock");
    }
    else if (choice == 1){
        return ("Paper");
    }
    else {
        return ("Scissors");
    }
}
function getHumanChoice(){
    let choice = prompt('Rock, Paper or Scissors? Pick one!',"").toLowerCase();
    if (choice == 'rock'){
        return ("Rock");
    }
    else if (choice == 'paper'){
        return ("Paper");
    }
    else if (choice == 'scissors' || choice == 'scissor'){
        return ("Scissors");
    }
    else {
        return (`Invalid!`);
    }
}
function playRound(humanChoice,computerChoice){
    if (humanChoice == 'Rock' && computerChoice == 'Scissors'
        || humanChoice == 'Scissors' && computerChoice == 'Paper'
        || humanChoice == 'Paper' && computerChoice == 'Rock')
    {
        humanScore += 1;
        return ("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if (humanChoice === computerChoice){
        return ("It's a draw!");
    }
    else if (humanChoice === "Invalid!"){
        return ("Please enter a valid choice!");
    }
    else {
        computerScore += 1;
        return ("You lose! " + computerChoice + " beats " + humanChoice);
    }
}
function playGame(){
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}`);
        console.log(`Your choice: ${humanSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
        console.log('-----------------------------------');
        }
    if (humanScore > computerScore){
        console.log("Congratulations! You have beaten the computer!")
    }
    else if (humanScore === computerScore){
        console.log("It's a draw!");
    }
    else {
        console.log("You lost.. Better luck next time!");
}
}
playGame();
