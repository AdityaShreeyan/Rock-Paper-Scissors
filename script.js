//Function to get a random choice for the computer.
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

//Initializing Game Scores to 0 before the match starts.
let humanScore = 0;
let computerScore = 0;

//Function for playing a round and adding the score to the winner as well as displaying who won.
function playRound(humanChoice,computerChoice){
    if (humanChoice == 'Rock' && computerChoice == 'Scissors'
        || humanChoice == 'Scissors' && computerChoice == 'Paper'
        || humanChoice == 'Paper' && computerChoice == 'Rock')
    {
        humanScore += 1;
        return (`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === computerChoice){
        return ("It's a draw!");
    }
    else {
        computerScore += 1;
        return (`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

const result = document.querySelector('#result');
//Create new P elements to hold round result and round score.
const roundResult = document.createElement('h2');
const roundChoice = document.createElement('p');
const roundScore = document.createElement('p');
//Append the current round result as well as round score to the #result container.
result.appendChild(roundResult);  
result.appendChild(roundChoice);
result.appendChild(roundScore);

//Function to handle Click events on all three buttons.
function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();

    //Updates the text on screen to display the result and current score.
    roundResult.textContent = playRound(playerSelection, computerSelection);
    roundChoice.textContent = roundChoice.textContent = `You chose: ${playerSelection} \u00A0\u00A0\u00A0 Computer chose: ${computerSelection}`;
    roundScore.textContent = `Your Score: ${humanScore} \u00A0\u00A0\u00A0 Computer Score: ${computerScore}`;

    //Decides the final winner.
    if ( humanScore === 5 || computerScore === 5){
    
        if ( humanScore == 5){
        const finalResult = document.createElement('h3');
        let pointDifference = humanScore - computerScore;
        //The Ternary ? : operator checks if the point difference is 1 and accordingly changes the plural form of points.
        finalResult.textContent = `You've won the match! The computer lost by ${pointDifference} ${pointDifference === 1 ? 'point!' : 'points.'}`;
        result.appendChild(finalResult);
        }
    
        else if ( computerScore == 5){
        const finalResult = document.createElement('h3');
        let pointDifference = computerScore - humanScore;
        //The Ternary ? : operator checks if the point difference is 1 and accordingly changes the plural form of points.
        finalResult.textContent = `You've lost the match! The computer won by ${pointDifference} ${pointDifference === 1 ? 'point!' : 'points.'}`;
        result.appendChild(finalResult);
        }

        //Disables all the choice buttons after one of the players has won.
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        })

        //Creating a restart button after one of the players has won.
        resetGame = document.createElement('button');
        resetGame.textContent = 'Play again';
        resetGame.addEventListener('click', function(){
            location.reload();
        })
        result.appendChild(resetGame);
}
}

//This function selects all buttons and adds an EventListener to them.
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        handleClick(button.id);  // button.id will select 'Rock' 'Paper' or 'Scissors' based on the button that was clicked.
    });
});
