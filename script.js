function getComputerChoice(){
    let rand = Math.random() * 3;
    rand = Math.floor(rand);
    if(rand == 0){
        return 'Rock';
    } else if(rand == 1){
        return 'Paper';
    } else if(rand == 2){
        return 'Scissors';
    } else console.log('Something went wrong!');
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    playerSelection = playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase();

    if(playerSelection == 'Rock'){
        if(computerSelection == 'Rock'){
            return 'Tie! Nobody wins';
        } else if(computerSelection == 'Paper'){
            return 'You lose! Paper beats Rock';
        } else if(computerSelection == 'Scissors'){
            return 'You win! Rock beats Scissors';
        }
    }
    if(playerSelection == 'Paper'){
        if(computerSelection == 'Rock'){
            return 'You win! Paper beats Rock';
        } else if(computerSelection == 'Paper'){
            return 'Tie! Nobody wins';
        } else if(computerSelection == 'Scissors'){
            return 'You lose! Scissors beats Paper';
        }
    }
    if(playerSelection == 'Scissors'){
        if(computerSelection == 'Rock'){
            return 'You lose! Rock beats Scissors';
        } else if(computerSelection == 'Paper'){
            return 'You win! Scissors beats Paper';
        } else if(computerSelection == 'Scissors'){
            return 'Tie! Nobody wins';
        }
    }
}

function game(){
    
    let playerScore = 0;
    let computerScore = 0;
    let round;
    console.log("Best out of 5! Good luck!")
    while(playerScore < 3 && computerScore < 3){
        let playerSelection = prompt('Your choice: ');
        round = playRound(playerSelection,getComputerChoice());
        console.log(round);
        if(round.slice(0,7) == 'You win'){
            playerScore ++;
            console.log("playerScore = " + playerScore);
        } else if(round.slice(0,8) == 'You lose'){
            computerScore ++;
            console.log("computerScore = " + computerScore);
        } else if(round.slice(0,3) == 'Tie'){
            console.log("playerScore = " + playerScore);
            console.log("computerScore = " + computerScore);
        } else {console.log("SOmething went wrong, maybe a tie :-?");}
    }
    if(playerScore == 3) 
    console.log("Player is the winner!");
    else console.log("Computer is the winner!");
}

