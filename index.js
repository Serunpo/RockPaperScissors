let rounds = 1; 
let playerScore = 0;
let computerScore = 0;


// A prompt that will let player type three of the choices Rock, Paper, Scissors
function getPlayerChoice(){
    let promptPlayer = "";
    let pStatus;
    let pChoice;
    let result;

    
    

    do{
        promptPlayer = prompt("Rock, Paper, or Scissors?");
        if (promptPlayer === null){
            promptPlayer = prompt("Rock, Paper, or Scissors?");
        } else {
            result = promptPlayer.toLowerCase();
        }

        
        if (result == "rock"){
            pChoice = "Rock";
            pStatus = true;
        } else if (result == "paper"){
            pChoice = "Paper";
            pStatus = true;
        } else if (result == "scissors"){
            pChoice = "Scissors";
            pStatus = true;
        } else {
            pStatus = false;
        }
    }while(!pStatus)

    console.log("Player Choice is: "+ pChoice);
    return pChoice;
}

//Computer chooses a random number from 0 - 2 indicating Rock, Paper, Scissors.
function getComputerChoice(){
    let cChoice;
    let x = Math.floor(Math.random() * 3);

    if(x == 0){
        cChoice = "Rock";
    } else if (x == 1){
        cChoice = "Paper"
    } else {
        cChoice = "Scissors"
    }
    console.log("Computer Choice is: " + cChoice);
    return cChoice;
}

//Funtion that will play a single round
function playRound(playerChoice, computerChoice){
    
    
    if (playerChoice === "Rock" && computerChoice === "Scissors"){
        console.log("You WIN! Rock beats Scissors");
        playerScore++;
    } else if (playerChoice === "Paper" && computerChoice === "Rock"){
        console.log("You WIN! Paper beats Rock");
        playerScore++;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper"){
        console.log("You WIN! Scissors beats Paper")
        playerScore++;
    } else if (playerChoice === computerChoice){
        console.log("It's a DRAW!")
    } else {
        console.log(`You LOSE! ${computerChoice} beats ${playerChoice}.`)
        computerScore++;
    }
        
}



function playGame(){

    function playRound(playerChoice, computerChoice){
    
    
        if (playerChoice === "Rock" && computerChoice === "Scissors"){
            console.log("You WIN! Rock beats Scissors");
            playerScore++;
        } else if (playerChoice === "Paper" && computerChoice === "Rock"){
            console.log("You WIN! Paper beats Rock");
            playerScore++;
        } else if (playerChoice === "Scissors" && computerChoice === "Paper"){
            console.log("You WIN! Scissors beats Paper")
            playerScore++;
        } else if (playerChoice === computerChoice){
            console.log("It's a DRAW!")
        } else {
            console.log(`You LOSE! ${computerChoice} beats ${playerChoice}.`)
            computerScore++;
        }
            
    }

    
        
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(`Player Score: ${playerScore}    Computer Score: ${computerScore}`)


}

while (rounds <= 5){
    console.log(`ROUND: ${rounds++}`);
        playGame();

}

if (playerScore > computerScore){
    console.log("YOU'VE WON THE GAME!!!")
} else if (playerScore < computerScore){
    console.log("COMPUTER WINS!!!")
}