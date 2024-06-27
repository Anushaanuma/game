document.getElementById("startGame").addEventListener("click", function() {
    let playGame = confirm("Shall we play rock, paper, or scissors?");
    const choices = ["rock", "paper", "scissors"];
    const results = ["Tie game!", "Computer wins!", "Player wins!"];

    while (playGame) {
        let playerChoice = prompt("Please enter rock, paper, or scissors.");
        if (playerChoice) {
            let playerOne = playerChoice.trim().toLowerCase();
            if (choices.includes(playerOne)) {
                let computerChoiceIndex = Math.floor(Math.random() * 3);
                let computer = choices[computerChoiceIndex];

                let result = "";
                if (playerOne === computer) {
                    result = results[0]; // Tie game
                } else if (
                    (playerOne === "rock" && computer === "paper") ||
                    (playerOne === "paper" && computer === "scissors") ||
                    (playerOne === "scissors" && computer === "rock")
                ) {
                    result = `playerOne: ${playerOne}\nComputer: ${computer}\n${results[1]}`; // Computer wins
                } else {
                    result = `playerOne: ${playerOne}\nComputer: ${computer}\n${results[2]}`; // Player wins
                }

                alert(result);
                playGame = confirm("Play Again?");
            } else {
                alert("You didn't enter rock, paper, or scissors.");
            }
        } else {
            alert("I guess you changed your mind. Maybe next time.");
            playGame = false;
        }
    }
    alert("Ok, thanks for playing.");
});
