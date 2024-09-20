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
    startTimer();
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
function flipImage(e) {
    let clickedImage = e.target;
    let imageSrc = clickedImage.dataset.image;

    // Only allow flipping if less than 2 images are flipped at a time
    if (flippedImages.length < 2 && !clickedImage.classList.contains('flipped')) {
        clickedImage.setAttribute('src', `assets/images/${imageSrc}`);
        clickedImage.classList.add('flipped');
        flippedImages.push(clickedImage);

        // Check if two images are flipped
        if (flippedImages.length === 2) {
            checkForMatch();
        }
    }
}

function checkForMatch() {
    let firstImage = flippedImages[0];
    let secondImage = flippedImages[1];

    if (firstImage.dataset.image === secondImage.dataset.image) {
        // Images match, increment score and matches
        score += 5;
        scoreValue.textContent = score;
        matches += 1;
        flippedImages = [];

        if (matches === imageNames.length) {
            clearInterval(timerInterval);
            alert(`You won! Score: ${score}`);
            nextLevel();
        }
    }else {
        // No match, flip back after 2 seconds
        setTimeout(() => {
            firstImage.setAttribute('src', `assets/images/${defaultImage}`);
            secondImage.setAttribute('src', `assets/images/${defaultImage}`);
            firstImage.classList.remove('flipped');
            secondImage.classList.remove('flipped');
            flippedImages = [];
        }, 2000);
    }
}    

// Timer function for countdown
function startTimer() {
    let timeLeft = gameDuration;
    timeLeftSpan.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timeLeftSpan.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert(`You lost! Score: ${score}`);
            reloadLevel();
        }
    }, 1000);
}
// Move to the next level or reload the current one
function nextLevel() {
    if (currentLevel === 1) {
        currentLevel += 1;
        gameDuration = 20; // Level 2 has 20 seconds
        levelTitle.textContent = 'Level 2';
        startGame(); // Restart game for level 2
    } else {
        // Game over or reset for another round
        alert('Game over! Starting from Level 1.');
        currentLevel = 1;
        gameDuration = 30;
        levelTitle.textContent = 'Level 1';
        startGame(); // Restart game for level 1
    }
}

});   


function reloadLevel() {

}

function resetGame() {

}

function updateFooter() {

}

