// Weekly Goal: Calculate the total weekly task goal for a user.
        
        // Declare variables and values
        let userName = "Jane Doe";

        let dailyGoal = "5";

        let bonusTasks = Number("2"); 
 
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
    btn.addEventListener("click", function() {
        event.preventDefault(); // Prevent form submission
        let userName = document.getElementById("userName").value;
        let dailyGoal = parseInt(document.getElementById("dailyGoal").value);
        let bonusTasks = parseInt(document.getElementById("bonusTasks").value);
        weeklyGoal(userName, dailyGoal, bonusTasks);
});