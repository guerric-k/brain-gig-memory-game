// Load DOM before running the game
// Get elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Declaring Variables
    let currentLevel = 1;
    let score = 0;
    let timerInterval;
    let gameDuration = 60; // Level 1 has a duration of 60 seconds

    // Declaring imageNames at the top, globally, so it's accessible to all functions
    const imageNames = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
    const defaultImage = 'image5.jpg'; // Image to be shown before flipping
    let flippedImages = [];
    let matches = 0;

    // Get Id of Modal and Buttons
    const rulesBox = document.getElementById('rulesBox');
    const winModal = document.getElementById('winModal');
    const startBtn = document.getElementById('startBtn');
    const imageGrid = document.getElementById('imageGrid');
    const timeLeftSpan = document.getElementById('timeLeft');
    const scoreValue = document.getElementById('scoreValue');
    const levelTitle = document.getElementById('levelTitle');
    const exitGameBtn = document.getElementById('exitGameBtn'); 
    const datetime = document.getElementById('datetime');
    const loseModal = document.getElementById('loseModal');
    const continueWinBtn = document.getElementById('continueWinBtn');
    const exitWinBtn = document.getElementById('exitWinBtn');
    const continueLoseBtn = document.getElementById('continueLoseBtn');
    const exitLoseBtn = document.getElementById('exitLoseBtn');
    const winScore = document.getElementById('winScore');
    const loseScore = document.getElementById('loseScore');


    // Display Game Rules on DOM load
    rulesBox.style.display = 'block';

    // Start button click event
    startBtn.addEventListener('click', function() {
        rulesBox.style.display = 'none'; // Hide the rules modal
        startGame(); // Start Level 1
    });

    //Win and Lose Modal 
    function showWinModal() {
        winScore.textContent = score;
        winModal.style.display = 'block';
    }
    
    function showLoseModal() {
        loseScore.textContent = score;
        loseModal.style.display = 'block';
    }
    
    // Event Listeners for Win Modal
    continueWinBtn.addEventListener('click', function() {
        winModal.style.display = 'none'; // Hide the win modal
        if (currentLevel === 1) {
            nextLevel(); // Load Level 2
        } else {
            resetToLevel1(); // Reset to Level 1 after finishing Level 2
        }
    });

    exitWinBtn.addEventListener('click', function() {
        closeGame(); // Handle exit game
    });

    // Exit button click event to end the game
    exitGameBtn.addEventListener('click', function() {
        closeGame(); // Handle exit game
    });


    // Event Listeners for Lose Modal
    continueLoseBtn.addEventListener('click', function() {
        loseModal.style.display = 'none'; // Hide the lose modal
        if (currentLevel === 1) {
        startGame(); // Reload Level 1
        } else {
        startLevel2(); // Reload Level 2
        }
    });

    exitLoseBtn.addEventListener('click', function() {
    closeGame(); // Exit game
    });

 /**
  * Starts game after DOM load and triggered by click event
  */   
function startGame() {
    console.log('Game started');
    rulesBox.style.display = 'none'; // Hide the rules modal
    loadGrid(); 
    resetGame(); 
    startTimer(); 
    updateFooter(); 
}

function loadGrid() {
   let allImages = imageNames.flatMap(image => [image, image, image, image]);
   allImages.sort(() => Math.random() - 0.5); // Shuffle images
   imageGrid.innerHTML = ''; // Clear the grid
   
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

        if (matches === 8) {
            clearInterval(timerInterval);
            showWinModal()
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

        if (timeLeft === 0 && matches < 8) {
            clearInterval(timerInterval);
            showLoseModal(); // Show the modal when the timer reaches 0
        }
    }, 1000);
}
// Move to the next level or reload the current one
function nextLevel() {
    if (currentLevel =2) {
        gameDuration = 40; // Level 2 has 40 seconds
        levelTitle.textContent = 'Level 2';
        startGame(); // Restart game for level 2
    }
}

// Function to reset the game to Level 1
function resetToLevel1() {
    currentLevel = 1;
    gameDuration = 60; // Reset to 60 seconds for Level 1
    levelTitle.textContent = 'Level 1';
    startGame(); // Start Level 1 again
}

// Function to handle starting Level 2 directly 
function startLevel2() {
    currentLevel === 2;
    gameDuration = 40;
    levelTitle.textContent = 'Level 2';
    startGame();
}

// Reset game values
function resetGame() {
    score = 0;
    matches = 0;
    scoreValue.textContent = score;
    clearInterval(timerInterval);
}

function closeGame() {
    document.body.innerHTML = "<h1 class='centered'>Game Over! Thanks for playing!</h1>";
}

});

// Update footer with date and session time
function updateFooter() {
    const now = new Date();
    datetime.textContent = `Date: ${now.toLocaleString()}`;
}

