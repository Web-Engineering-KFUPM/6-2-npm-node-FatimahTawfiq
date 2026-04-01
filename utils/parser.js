import lodash from "lodash"

export function parseNumbers(input) {
    const numbers = lodash.map(input, (str) => Number(str));
    return lodash.compact(numbers);
}

export function isValidOperation(operation) {
    const validOps = ["add", "subtract", "multiply", "divide"];
    return lodash.includes(validOps, operation);
}