// a function that returns the factorial of a number


// solution 1 with recursion
const fact = num => {
    if (num <= 1) return 1
    else return num * fact(num - 1)
}

// solution 2 with loop
const fact2 = num => {
    let total = 0;
    counter = num;
    if (num <= 1) return 1;
    while (counter > 0) {
        total += num * (counter - 1);
        counter--;
    }
    return total;
}


console.log(fact2(4))