/* A fuction that finds the finds a word in a str and returns an object containing its position
 and how many times it appeared in the str
*/
const search = (word, str) => {
    let founded = [];
    for (i in str) {
        if (str.slice(i, parseInt(i) + word.length) == word) {
            founded.push({
                start: i,
                end: parseInt(i) + word.length
            })
        }
    }
    return {
        founded,
        pos: founded.length
    };
}

search("godwin", "jdcdjcndnifngodwinsknvskdvnkdgodwinedineidnc")