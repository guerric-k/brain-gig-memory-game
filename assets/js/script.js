// Load DOM before running the game
// Get elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Declaring Variables
    let currentLevel = 1;
    let score = 0;
    let timerInterval;
    let gameDuration = 30; // Level 1 has a duration of 30 seconds

    // Declaring imageNames at the top, globally, so it's accessible to all functions
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

    // Display Game Rules on DOM load
    rulesBox.style.display = 'block';

    // Start button click event
    startBtn.addEventListener('click', startGame);

    // Exit button click event to end the game
    exitBtn.addEventListener('click', function() {
        window.close(); // Ends the game
    });



/**
    *  Triggers rulesBox, Load grid, start timer and updateFooter
    */
function startGame() {
    console.log('Game started');
    rulesBox.style.display = 'none'; // Hide the rules modal
    loadGrid();
}

function loadGrid() {
    // New array where each image repeats four times
    let allImages = imageNames.flatMap(image => [image, image, image, image]); // Repeat each image 4 times
    
    allImages.sort(() => Math.random() - 0.5); // Shuffle images
    imageGrid.innerHTML = '';

    // Create image elements
    allImages.forEach((image, index) => {
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', `assets/images/${defaultImage}`); // Default face
        imgElement.dataset.image = image; // Store image name in a custom data attribute
        imgElement.dataset.index = index;
        imgElement.addEventListener('click', flipImage);
        imageGrid.appendChild(imgElement);
    }); 
    
}

// Flip image on click
function flipImage() {
    let clickedImage = this;
    clickedImage.src = `assets/images/${clickedImage.dataset.image}`; // Flip to actual image
    flippedImages.push(clickedImage);

}

});   


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

