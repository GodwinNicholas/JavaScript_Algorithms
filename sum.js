// returns sum of numbers in an array

const sum = arr => {
    // validate param
    if (typeof (arr) != Array) throw (new Error("function only accepts array"));
    total = 0;
    for (i of arr) total += i;
    return total
}


sum([1, 2, 3, 4])