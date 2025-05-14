export default class NumberSwipeStatisticModel {

    #numberStats = new NumberStats();
    #propertiesStats = new Map();

    constructor(){
        this.#numberStats = new NumberStats();
        this.#propertiesStats = new Map();
        this.#initPropertiesStats();
    }

    #generateAllPropertiesStats(){
        let noMin = true;
        let total = 0;
        let summe = 0;

        // Current Version always resets the properties stats
        this.#initPropertiesStats();
        // Iterate over the numberstats
        for (const [key, amountLiked] of this.#numberStats.getNumberHashmap()){
            if (amountLiked > 0){
                total += amountLiked;
                summe += key * amountLiked;
                // Because the numberstats are sorted
                if (noMin){
                    this.#propertiesStats.set('min', key);
                }
                noMin = false;
                this.#propertiesStats.set('max', key);
                this.#createNumberProperty(key);
            }
        }
        this.#propertiesStats.set('total', total);
        this.#propertiesStats.set('sum', summe);
        
    }

    #initPropertiesStats(){
        this.#propertiesStats.set('total', 0);
        this.#propertiesStats.set('odd', 0);
        this.#propertiesStats.set('even', 0);
        this.#propertiesStats.set('prime', 0);
        this.#propertiesStats.set('min', 0);
        this.#propertiesStats.set('max', 0);
        this.#propertiesStats.set('sum', 0);
    }

    #createNumberProperty(number){
        if (this.#isEven(number)){
            this.#propertiesStats.set('even', this.#propertiesStats.get('even') + 1);
        } else {
            this.#propertiesStats.set('odd', this.#propertiesStats.get('odd') + 1);
        }
        if (this.#isPrime(number)){
            this.#propertiesStats.set('prime', this.#propertiesStats.get('prime') + 1);
        }
    }

    #isEven(number){
        return number % 2 === 0;
    }

    #isPrime(number){
        if (number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i === 0) return false;
        }
        return true;
    }

    addLikedNumber(number){
        this.#numberStats.addLikedNumber(number);
    }

    getNumberStats(){
        return this.#numberStats.getNumberHashmap();
    }

    getPropertiesStats(){
        this.#generateAllPropertiesStats
        return this.#propertiesStats;
    }

    getAmountOfNumbersSwiped(){
        this.#generateAllPropertiesStats();
        let total = this.#propertiesStats.get('total');
        if (total === undefined){
            total = 0;
        }
        return total;
    }

}

class NumberStats {
    // Only numbers from 1 to 99 are supported
    #numberHashmap = new Map();

    constructor(data){
        if (!data){
            this.#initHashmap();
        }
        for (let i = 1; i <= 99; i++){
            this.#numberHashmap.set(i, 0);
        }
    }

    #initHashmap(){
        for (let i = 1; i <= 99; i++){
            this.#numberHashmap.set(i, 0);
        }
    }

    addLikedNumber(number){
        if (this.#numberHashmap.has(number)){
            this.#numberHashmap.set(number, this.#numberHashmap.get(number) + 1);
        } else {
            console.error(`Number ${number} not found in hashmap.`);
        }
    }

    getNumberHashmap(){
        return this.#numberHashmap;
    }
}