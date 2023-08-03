import { expect, test } from "vitest";
import { lessThanOrEqualToZero } from "./if_else.js";


test('test should return true if number is less than or equal to zero otherwise false', () => {
    const result = lessThanOrEqualToZero(5);
    expect(result).toBe("false");


})