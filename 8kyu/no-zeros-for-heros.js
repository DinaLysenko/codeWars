// ❓DESCRIPTION:
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// ✅SOLUTION:

function noBoringZeros(n) {
    let arr = String(n).split('')
    while (arr[arr.length - 1] == 0) {
        arr.pop(arr[arr.length - 1])
    }
    return +arr.join('')
}

console.log('noBoringZeros: ', noBoringZeros(1450))
console.log('noBoringZeros: ', noBoringZeros(960000))
console.log('noBoringZeros: ', noBoringZeros(1050))
console.log('noBoringZeros: ', noBoringZeros(-1050))