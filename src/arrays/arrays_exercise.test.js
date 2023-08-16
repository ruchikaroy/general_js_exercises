import { expect, test } from "vitest";
import { allPositive } from "./arrays_exercise.js";
import { anyPositive } from "./arrays_exercise.js";
import { concat } from "./arrays_exercise.js";
import { countEvens } from "./arrays_exercise.js";
import { countGreaterThan } from "./arrays_exercise.js";


test("test should return 'true' if all elements in the array are positive otherwise return 'fasle'", () => {
    const numArray = [1, 3, 5, 8];
    const result = allPositive(numArray);

    expect(result).toBeTruthy;
})
test("test should return 'true' if all elements in the array are positive otherwise return 'false'", () => {
    const numArray = [1, 3, -5, 8];
    const result = allPositive(numArray);

    expect(result).toBeFalsy;
})
test("test should return 'true' if there is any positive element in the array otherwise return'false'", () => {
    const numArray = [-5, -6, -9, 3, 4, -10];
    const result = anyPositive(numArray);

    expect(result).toBeTruthy;

})

test("test should return concated array", () => {
    const numArray1 = [1, 2, 3, 4];
    const numArray2 = [5, 6, 7, 8];
    const finalNumArray = concat(numArray1, numArray2);


    expect(finalNumArray).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);

})

test("test should return the count of all even numbers/integers", () => {
    const numbersArray = [2, 4, 8, 3, 10, 9, 44, 21];
    const result = countEvens(numbersArray);


    expect(result).toBe(5);

})

test("test should return count of numbers greater than threshold number", () => {
    const numbersArray = [2, 3, 4, 1, 11, 22];
    const result = countGreaterThan(numbersArray, 10);


    expect(result).toBe(2);

})


