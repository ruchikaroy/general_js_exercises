import { expect, test } from "vitest";
import { calculateGrade } from "./marks_average_grade.js";

test('test should return Grades based on average', () => {
    let numArray = [50, 70, 30, 50, 35];
    const result = calculateGrade(numArray);

    expect(result).toBe("Grade D");

})