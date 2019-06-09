// range function
const range = (start = 0, stop, step = 1) => {
    newList = [];
    if (start != 0 && !stop)[start, stop] = [0, start];
    while (start < stop) {
        newList.push(start);
        start += step;
    }

    return newList;
}

// call function
range(20);