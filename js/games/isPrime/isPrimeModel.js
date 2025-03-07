export default class IsPrimeModel {
    // Static field containing a set of prime numbers
    static PRIME_SET = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]);

    constructor() {
        // Constructor can be empty if no instance-specific initialization is needed
    }

    // Returns an array of random primes from PRIME_SET
    genenrateRandomPrime(amount) {
        // Convert the static set to an array
        let primes = Array.from(IsPrimeModel.PRIME_SET);
        let primesToReturn = [];

        for (let i = 0; i < amount; i++) {
            // Generate a random index
            let randomIndex = Math.floor(Math.random() * primes.length);
            // Add the randomly selected prime to the result array
            primesToReturn.push(primes[randomIndex]);
            // Remove the selected prime from the array to avoid duplicates
            primes.splice(randomIndex, 1);
        }
        return primesToReturn;
    }

    generateRandomNonPrimes(amount){
        // Current maximum set at 120
        const maxRange = 120;
        let numberArray = [];
        for (let i = 0; i<amount; i++) {
            let temp = Math.floor(Math.random()*120);
            // If the number is not prime, it will be added to the array
            if (!this.checkIfPrime(temp)){
                numberArray.push(temp);
            } else {
                numberArray.push(1+temp);
            }
        }
        return numberArray;
    }

    createTaskArray(amountPrime,amountNonPrime) {
        let nonPrimes = this.generateRandomNonPrimes(amountNonPrime);
        let primes = this.genenrateRandomPrime(amountPrime);
        let result = []

        // Randomly choose the numbers
        while (nonPrimes.length>0 && primes.length>0){
            if (Math.random() < 0.5) {
                result.push(primes.pop());
            } else {
                result.push(nonPrimes.pop());
            }
        }
        // Add the rest
        result = result.concat(primes).concat(nonPrimes);
        return result;
    }

    // Private functions

    checkIfPrime(number){
        return IsPrimeModel.PRIME_SET.has(number);
    }

}