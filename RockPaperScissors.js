
const options = ["Rock", "Paper", "Scissors"]

var results = ''
var playerScore = 0
var computerScore = 0
var roundWinner = ''


function playerSelect() {
    const playerRaw = prompt("Choose either Rock, Paper, or Scissors. Type your choice.");
    const playerLow = playerRaw.toLowerCase();
    const playerSelection = playerLow.charAt(0).toUpperCase() + playerLow.slice(1);
    return playerSelection;
    
}

function computerSelect() {
 
    const randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
}




function playRound(playerChoice, computerChoice) {
   
   
        playerChoice = playerSelect()
        computerChoice = computerSelect()
        results = 'You picked ' + playerChoice + '. The computer picked ' + computerChoice + '. '
    
       if (playerChoice === computerChoice) 
        {
            roundWinner = 'tie'
            return results + 'It was a tie! The score is still ' + playerScore + ' to ' + computerScore + '.';
        }
        else if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == 'Scissors' && computerChoice == 'Paper') 
        || (playerChoice == 'Paper' && computerChoice == 'Rock') ) 
        {
            playerScore = ++playerScore;
            if (playerScore === 1) {
                return results + ' ' + 'Nice start! You\'ve got ' + playerScore + ' points.'}
            else if (playerScore === 2) {
                return results + ' ' +  'Thats two! Keep it up! You\'ve got ' + playerScore + ' points.'}
            else if (playerScore === 3) {
                return results + ' ' +  'You\'re doing great! You\'ve got ' + playerScore + ' points.'}
            else if (playerScore === 4) {
                return results + ' ' +  'Almost there! You\'ve got ' + playerScore + ' points.'}
            else {
                return results + ' ' +  'Clean Sweep! Nice work! You\'ve got ' + playerScore + ' points.'}
        }
        
        else if ((playerChoice == 'Rock' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Rock') 
        || (playerChoice == 'Paper' && computerChoice == 'Scissors') )
         {
            computerScore = ++computerScore;
            if (computerScore === 1) {
                return results + ' ' +  'Unlucky! The computer has ' + computerScore + ' points.';
            }
            else if (computerScore === 2) {
                return results + ' ' +  'Oh no! The computer has ' + computerScore + ' points.';
            }
            else if (computerScore === 3) {
                return results + ' ' +  'Keep trying! The computer has ' + computerScore + ' points.';
            }
            else if (computerScore === 4) {
                return results + ' ' +  'Do\'t give up! The computer has ' + computerScore + ' points.';
            }
            else {
                return 'You lost the game! The computer has ' + computerScore + ' points.';
             } 
        }

       
    }

    function gameWinner() {
        if (playerScore > computerScore) {
            return 'You won the game! You had ' + playerScore + ' points, the computer only had ' + computerScore + ' points.';
        }

        if (computerScore > playerScore) {
            return 'You lost the game! The computer had ' + computerScore + ' points, whilst you only had ' + playerScore + ' points.';
        }
        
        if (playerScore === computerScore) {
            return 'It was a tie! You and the computer both had ' + playerScore + ' points.';
        }
    }
        
        
    
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(playRound());
console.log(gameWinner());