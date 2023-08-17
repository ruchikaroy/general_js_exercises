import { expect, test } from "vitest";
import { allPositive } from "./arrays_exercise.js";
import { anyPositive } from "./arrays_exercise.js";
import { concat } from "./arrays_exercise.js";
import { countEvens } from "./arrays_exercise.js";
import { countGreaterThan } from "./arrays_exercise.js";
import { countLessThan } from "./arrays_exercise.js";
import { countOdds } from "./arrays_exercise.js";
import { countValue } from "./arrays_exercise.js";
import { firstIndexOf } from "./arrays_exercise.js";
import { includes } from "./arrays_exercise.js";


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

test("test should return count of numbers greater than the threshold number", () => {
    const numbersArray = [2, 3, 4, 1, 11, 22];
    const result = countGreaterThan(numbersArray, 10);


    expect(result).toBe(2);

})
test("test should return count of numbers less than the threshold number", () => {
    const numbersArray = [2, 3, 4, 1, 11, 22];
    const result = countLessThan(numbersArray, 10);


    expect(result).toBe(4);

})

test("test shoulld return count of odd numbers in the array", () => {
    const numbersArray = [2, 5, 8, 7, 4, 3, 1];
    const result = countOdds(numbersArray);

    expect(result).toBe(4);

})

test("test should return number of times the given value is found", () => {
    const numbersArray = [1, 2, 4, 6, 6, 7, 9, 10];
    const result = countValue(numbersArray, 6);

    expect(result).toBe(2);

})

test("test should return the index of the first occurence of the given value", () => {
    const namesArray = ["Tony", "Sam", "Monty"];
    const result = firstIndexOf(namesArray, "Monty");

    expect(result).toBe(2);

})
test("test should return the index of the first occurence of the given value", () => {
    const numbersArray = [1, 2, 5, 6, 8];
    const result = firstIndexOf(numbersArray, 10);

    expect(result).toBe(-1);

})

test("test should return 'true' if the value is found in the array and 'false' if otherwise", () => {
    const numbersArray = [1, 3, 6, 2, 9, 10];
    const result = includes(numbersArray, 10);
    const result2 = includes(numbersArray, 11);



    expect(result).toBeTruthy;
    expect(result2).toBeFalsy;

})
