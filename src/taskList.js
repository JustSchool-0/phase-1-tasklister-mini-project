class TaskList {

    constructor() {
        this.tasks = [];
    }

    createTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
    }

    updateTasks() {
        return this.tasks.map((task) => task.updateTask()).join("");
    }

    // Delete the first task we find with the given description.
    // If multiple tasks exist with the same description, only the first is deleted, and the rest are unchanged.
    deleteTask(description) {
        const index = this.tasks.findIndex((task) => task.description === description);

        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}