import Dummy from "../games/isPrime/dummy";
import { describe,test, it, expect, assert} from "vitest";

var dummy = new Dummy();


test("lol",() => {
    assert(dummy.returnTrue());

})