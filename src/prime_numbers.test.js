import { getPrimeNumbers } from "./prime_numbers.js";
import { expect, test } from "vitest";

test('test should return all prime numbers', () => {
    let numArray = [2, 24, 11, 5, 4, 10, 9, 17, 34, 47];
    const result = getPrimeNumbers(numArray);

    expect(result).toStrictEqual([2, 11, 5, 17, 47]);

});

