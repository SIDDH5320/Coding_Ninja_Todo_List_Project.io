const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");
const totalTasks = document.getElementById("totalTasks");

addButton.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${todoText}</span>
            <button class="delete-button">Delete</button>
        `;
        todoList.appendChild(li);
        updateTotalTasks();
        todoInput.value = "";
    }
}

todoList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-button")) {
        e.target.parentElement.remove();
        updateTotalTasks();
    } else if (e.target.classList.contains("checkbox")) {
        e.target.nextElementSibling.classList.toggle("completed");
    }
});

function updateTotalTasks() {
    totalTasks.textContent = `Total tasks: ${todoList.children.length}`;
}
