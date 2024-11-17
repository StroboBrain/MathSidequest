/**
 * Task object to hold a task, has no functionality in creating a task
 */


class Task {

    constructor(solution, taskAsString) {
        this.solution = solution;
        this.taskAsString = taskAsString;
    }

    logTask() {
        console.log(`Task: ${this.name}, Description: ${this.description}`);
    }

    // check if a solution is valid for a specific task
    confirmSolution(input){
        return this.solution == input;
    }
}

// This class holds a list of task
class TaskList {

    constructor(){
        this.taskList = [];
    }
    addTask(task){
        this.taskList.append(task)
    }

}

// Named export
export { Task };
export {TaskList};
