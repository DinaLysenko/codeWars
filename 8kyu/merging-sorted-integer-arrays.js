// ❓DESCRIPTION:
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// ✅SOLUTION:

function mergeArrays(a, b) {
    let arr = a.concat(b).sort((a, b) => (a - b))
    return arr.filter((e, i) => arr.indexOf(e) === i)
}

console.log('mergeArrays: ', mergeArrays([2, 4, 8], [2, 4, 6]))