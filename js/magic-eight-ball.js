// Array of possible Magic Eight Ball answers
let answers = [
"Yes, most definitely!",
"No, absolutely not.",
"Ask again later.",
"Outlook is positive.",
"Highly unlikely.",
"Without a doubt!",
"Cannot predict at this time.",
"Signs point to yes."
];

// Implement a function called displayAnswer() to do the following:
function displayAnswer() {

// Generate a random index to select a random answer from the array.
let randomIndex = Math.floor(Math.random() * answers.length);
let answer = answers[randomIndex];

// Display the selected answer in the "circle" div
let circle = document.getElementById("circle");

circle.style.display = "block";
circle.innerHTML = answer;
}

// Create an event listener using addEventListener()
// for the “mousedown” event on the “ball”
document.getElementById("ball").addEventListener("mousedown", function () {

// Use an “if” statement to see if a question is typed into the question field
// Use an “else” statement to run the displayAnswer() function
let question = document.getElementById("question").value;

if (question.trim() === "") {
alert("Please enter a yes/no question.");
} else {
// Display a random answer
displayAnswer();
}
});

// Create another event listener using addEventListener() 
// for the “click” event on the “reset” button
document.getElementById("reset").addEventListener("click", function () {

// Hide the answer circle when the form is reset
document.getElementById("circle").style.display = "none";
});

// BONUS CHALLENGE
// Use an event listener to run when the "Add New Response" button is clicked
document.getElementById("addResponse").addEventListener("click", function () {

    // Ask the user for a new Magic Eight Ball response
    let newResponse = prompt("Enter a new response for the Magic Eight Ball:");

    // Use an if statement to see if something was entered
    // if yes, add the new response to the answers array
    if (newResponse && newResponse.trim() !== "") {

        answers.push(newResponse);

        // Output both the new response added along with the current number of responses
        console.log("New response added: " + newResponse);
        console.log("Current number of responses: " + answers.length);
    }
});