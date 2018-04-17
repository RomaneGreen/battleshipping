import {enemyShips, randNum} from "../index";


describe("index.js", () => {
    test("setup correctly", () => {
        expect(true).toBe(true);
    });

});

describe("index.js", () => {
    test("return integer", () => {
        expect(randNum).not.toBe(11);
    });

});

describe("the enemy ships", () => {
    test("The ship is in array", () => {
        expect(enemyShips).toContain("d5");
    });

});