const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

let totalTasks = 0;
function updateCount() {
    taskCount.textContent = totalTasks;
}
function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = text;

    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function() {
        li.remove();
        totalTasks--;
        updateCount();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    totalTasks++;
    updateCount();
    taskInput.value = "";
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});