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
        let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;
        
        document.getElementById("goal-message").innerHTML = output;

        return output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {
    // Prevent the form from being submitted by using preventDefault()
    event.preventDefault();
    
    weeklyGoal("Jane Doe", 5, 2);
});