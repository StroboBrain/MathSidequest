/**
 * Task object to hold a task, has no functionality in creating a task
 */


class BasicTask {

    constructor(solution, taskAsString) {
        this.solution = solution;
        this.taskAsString = taskAsString;
        console.assert(eval(this.taskAsString + solution),"Solution does not fit task");
    }

    logTask() {
        console.log(`Task: ${this.taskAsString},Solution: ${this.solution}, `);
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
export { BasicTask };
export {TaskList};
