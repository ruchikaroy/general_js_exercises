import { expect, test } from "vitest";
import { findMaxNumber } from "./max_number.js";

test('test should return the max of two numbers', () => {
    const result = findMaxNumber(5, 16);

    expect(result).toBe(16);



})