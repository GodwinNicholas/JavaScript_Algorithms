/* a function that returns the first recurring character in a string
example 'abcab'  => 'a'
*/

// first approach
const firstRecurr = str => {
    let rem = "";
    for (i in str) {
        if (rem.indexOf(str[i]) != -1) return str[i];
        rem += str[i]
    }
}

// second approach
const firstRecurr2 = str => {
    let chars = {}
    for (i in str) {
        if (chars[str[i]]) {
            return str[i]
        }
        chars[str[i]] = 1;
    }
}

// third approach 
// best solution in my opinion :)
const firstRecurr3 = str => {
    for (i in str) {
        if (str.substr(0, i).match(str[i])) {
            return str[i]
        }
    }
}

// call function
console.log(firstRecurr3("abcabaab"));