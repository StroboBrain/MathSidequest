import Dummy from "../games/isPrime/dummy";
import { describe, test, it, expect, assert } from "vitest";

// Create an instance of Dummy
const dummy = new Dummy();

describe("Dummy Class", () => {
    test("returnTrue() should return true", () => {
        // Alternatively, you can use expect for better readability
        expect(dummy.returnTrue()).toBe(true);
    });
});