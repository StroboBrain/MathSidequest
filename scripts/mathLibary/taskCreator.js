/**
 *  Creates a taskList
 * 
 * Idea is to only have one taskCreator
 */

import * as task from './task.js';

class TaskCreator {
    #possibleOperation = ["+","-","*","/","^"];



    constructor (taskType, numberOfTasks){
        this.numberOfTasks = numberOfTasks;
        this.taskTyp = taskType;


    }
}