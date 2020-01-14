// UDEMY JAVASCRIPT TUTORIAL
// SECTION 4 - JAVASCRIPT IN THE BROWSER: DOM MANIPULATION

// *****************************************************************************************
// The DOM and DOM Manipulation

// DOM Manipulation is the technical term for making JS interact with a webpage

// What is DOM?
// Stands for Document Object Model
// It is the structured representation of an HTML document
// The DOM is used to connect webpages to scripts like Javascript
// We can access and interact with objects in the DOM of a HTML page
// Javascript and DOM are two different thing!
// There are special Javascript 'methods' that allow us to interact with and manipulate the DOM/Webpages
// These methods are functions attached to objects, these objects are the document objects.
// This is the object that gives us access to the DOM

// *****************************************************************************************
// Project setup and Details

/*GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// *****************************************************************************************
// First DOM Access and Manipulation

// Setting the variables needed for the game - These are the global scope variables
//These variables don't need to be defined here but they must be DECLARED

let scores, roundScore, activePlayer;

innit();

// create a random number between 1 and 6
// dice = Math.floor(Math.random() * 6) + 1;

//The document object will give us access to the DOM
//A query selector can be used to select a particular piece of information in the same way as we would in CSS

//Inner HTML allows you to write HTML not just plain text
// document.querySelector("#current-" + activePlayer).innerHTML =
// 	"<em>" + dice + "<em>";

//textContent allows you to write  plain text
// document.querySelector("#current-" + activePlayer).textContent = dice;

// The querySelector can be used to read an element from the webpage and then store this within a variable

// The querySelector can also be used to change the CSS of a particular elements
document.querySelector(".dice").style.display = "none";

// *****************************************************************************************
// Events and Event Handling: Rolling the Dice and Updating Scores and Changing the Active Player

// Events - These are like notifcations that are sent to notify the code that something happened on the webpage
// An example is clicking a button, resizing a window, scrolling etc
// Event listeners are functions that are used to perform an action based on a certain event.
// It waits for a specific event to happen.
// An event can only be processed once all the function have been returned (the execution context stack is empty)
// Events that happen in the browser are placed in the 'Message Queue'. They wait here to be processed once the execution stack is empty
// Once the stack is empty the event listener is called, as it is a function, it gets its one execution context which is moved to the top of the stack for execution.

// Setting up an event handler
// Select the element in which the event will happen eg, the button

//There are many different type of events, these can be found on MDN
// The first part of the event listener is the event, the second part is the function that will be called as soon as the event happens
// If the function is set within the event listener, it is an annonomous function and can't be reused. If you need to reuse the function if should be delared before the event listener.

document.querySelector(".btn-roll").addEventListener("click", function() {
	// What do we need to happen when the button is clicked?
	// 1. A random number must be generated
	let dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result
	let diceDOM = document.querySelector(".dice"); // By declaring the selection of the dice a variable we avoide having to repeat the same code multiple times

	diceDOM.style.display = "block";
	diceDOM.src = "dice-" + dice + ".png";

	// 3. Update the round score but only if the rolled number is NOT 1

	if (dice !== 1) {
		//add score
		roundScore += dice; //same as writing roundScore = roundScore + dice;
		document.querySelector("#current-" + activePlayer).textContent = roundScore;
	} else {
		nextPlayer(); //Next player function stated below
	}
});

// *****************************************************************************************
// Implementing our 'Hold' Function and the DRY Principle

//Using functions to correctly apply the Don't repeat yourself principle

// Set up an event listening for the hold button

document.querySelector(".btn-hold").addEventListener("click", function() {
	//Define what we want to happen as soon as the user clicks the hold button
	//Add the current score to the player global score
	scores[activePlayer] += roundScore;
	// could also be written as
	//scores[activePlayer] = scores[activePlayer] + roundScore

	//Update the user interface
	document.querySelector("#score-" + activePlayer).textContent =
		scores[activePlayer];
	// Therefore, if its the first player it will be the first element of the array
	// If its the second player it will be the second element of the array

	//Next Player
	nextPlayer();

	//Check if the player won the game
	if (scores[activePlayer] >= 100) {
		document.querySelector("#name-" + activePlayer).textContent = "winner"; // Changes player name to "Winner" when the score reaches 100
		document.querySelector(".dice").style.display = "none";
		document
			.querySelector(".player-" + activePlayer + "-panel")
			.classList.add("winner");
		document
			.querySelector(".player-" + activePlayer + "-panel")
			.classList.remove("active");
	} else {
		nextPlayer();
	}
});

function nextPlayer() {
	//Next Player - Using the ternary operator

	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); // If active player equals 0 then active player should be 1 else, sctive player should be 0
	roundScore = 0; // Set the new players round score to 0

	// Reset the scores after each round
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	//Removing and getting classes, change which player is being indicated as the active player

	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".player-1-panel").classList.toggle("active");

	//document.querySelector('.player-0-panel').classList.remove('active');
	//document.querySelector('.player-1-panel').classList.add('active');

	//Hide dice when the new round starts
	document.querySelector(".dice").style.display = "none";
}

// *****************************************************************************************
// Create a Game Initialization Function - when we hit the "new game' button, the game should start from the beginning
// The innit functioncan now be used at the beginning of the game also so we do not repeat the code

document.querySelector(".btn-new").addEventListener("click", innit);

// reset the player scores
function innit() {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;

	document.querySelector(".dice").style.display = "none";
	// Set all 4 starting scores values to 0
	document.getElementById("score-0").textContent = "0";
	document.getElementById("score-1").textContent = "0";
	document.getElementById("current-0").textContent = "0";
	document.getElementById("current-1").textContent = "0";

	// Change back the player names from winner to player 1/2
	document.getElementById("name-0").textContent = "Player 1"; // Changes player name back
	document.getElementById("name-1").textContent = "Player 2"; // Changes player name back

	//Remove the winner and active class from both player names (because we don't know who won and we want neither to be the active player)
	//The active player is added back in for Player 0 to show which player should start
	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");
	document.querySelector(".player-1-panel").classList.remove("active");
}
// *****************************************************************************************
// Using State Variables - tells us the condition of a system
// If our game playing or not playing
// There are many things we only want to do when the game is active
