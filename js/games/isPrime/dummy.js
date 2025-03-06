export default class Dummy {
    // Public method
    returnTrue() {
        console.log("inside returnTrue");
        return this.#privateTrueVersion();
    }

    // Private method
    #privateTrueVersion() {
        console.log("inside #returnTrue");
        return true;
    }
}