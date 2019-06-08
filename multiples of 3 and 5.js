// Find the sum of all the multiples of 3 or 5 below 1000


// custom range function
const range = (start = 0, stop, step = 1) => {
    newList = [];
    if (start != 0 && !stop)[start, stop] = [0, start];
    while (start < stop) {
        newList.push(start);
        start += step;
    }
    return newList;
}

// custom sum function
const sum = arr => {
    total = 0;
    for (i of arr) total += i;
    return total
}




// returns the sum of all the natural numbers below given
//  param that are multiples of 3 and 5
const multipleOf = num => sum(range(num).filter(e => e % 3 == 0 || e % 5 == 0));

multipleOf(1000);