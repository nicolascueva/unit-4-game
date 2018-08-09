$(document).ready(function () {
    //////// VARIABLES
    var computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var redGemValue = Math.floor(Math.random() * 12) + 1;
    var blueGemValue = Math.floor(Math.random() * 12) + 1;
    var yellowGemValue = Math.floor(Math.random() * 12) + 1;
    var greenGemValue = Math.floor(Math.random() * 12) + 1;
    var youWin = "You Win!";
    var youLose = "You Lose!";



    ////// Values at start of page load
    $("#computerScore").html(computerScore);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#userScore").html(userScore);
    ////// win/ lose functions
    function gameWin() {
        $("#endNotification").html(youWin);
        wins++;
        $("#wins").text(wins);
        reset();
    }

    function gameLose() {
        $("#endNotification").html(youLose);
        losses++;
        $("#losses").text(losses);
        reset();
    }
    ////////// Reset game function
    function reset() {
        computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#computerScore").html(computerScore);
        redGemValue = Math.floor(Math.random() * 12) + 1;
        blueGemValue = Math.floor(Math.random() * 12) + 1;
        yellowGemValue = Math.floor(Math.random() * 12) + 1;
        greenGemValue = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        $("#userScore").html(userScore);
    }



    ///////////////// gem values+ if statements
    $("#redGemValue").click(function () {
        userScore = userScore + redGemValue;
        $("#userScore").html(userScore);


        if (userScore === computerScore) {
            console.log("you win");
            gameWin();
        }
        else if (userScore > computerScore) {
            console.log("you lose");
            gameLose();
        }
    });

    $("#blueGemValue").click(function () {
        userScore = userScore + blueGemValue;
        $("#userScore").html(userScore);


        if (userScore === computerScore) {
            console.log("you win");
            gameWin();
        }
        else if (userScore > computerScore) {
            console.log("you lose");
            gameLose();
        }

    });

    $("#yellowGemValue").click(function () {
        userScore = userScore + yellowGemValue;
        $("#userScore").html(userScore);

        if (userScore === computerScore) {
            console.log("you win");
            gameWin();
        }
        else if (userScore > computerScore) {
            console.log("you lose");
            gameLose();
        }

    });

    $("#greenGemValue").click(function () {
        userScore = userScore + greenGemValue;
        $("#userScore").html(userScore);

        if (userScore === computerScore) {
            console.log("you win");
            gameWin();
        }
        else if (userScore > computerScore) {
            console.log("you lose");
            gameLose();
        }

    });
    ////////////////gem values

});