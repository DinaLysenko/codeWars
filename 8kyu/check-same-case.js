// ❓DESCRIPTION:
// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1

// ✅SOLUTION:

function sameCase(a, b) {
    if (/[\s\W\d]/.test(a) || /[\s\W\d]/.test(b)) {
        return -1
    }
    if ((/[A-Z]/.test(a) && /[A-Z]/.test(b)) || (/[a-z]/.test(a) && /[a-z]/.test(b))) {
        return 1
    }
    return 0
}

console.log('sameCase: ', sameCase('a', 'g'))
console.log('sameCase: ', sameCase('A', 'C'))
console.log('sameCase: ', sameCase('b', 'G'))
console.log('sameCase: ', sameCase('B', 'g'))
console.log('sameCase: ', sameCase(0, '?'))