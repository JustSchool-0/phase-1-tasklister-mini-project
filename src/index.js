document.addEventListener("DOMContentLoaded", () => {
    const taskList = new TaskList();

    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");

    const tasksElement = document.getElementById("tasks");

    const update = () => tasksElement.innerHTML = taskList.updateTasks();

    newTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const description = newTaskDescription.value;
        if (description) {
            taskList.createTask(description);
            e.target.reset();
            update();
        }
    });

    tasksElement.addEventListener("click", (e) => {
        if (e.target.nodeName === "BUTTON") {
            taskList.deleteTask(e.target.dataset.description);
            update();
        }
    });
});