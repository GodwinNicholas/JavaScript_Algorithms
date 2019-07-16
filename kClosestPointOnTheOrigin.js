// given an array of tuples with two values,
// each representing the x and y coordinates on the origin
//  the function return k number of points closest to the origin
// eg kClosest([(-2,4), (0,-2), (-1,0), (3,5), (-2,3), (3,2)], 2) would return
//  -> [(-1,0), (0,-2)];


const kClosest = (arr, k) => {
    const result = arr.map(e => ({ close: Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2)), tup: e })
    ).sort((a, b) => a.close - b.close);
    return [result[0].tup, result[1].tup];
}

console.log(kClosest([[- 2, 4], [0, - 2], [-1, 0], [3, 5], [-2, 3], [3, 2]], 2));
