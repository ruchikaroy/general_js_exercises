import { expect, test } from "vitest";
import { sum } from "./sum.js";
import { add } from "./sum.js";
import { sumPolygon } from "./sum.js";

test("test should return a sum for two numbers", () => {
    expect(sum(3, 4)).toBe(7);

})
test('test should return sum of internal angles in degrees of a Polygon', () => {
    expect(sumPolygon(3)).toBe(180);

})

test('test should return sum of all arguments passed', () => {
    let numArray = [2, 4, 8, 10, 22, 44];
    const result = add(numArray);
    console.log(result);

    expect(result).toEqual(90);
















})