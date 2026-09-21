// Weekly Goal: Calculate the total weekly task goal for a user.
 
function weeklyGoal(userName, dailyGoal, bonusTasks) {
        // Output message to console
        console.log("Checking status for: " + userName);
 
        // Calculate weekly goal total based on number of workdays (5) per week
        let weeklyGoalTotal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoalTotal. 
        let totalGoal = weeklyGoalTotal + bonusTasks; 
 
        // Output results to web page
        let output = "User: " + userName + ", Total Weekly Goal: " + totalGoal;
        
        document.getElementById("goal-message").innerHTML = output;
}

// Add EventListener to btn, get form values and call weeklyGoal function
    const btn = document.getElementById("goal-btn");

    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        // Capture values
        let userName = document.getElementById("userName").value.trim();
        let dailyGoalInput = document.getElementById("dailyGoal").value;
        let bonusTasksInput = document.getElementById("bonusTasks").value;
        
        // Default to 0 if a field is left empty
        let dailyGoal = dailyGoalInput === "" ? 0 : parseInt(dailyGoalInput, 10);
        let bonusTasks = bonusTasksInput === "" ? 0 : parseInt(bonusTasksInput, 10);

        // Placeholder in the event no name is entered
        if (userName === "") {
        userName = "Guest User";
    }
        
        // Call the weeklyGoal function
        weeklyGoal(userName, dailyGoal, bonusTasks);
});