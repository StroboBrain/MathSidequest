// Idea of PrimitveQuestionObject is a simple object that contains only one kind of operation and two operands

export default class PrimitiveQuestionObject {
    constructor(operand1, operand2, operator, solution){
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.operator = operator;
        this.solution = solution;
    }
    getOperand1(){
        return this.operand1;
    }
    getOperand2(){
        return this.operand2;
    }
    getOperator(){
        return this.operator;
    }
    getSolution(){
        return this.solution;
    }
}