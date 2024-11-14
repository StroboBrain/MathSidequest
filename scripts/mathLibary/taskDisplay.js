/**
 * Displays the tasks, only one object is needed.
 */

import Task from './task.js';


class TaskDisplay {

    constructor() {
        this.taskArray = [];
    }

    addTask(task){
        this.taskArray.push(task);
    }

    displayTask(elementID){
        // Displays the current at elementID object
        
    }


}

// Named export
export { TaskDisplay };
