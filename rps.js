let playerSelection = "";
let value = -1;
let myScore = 0;
let compScore = 0;
let tie = false;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
        return true;
    } else if (playerSelection == 0) {
        if (computerSelection == 1) {
            console.log("You Lose! Paper beats Rock!");
            compScore += 1;
        } else {
            console.log("You Win! Rock beats Scissors");
            myScore += 1;
        }
    } else if (playerSelection == 1) {
        if (computerSelection == 0) {
            console.log("You Win! Paper beats Rock!");
            myScore += 1;
        } else {
            console.log("You Lose! Scissors beats Paper!");
            compScore += 1;
        }
    }  else {
        if (computerSelection == 0) {
            console.log("You Lose! Rock beats Scissors!");
            compScore += 1;
        } else {
            console.log("You Win! Scissors beats Paper!");
            myScore += 1;
        }
    }
    return false;
}

function game() {
    for (i = 0; i < 5; i++) {

        playerSelection = prompt("Choose rock, paper, or scissors: ");
        switch (playerSelection.toUpperCase()) {
            case "ROCK":
                value = 0;
                break;
            case "PAPER":
                value = 1;
                break;
            case "SCISSORS":
                value = 2;
                break;
        }

        let computer = computerPlay();
        if (playRound(value, computer)) {
            tie = true;
        }
        console.log("My Score: " + myScore + " Computer Score: " + compScore);

        if (tie) {
            i--;
        }
        tie = false;
    }

    if (myScore == compScore) {
        console.log("It's a tie");
    }
    if (myScore > compScore) {
        console.log("You Win!");
    }
    if (myScore < compScore) {
        console.log("You Lose!");
    }
}

game();