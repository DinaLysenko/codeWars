// ❓DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//     The output should be two capital letters with a dot separating them.
//     It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// ✅SOLUTION:

function abbrevName(name) {
    let arr = name.split(' ')
    let letter = []
    for (let i = 0; i < arr.length; i++) {
        letter.push(arr[i][0])
    }
    return letter.join('.').toUpperCase()
}

console.log('abbrevName: ', abbrevName("Sam Harris"))
console.log('abbrevName: ', abbrevName("patrick feeney"))