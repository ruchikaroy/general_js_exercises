export function allPositive(numbers) {
    const filteredArray = numbers.filter((num) => num > 0);

    return filteredArray.length === numbers.length;

}

export function anyPositive(numbers) {
    const filteredArray = numbers.filter((num) => num > 0);

    return filteredArray.length > 0;
}

export function concat(leftArray, rightArray) {
    return leftArray.concat(rightArray);

}

export function countEvens(array) {
    const evenNumbers = array.filter((num) => num % 2 === 0);

    return evenNumbers.length;
}

export function countGreaterThan(array, number) {
    const filteredArray = array.filter((num) => num > number);
    return filteredArray.length;
}
