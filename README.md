# Brain Gig Memory Game
Brain Gig is an interactive, fast-paced memory game designed to challenge and enhance your cognitive skills. The game tests your memory and attention to detail by having you match pairs of images under a ticking timer. With multiple levels of increasing difficulty, your goal is to match all pairs before time runs out.

Whether you’re looking for a quick mental workout or want to improve your memory, Brain Gig offers a fun and stimulating experience. Dive in and see how fast and sharp your brain really is!

![Am I responsive](/assets/images/am-i-responsive.JPG)

[View Brain Gig Memory Game live deployment here](https://guerric-k.github.io/brain-gig-memory-game/)
- - -
## Table of Contents

### [User Experience (UX)](#user-experience-ux-1)
* [User Stories](#user-stories)
### [Design](#design-1)
### [Features](#features-1)
* [Existing Features](#existing-features)
### [Features Left to Implement](#features-left-to-implement-1)
### [Technologies Used](#technologies-used-1)
### [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used-1)
### [Testing](#testing-1)
* [Validation Results](#validation-results)
* [JSHint Results](#jshint-results)
* [Manual Testing](#manual-testing)
* [Fixed Bugs](#fixed-bugs)
* [Speed Report](#speed-report)
### [Deployment](#deployment-1)
* [GitHub Pages](#github-pages)
* [Forking the GitHub Repository](#forking-the-github-repository)
* [Local Clone](#local-clone)
### [Credits](#credits-1)
* [Code](#code)
* [Content](#content)
* [Media](#media)
### [Acknowledgements](#acknowledgements-1)
---

## User Experience (UX)

The Brain Gig Memory Game has been designed with user experience in mind, offering a seamless, intuitive, and engaging gameplay that is both challenging and enjoyable. Key aspects of the user experience include:Simple and Clean Interface,  Intuitive Gameplay, Engagement with Feedback,  Accessibility, Emotional Satisfaction.

Brain Gig strikes a balance between simplicity, responsiveness, and engagement, creating a smooth and enjoyable experience for all players.

### User Stories

* First-time visitor goals
    * Understand the Game Quickly
    * CEnjoy a Smooth Onboarding Experience.
    * Engage with the Game Immediately.
    * Have Fun and Feel Challenged.

* Returning visitor goals
    * Resume Playing Without Re-learning
    * Progress Further in the Game
    * Track My Performance
    * Be Motivated to Improve.

* Frequent user goals
    * Challenge oneself with Difficult Levels
    * Achieve Higher Scores
    * Feel a Sense of Accomplishment
    * Be Immersed in a Fluid Experience
    * Enjoy a Polished, Professional Interface
---
## Design

 * Colour Scheme
    * Primary colors used on the website: ![Color Scheme](/assets/images/color-scheme.JPG)

 * Typography
    * "Roboto" font is the main font used throughout the website with sans-serif as its fallback font.

 * Wireframes
    * Pen and paper sketch

---
## Features

* The "Brain Gig Memory Game" includes several features designed to provide an engaging and challenging experience for players. Below is a breakdown of the game's core features:

### Existing Features
*  Interactive Modals
    * Rules Modal: The game begins with a modal holding the title and explaining the rules and how to play. It contains a "Start" button that begins the game when clicked.
    
    ![Rules Modal and Title](/assets/images/start-modal.JPG)

    * Win Modal: When a player successfully completes a level, a modal displays their score and congratulates them. Players can choose to proceed to the next level or exit the game.
    
    ![Win Modal](/assets/images/win-modal.JPG)

    * Lose Modal: If the player fails to match all the images within the given time, a modal appears with a "Sorry! You lost" message. Players can choose to retry the level or exit the game.
    
    ![Lose Modal](/assets/images/lose.JPG)

* Game Levels
    * Multiple Levels: The game consists of at least two levels. The      first level gives players 60 seconds to match all cards, and the second level offers 40 seconds with increased difficulty.
    * Dynamic Progression: As players complete a level, they can continue to the next, with progressively harder challenges.
    
![Game Levels](/assets/images/level1.JPG)


* Timer and Score System
    * Countdown Timer: Each level has a countdown timer that challenges players to match all pairs before the time runs out. The timer is prominently displayed to keep players aware of the remaining time.
    * Scoring Mechanism: Players earn points for every match they successfully make. The score is cumulative across levels.

![Timer and Score System](/assets/images/score-timer.JPG)

* Card Matching Grid 
    * 4x4 Grid Layout: The game displays a 4x4 grid of cards, with each card featuring an image hidden until clicked. The cards are shuffled at the beginning of each game or level.
    * Flip Animation: Clicking a card flips it, revealing an image. If two selected cards match, they remain flipped; otherwise, they flip back after a short delay.

![Card Matching Grid ](/assets/images/grid.JPG)

* Responsive Design
    * Mobile-Friendly: The game adapts to different screen sizes, ensuring that the layout works on mobile devices, tablets, and desktops.
    * Fixed Elements: Key interface elements like the "Exit" button and modals remain in a fixed position on the screen, ensuring accessibility even during scrolling.

* Exit Game Option
    * Players can exit the game at any time via a clearly marked "Exit Game" button, which is always visible at the bottom of the screen. This allows users to leave the game gracefully without needing to complete the level.

![Exit Game Option](/assets/images/exit.JPG)

* Footer Display
    * Date and Time: The current date and time are displayed at the bottom of the screen, adding a subtle detail that keeps the player aware of the real-world time.
    * Author's name

![HFooter Display](/assets/images/footer.JPG)

* User-Friendly Buttons
    * All buttons in the game are designed for ease of use, with clear labels like "Start", "Continue", and "Exit". The buttons are also designed with hover effects and responsive size adjustments for different screen sizes.

## Features Left to Implement

* Accessibility: 
    * Keyboard Navigation: The game will be made more accessible by allowing players to navigate through the interface using keyboard controls.
* Sound Effects and Animations:    
    * Winning/Losing Animations: When the player wins or loses, animations or visual effects will enhance the experience, such as confetti for wins or a red flash for losses.
    * Flip Sound Effects: Cards will have a sound effect when flipped for an enhanced sensory experience. 

---
## Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

---
## Frameworks, Libraries & Programs Used

* [Gitpod](https://www.gitpod.io/)
    * For coding.
* [Git](https://git-scm.com/)
    * for vesion control.
* [Github](https://github.com/)
    * Online storage and site deployment.
* [Google Fonts](https://fonts.google.com/)
    * Import main font the website.
* [Am I Responsive](https://ui.dev/amiresponsive)
    * Mockup picture for the README file.

    
---
## Testing

The following Testing Tools were used to ensure code was error free

* [W3C Markup Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* [JSHint](https://jshint.com/)
* [PageSpeed Insight](https://pagespeed.web.dev/)
* [Chrome Devtools](https://developer.chrome.com/docs/devtools/)

### Validation results

<details>
<summary>HTML files, no errors or warnings shown.
</summary>

![HTML validation results](/assets/images/html-validation.JPG)
</details>

<details>
<summary>CSS file, No errors or warnings shown. 
</summary>

![CSS validation result](/assets/images/css-validation.JPG)
</details>

### JSHint results

<details>
<summary>index.js, No errors were found when passing through the official Jshint validator.
</summary>

![Js file validation result](/assets/images/js-insight.JPG)
</details>

### Manual Testing 

* The game was tested on various browsers, including Google Chrome, Microsoft Edge, and DuckDuckGo.
* Testing was conducted on multiple devices, including desktop computers, laptops, tablets, and a range of mobile phones, such as the Samsung Galaxy A52 and an ultra-large screen.
* Thorough testing ensured that all buttons were functioning correctly, triggering the intended actions, and that all transitions, loops, and conditions worked as expected.
* Friends were asked to review the game to gain insights into the user experience.
* Family and friends were invited to play the game and provide feedback.
* DevTools was used to simulate and test the game on different screen sizes.
* The DevTools Console was utilized to identify and resolve any bugs such as oversized boxes and image overlapping 
* JSHint was used to check quality of the code and any errors missed by the developer.

### Fixed Bugs

* Endless looping for level progressions identified and butons used to cut loop
* Devtools used to locate image and box overflow and appropriate styling applied and fixed
* Alerts eliminated and an efficient Modal box-system introduced to the game
* players can only be able to progress now to another level upon completion of each level. No way bypass conditions.
* Users can now use buttons to exit at any stage of the game.

### Speed Report 

#### Mobile analysis
<details>
<summary>Performance
</summary>

![Mobile report](/assets/images/mobile-speed-test.JPG)
</details>

#### Desktop analysis
<details>
<summary>Performance
</summary>

![Desktop report](/assets/images/desktop-speed-test.JPG)
</details>

## Deployment

### GitHub Pages

GitHub Pages used to deploy live version of the website.
1. Log in to GitHub and locate [GitHub Repository brain-gig-memory-game](https://github.com/guerric-k/brain-gig-memory-game)
2. At the top of the Repository(not the main navigation) locate "Settings" button on the menu.
3. Scroll down the Settings page until you locate "GitHub Pages".
4. Under "Source", click the dropdown menu "None" and select "Main" and click "Save".
5. The page will automatically refresh.
6. Scroll back to locate the now-published site [link](https://guerric-k.github.io/brain-gig-memory-game/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the repository, we make a copy of the original repository on our GitHub account to view and change without affecting the original repository by using these steps:

1. Log in to GitHub and locate [GitHub Repository brain-gig-memory-game](https://github.com/guerric-k/brain-gig-memory-game)
2. At the top of the Repository(under the main navigation) locate "Fork" button.
3. Now you should have a copy of the original repository in your GitHub account.

### Local Clone

1. Log in to GitHub and locate [GitHub Repository brain-gig-memory-game](https://guerric-k.github.io/brain-gig-memory-game/)
2. Under the repository name click "Clone or download"
3. Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` and then paste The URL copied in the step 3.
7. Press Enter and your local clone will be created.

---
## Credits

### Code

 * Code structuring from the Code intitutes love-math challenge
 * The README template was helpfully provided by [Code Institute (template)](https://github.com/Code-Institute-Solutions/readme-love-maths/blob/master/README.md)
 * knowlege on Modal boxes was gained from [W3schools](https://www.w3schools.com/howto/howto_css_modals.asp)
 * The knowledge from w3schools also helped me to understand more about images and grids and how to manipulate them
 
 ### Content

  * All content was written by the developer.
  * [Font Awesome](https://fontawesome.com/) was used to obtain the free icon for the header.
  * Same icon was used to create a favicon the the website.

### Media

 * [Font Awesome](https://fontawesome.com/)
 * [Am I responsive?](https://ui.dev/amiresponsive)
 * [Images](https://freepik.com/photos) was used for the free images that make up the games grid


---

## Acknowledgements

 * My mentor Mitko Bachvarov provided helpful feedback.
 * Slack community for encouragement.