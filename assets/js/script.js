// Load DOM before running the game
// Get elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
	// Declaring Variables
    let currentLevel = 1;
    let score = 0;
    let timerInterval;
    let gameDuration = 30; // Level 1 has a duration of 30 seconds
    const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    const defaultImage = 'image5.jpg'; // Image to be shown before flipping
    let flippedImages = [];
    let matches = 0;

    // Get Id of Modal and Buttons
    const rulesBox = document.getElementById('rulesBox');
    const startBtn = document.getElementById('startBtn');
    const exitBtn = document.getElementById('exitBtn');
    const imageGrid = document.getElementById('imageGrid');
    const timeLeftSpan = document.getElementById('timeLeft');
    const scoreValue = document.getElementById('scoreValue');
    const levelTitle = document.getElementById('levelTitle');
    const sessionDuration = document.getElementById('sessionDuration');
    const datetime = document.getElementById('datetime');

    // Start button click event
    startBtn.addEventListener('click', startGame);

});


/**
 *  Triggers rulesBox, Load grid, start timer and updateFooter
 */
function startGame() {
        rulesBox.style.display = 'none'; // Hide the rules modal
        resetGame();
        loadGrid();
        startTimer();
        updateFooter();
}

function loadGrid() {
  

}

function flipImage() {

}

function checkForMatch() {

}


function startTimer() {

}

function nextLevel() {

}

function reloadLevel() {

}

function resetGame() {

}

function updateFooter() {

}

