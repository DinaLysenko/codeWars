// ❓DESCRIPTION:
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// ✅SOLUTION:

function getGrade(s1, s2, s3) {
    let s = Math.round((s1 + s2 + s3) / 3)
    return 90 <= s && s <= 100 ? 'A' : 80 <= s && s < 90 ? 'B' : 70 <= s && s < 80 ? 'C' : 60 <= s && s < 70 ? 'D' : 'F'
}

console.log('getGrade: ', getGrade(95,90,93))