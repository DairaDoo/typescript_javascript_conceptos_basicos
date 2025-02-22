// union, declare a type that could be many types
type myBoolean = true | false;

const response: myBoolean = true;

 // popular union use case
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "Locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const myNumber: PositiveOddNumbersUnderTen = 5;

function getLenght(obj: string | string[]) {
    return obj.length;
}

// to validate the variable type use typeof
// example of function returing values depending on the type

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return obj;
    }
    else {
        return obj;
    }
}

