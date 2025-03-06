import { describe,test, it, expect, assert} from "vitest";
import IsPrimeModel from "../games/isPrime/isPrimeModel.js";



describe('check IsPrimeModel prime set', () => {
    it('check the the set', () => {

        const check = IsPrimeModel.PRIME_SET;

        for (const item of check) {
            expect(isPrime(item)).toBe(true);
        }

    });

    it("Taskarray", () => {
        const temp = new IsPrimeModel();
        const testArray = temp.createTaskArray(3,3);
        console.log(testArray);

        expect(testArray.length).toBe(6);
    });



});




// Helper Functions


function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Other even numbers are not prime

    // Check for divisors up to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}