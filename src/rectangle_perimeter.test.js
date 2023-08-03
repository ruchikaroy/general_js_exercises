import { expect, test } from "vitest";
import { findPerimeter } from "./rectangle_perimeter.js";

test('test will return rectangle perimeter', () => {
    const result = findPerimeter(4, 7);
    expect(result).toBe(22);

})