/**
 * Task object to hold a task, has no functionality in creating a task
 */


class Task {

    constructor(solution, taskAsString) {
        this.name = solution = solution;
        this.taskAsString = taskAsString;
    }

    logTask() {
        console.log(`Task: ${this.name}, Description: ${this.description}`);
    }
}

// Named export
export { Task };
