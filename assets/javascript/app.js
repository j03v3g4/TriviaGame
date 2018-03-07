// Massive function to hold all of my script
$(document).ready(function() {

// Global Variables
    // Create an array of questions and their respective answers
    var questions = [
        {
            id: "one",
            question: "Green is a color.",
            choices: ["TRUE", "FALSE"],
            answer: 1  
        },

        {
            id: "two",
            question: "Amsterdam is a country.",
            choices: ["TRUE", "FALSE"],
            answer: 2  
        },

        {
            id: "three",
            question: "Seven plus seven equals seventy-seven.",
            choices: ["TRUE", "FALSE"],
            answer: 2  
        }
    ]

    // Set initial start time
    var time = 20

    // Score
    var rightAnswers = 0
    var wrongAnswers = 0
    var unanswered = 0

    // Enable start button
        // Hide button
        // Start timer
            // If timer expires
                // End game
                // Update and display score
        // Display questions
            // Buttons for answers
        // Enable submit button
            // Update and display score on click
            // Display start button that resets the game
});