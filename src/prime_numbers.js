function isPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

export function getPrimeNumbers(numbers) {
    const primes = numbers.filter(number => isPrimeNumber(number));
    return primes;
}




//find me a number starting with 2, until a number that divides that number.
//given an array of numbers, filter me an array of prime numbers only.