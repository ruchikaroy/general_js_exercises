import { expect, test } from "vitest";
import { sum } from "./sum.js";

test("test should return a sum for two numbers", () => {
    expect(sum(3, 4)).toBe(7);

})