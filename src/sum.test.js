import { expect, test } from "vitest";
import { sum } from "./sum.js";
import { sumPolygon } from "./sum.js";

test("test should return a sum for two numbers", () => {
    expect(sum(3, 4)).toBe(7);

})
test('test should return sum of internal angles in degrees of a Polygon', () => {
    expect(sumPolygon(3)).toBe(180);

})