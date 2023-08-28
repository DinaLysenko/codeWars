// ❓DESCRIPTION:
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//     Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples

// ✅SOLUTION:

function century(year) {
    let centuryNum = Math.ceil(year / 100);
    return centuryNum;
}

console.log('century: ', century(1705));
console.log('century: ', century(1900));
console.log('century: ', century(1601));
console.log('century: ', century(2000));