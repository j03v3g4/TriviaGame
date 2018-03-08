//Run code when page loads
window.onload = function() {
    // Enable start button
    $("#start").on("click", start);
}
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

    // Score
    var rightAnswers = 0
    var wrongAnswers = 0
    var unanswered = 0

    // Timer
    var time = 20;
    var intervalId;
    
    // Reset function to restart the game
    function reset() {
        time = 20;
        $("#timer").text(time + "seconds remaining...");
    }

    // Start function to begin the game
    function start() {
        intervalId = setInterval(decrement, 1000);
        // Hide button
        $("#start").hide();
    }

    // Stop function for end of game
    function stop() {
        clearInterval(intervalId);
    }

    // Decrement function
    function decrement() {
        time--;
        $("#timer").text(time + " seconds remaining...");
        // If timer expires
        if(time === 0) {
            // End game
            alert("Times Up!");
            stop();
            // Update and display score
    }
    }
    
            
                
        // Display questions
            // Buttons for answers
        // Enable submit button
            // Hide button
            // Stop timer
            // Update and display score on click
            // Display start button that resets the game