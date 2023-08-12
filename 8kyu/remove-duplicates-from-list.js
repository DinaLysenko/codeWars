// ❓DESCRIPTION:
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
// The order of the sequence has to stay the same.
// Examples:
//     Input -> Output
//         [1, 1, 2] -> [1, 2]
//         [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// ✅SOLUTION:

function distinct(a) {
    const arr = a.filter((el, index)=> a.indexOf(el) === index)
    return arr;
}

console.log('distinct: ', distinct([1, 1, 2]))
console.log('distinct: ', distinct([1, 2, 1, 1, 3, 2]))

