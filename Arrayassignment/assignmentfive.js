function assignment1() {
    let tasks = [];

// Add Task
function addTask() {
    const input = document.getElementById("taskInput");
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(taskValue);
    input.value = "";
    displayTasks();
}

// Display Tasks
function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

// Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Clear All Tasks
function clearAll() {
    tasks = [];
    displayTasks();
}
}
