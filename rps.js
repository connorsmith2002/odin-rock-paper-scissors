let buttons = document.querySelectorAll("button");
let win = false;
let playerValue = -1;

let score = 0;
let cScore = 0;

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let c = computerPlay();
        if (button.classList.contains("rock")) {
            playerValue = 0;
        } else if (button.classList.contains("paper")) {
            playerValue = 1;
        } else {
            playerValue = 2;
        }
        playRound(playerValue, c);
    });
});

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
    let gameOver = true;

    // Configure Score
    // I choose Rock
    if (playerSelection == 0) {
        // Computer chooses rock
        if (computerSelection == 0) {
            // change nothing, it was a tie
        } else if (computerSelection == 1) {
            // Computer Chooses Paper
            cScore += 1;
            let d = document.querySelector("#compSpan");
            d.innerHTML = cScore.toString();
        } else {
            // Computer Chooses Scissors
            score += 1;
            let d = document.querySelector("#mySpan");
            d.innerHTML = score.toString();
        }
    } else if (playerSelection == 1) {
        if (computerSelection == 0) {
            score += 1;
            let d = document.querySelector("#mySpan");
            d.innerHTML = score.toString();
        } else if (computerSelection == 1) {
            // change nothing, it was a tie
        } else {
            cScore += 1;
            let d = document.querySelector("#compSpan");
            d.innerHTML = cScore.toString();
        }
    } else {
        if (computerSelection == 0) {
            cScore += 1;
            let d = document.querySelector("#compSpan");
            d.innerHTML = cScore.toString();
        } else if (computerSelection == 1) {
            score += 1;
            let d = document.querySelector("#mySpan");
            d.innerHTML = score.toString();
        } else {
            // change nothing, it was a tie
        }
    }

    if (score == 5 || cScore == 5) {
        // Determine if I am the winner
        let winner = false;
        if (score == 5) {
            winner = true;
        }

        let scores = document.querySelectorAll("span");
        scores.forEach(function (button) {
            button.removeAttribute("id");
        });

        let container = document.querySelector(".scores");

        let decision = document.createElement("h2");
        decision.classList.add("decision");
        if (winner) {
            decision.style.color = "green";
            decision.innerHTML = "Congratulations! You Win!";
        } else {
            decision.style.color = "red";
            decision.innerHTML = "That's too bad! Maybe Next Time.";
        }
        container.appendChild(decision);

        let button = document.createElement("button");
        button.classList.add("playAgain");
        button.innerHTML = "Play Again?";
        container.appendChild(button);

        button.addEventListener("click", function (e) {
            location.reload();
        });
    }
}
