// Declare the global array to track tasks
let myTasks = [];

document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const deleteListBtn = document.getElementById("delete-list");

    // Form Submission Event Listener
    if (taskForm) {
        taskForm.addEventListener("submit", (event) => {
            event.preventDefault();
            addTask();
        });
    }

    // Event Listener configuration for deleting the list
    if (deleteListBtn) {
        deleteListBtn.addEventListener("click", () => {
            deleteTaskList();
        });
    }

    renderTaskList();
});

// Function for adding a new task object
function addTask() {
    const nameInput = document.getElementById("task-name");
    const prioritySelect = document.getElementById("task-priority");
    const importantCheckbox = document.getElementById("task-important");

    const taskName = nameInput.value.trim();
    if (taskName === "") return;

    // Create custom task
    const newTask = {
        id: myTasks.length > 0 ? myTasks[myTasks.length - 1].id + 1 : 1,
        name: taskName,
        priority: prioritySelect.value,
        isImportant: importantCheckbox.checked,
        isCompleted: false
    };

    myTasks.push(newTask);

    // Everytime a task is added, updated, and/or deleted, the full task list
    // must be logged into the console using console.log(JSON.stringify(myTasks));
    console.log(JSON.stringify(myTasks));

    renderTaskList();

    nameInput.value = "";
    prioritySelect.value = "Medium";
    importantCheckbox.checked = false;
}

function deleteTaskList() {
    if (myTasks.length === 0) {
        alert("The task queue list structure is already clean!");
        return;
    }
    
    if (confirm("Are you sure you want to delete the entire list layer contents?")) {
        myTasks = [];
        console.log(JSON.stringify(myTasks));
        renderTaskList();
    }
}

// Function to handle toggle completion metrics
function toggleTaskComplete(taskId) {
    const taskObj = myTasks.find(t => t.id === taskId);
    if (taskObj) {
        taskObj.isCompleted = !taskObj.isCompleted;
        console.log(JSON.stringify(myTasks));
        renderTaskList();
    }
}

function deleteSingleTask(taskId) {
    const targetTask = myTasks.find(t => t.id === taskId);
    console.log("Removing task ID: " + taskId + " (" + (targetTask ? targetTask.name : "Unknown") + ")");
    
    myTasks = myTasks.filter(t => t.id !== taskId);
    
    // Log structural database layout payload adjustments
    console.log(JSON.stringify(myTasks));
    renderTaskList();
}

// Helper function to build and render out elements
function renderTaskList() {
    const taskListContainer = document.getElementById("task-list");
    if (!taskListContainer) return;

    taskListContainer.innerHTML = "";

    // Empty list container placeholder
    if (myTasks.length === 0) {
        taskListContainer.innerHTML = '<p class="text-muted small text-center my-2">No active tasks logged.</p>';
        return;
    }

    // Build functional container structure node manually using DOM definitions
    const ulElement = document.createElement("ul");
    ulElement.className = "list-group shadow-sm mt-2";

    myTasks.forEach((task) => {
        const liElement = document.createElement("li");
        liElement.className = "list-group-item d-flex justify-content-between align-items-center small py-2";

        // Layout control container
        const leftSection = document.createElement("div");
        leftSection.className = "d-flex align-items-center flex-grow-1 me-2";

        // Checkbox element node configured
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2 flex-shrink-0";
        checkbox.checked = task.isCompleted;
        checkbox.addEventListener("change", () => toggleTaskComplete(task.id));

        // Content string data holder
        const textSpan = document.createElement("span");
        textSpan.className = "text-break me-2";
        textSpan.innerHTML = `${task.name} <span class="badge bg-secondary ms-1" style="font-size:0.65rem;">${task.priority}</span>`;

        if (task.isImportant) {
            textSpan.style.color = "red";
            textSpan.style.fontWeight = "bold";
        }
        
        if (task.isCompleted) {
            textSpan.style.textDecoration = "line-through";
            if (!task.isImportant) {
                textSpan.style.color = "#6c757d"; // Mute simple completed components 
            }
        }

        // Create standalone item remove/delete layout action button component nodes
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "btn btn-sm btn-link text-danger p-0 border-0 fs-5 text-decoration-none lh-1";
        deleteBtn.innerHTML = "&times;";
        deleteBtn.title = "Remove task";
        
        deleteBtn.addEventListener("click", () => deleteSingleTask(task.id));

        leftSection.appendChild(checkbox);
        leftSection.appendChild(textSpan);
        liElement.appendChild(leftSection);
        liElement.appendChild(deleteBtn);
        ulElement.appendChild(liElement);
    });

    // Append full rendering component output block container
    taskListContainer.appendChild(ulElement);
}