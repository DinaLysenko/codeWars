// ❓DESCRIPTION:
// Implement a function which accepts 2 arguments: string and separator.
//     The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
//     For example:
// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"
// ✅SOLUTION:
function splitAndMerge(string, separator) {
    let words = string.split(" ")
    let arrWords = words.map(e => e.split('').join(separator))
    let newWords = arrWords.join(' ')
    return newWords;
}

console.log('splitAndMerge: ', splitAndMerge("My name is John", " "))
console.log('splitAndMerge: ', splitAndMerge("My name is John", "-"))
console.log('splitAndMerge: ', splitAndMerge("Hello World!", "."))
console.log('splitAndMerge: ', splitAndMerge("Hello World!", ","))