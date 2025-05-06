import { describe,test, it, expect, assert} from "vitest";
import AdditionGenerator from "../../../libaries/mathQuestions/additionGenerator";


describe('check AdditionTaskGenerator', () => {
    it('check the the set', () => {
        const additionGenerator = new AdditionGenerator(1, 10);
        const task = additionGenerator.generateQuestionWithTarget(5);
        expect((task.getOperator())).toBe("+");
        expect((task.getSolution())).toBe(5);
        expect(task.getOperand1() + task.getOperand2()).toBe(5);
    });



});
