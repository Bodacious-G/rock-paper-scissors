let playerScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber === 1)
    {
        return "rock";

    } else if(randomNumber === 2)
    {
        return "paper";
    } else 
    {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection)
{

    if(computerSelection === playerSelection)
    {
        computerScore++;
        playerScore++;
        return "tie!";
    } else if((computerSelection === "scissors" && playerSelection === "paper") ||(computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "rock" && playerSelection === "scissors"))
    {
        computerScore++;
        return "Computer wins!";
    } else
    {
        playerScore++;
        return "Player wins!";
    }

}

function game()
{

    for(var i = 0; i < 5; i++)
    {
        const playerSelection = prompt("Enter your choice: (rock, paper, scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

    }

    
    
}

function declareWinner()
{
    if(playerScore > computerScore)
    {
        return "Player Wins!!!!"
    }else if(computerScore > playerScore)
    {
        return "Computer Wins!!!!"
    } else {
        return "It was a tie!!!!"
    }
    
}

game();
console.log(declareWinner());





