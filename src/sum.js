export function sum(a, b) {
    return a + b;
}

export function sumPolygon(num) {
    return (num - 2) * 180;
}

export function add(args) {
    let total = args.reduce((accum, currValue) => accum + currValue, 0);
    return total;
}