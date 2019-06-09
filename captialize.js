// turn first letter of each word to an uppercase

// solution one with map fuuction
const cap = sent => sent.split(" ").map(e => e.substr(0, 1).toUpperCase() + e.substr(1).toLowerCase()).join(" ");


// solution two with for loop
const cap2 = sent => {
    let result = sent.split(" ");
    for (i in result) result[i] = result[i].substr(0, 1).toUpperCase() + result[i].substr(1).toLowerCase();
    return result.join(" ");
}

cap2("hello my name is godwin");