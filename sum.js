// returns sum of numbers in an array

// solution 1 with 
const sum1 = arr => {
    let total = 0;
    arr.forEach(e => total += e);
    return total;
}

// solution two
const sum2 = arr => arr.reduce((e, total) => total += e, 0);


// call function
console.log(sum2([1, 2, 3, 4]))