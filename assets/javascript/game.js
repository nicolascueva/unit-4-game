var computerScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var userScore = 0;
var wins = 0;
var losses = 0;
var redGemValue = Math.floor(Math.random() * 12) + 1;
var blueGemValue = Math.floor(Math.random() * 12) + 1;
var yellowGemValue = Math.floor(Math.random() * 12) + 1;
var greenGemValue = Math.floor(Math.random() * 12) + 1;


$(document).ready(function () {
    $("#computerScore").append(computerScore);

    $("#redGemValue").click(function () {
        console.log(redGemValue);

    });

    $("#blueGemValue").click(function () {
        console.log(blueGemValue);

    });

    $("#yellowGemValue").click(function () {
        console.log(yellowGemValue);

    });

    $("#greenGemValue").click(function () {
        console.log(greenGemValue);

    });








});