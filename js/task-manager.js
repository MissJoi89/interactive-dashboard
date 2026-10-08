// Declare the global array to track tasks
let myTasks = [];

// Weekly Goal: Calculate the total weekly task goal for a user.
 function weeklyGoal(userName, dailyGoal, bonusTasks) {
    // Output message to console
    console.log("Checking status for: " + userName);
 
    // Calculate weekly goal total based on number of workdays (5) per week
    let weeklyGoalTotal = dailyGoal * 5; 
 
    // Add bonusTasks to weeklyGoalTotal. 
    let totalGoal = weeklyGoalTotal + bonusTasks; 
 
    // Output results to web page
    let output = `<strong>User:</strong> ${userName} | <strong>Total Weekly Goal:</strong> ${totalGoal} Tasks`;
        
    document.getElementById("goal-message").innerHTML = output;
}

// Add EventListener and DOM Manipulation
const goalBtn = document.getElementById("goal-btn");

goalBtn.addEventListener("click", function(event) {
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

// Target "Add Task" button directly
const addTaskButton = document.getElementById("add-task");

// "click" event listener for the "Add Task" button form
addTaskButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent standard submission page reload
    
    const taskInput = document.getElementById("task-name");
    const taskText = taskInput.value.trim();
    
    // Validate that the task field isn't empty
    if (taskText === "") {
        alert("Please enter a task description before adding.");
        return;
    }
    
    // Push the clean task string into our storage array
    myTasks.push(taskText);
    
    // Log to console
    console.log("Task added: " + taskText);
    console.log("Current Tasks Array: ", myTasks);
    
    // Render the updated array checklist out to the webpage DOM
    renderTaskList();
    
    // Reset the input field so the user can type a new task
    taskInput.value = "";
});

// Helper function to build and render the dynamic layout checklist 
function renderTaskList() {
    const taskListContainer = document.getElementById("task-list");
    
    // Clear out current DOM contents to prevent duplication of items on re-render
    taskListContainer.innerHTML = "";
    
    // If the array is empty, don't render anything
    if (myTasks.length === 0) {
        return;
    }
    
    // Create a Bootstrap list-group wrapper container called taskUlElement
    const taskUlElement = document.createElement("ul");
    taskUlElement.className = "list-group shadow-sm mt-2";
    
    // Loop through the tasks array using a standard forEach loop
    myTasks.forEach(function(task, index) {
        // Create the inner listing using taskLiElement
        const taskLiElement = document.createElement("li");
        taskLiElement.className = "list-group-item d-flex justify-content-between align-items-center small";

        // Create the inner text and checkbox wrapper elements
        const contentWrapper = document.createElement("div");
        contentWrapper.innerHTML = `
            <input class="form-check-input me-2" type="checkbox" id="check-${index}">
            <label class="form-check-label" for="check-${index}">${task}</label>
        `;
        
        // Dynamically create the button element node
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-link text-danger p-0 border-0";
        deleteBtn.innerHTML = "&times;";
        deleteBtn.title = "Remove item";
        deleteBtn.setAttribute("onclick", `deleteTask(${index})`);
        
        // Append the content and the button to <li>
        taskLiElement.appendChild(contentWrapper);
        taskLiElement.appendChild(deleteBtn); // <-- Appends button directly to the <li>
        
        // Append <li> to <ul>
        taskUlElement.appendChild(taskLiElement);
    });
    
    // Output the fully assembled <ul> onto your webpage
    taskListContainer.appendChild(taskUlElement);
}

// Global scope removal function attached to delete buttons
window.deleteTask = function(index) {
    console.log("Removing task index: " + index + " (" + myTasks[index] + ")");
    
    // Remove the item from our index track array position
    myTasks.splice(index, 1);
    
    // Re-render the visual display list
    renderTaskList();
};