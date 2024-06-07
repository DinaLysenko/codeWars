// ❓DESCRIPTION:
// Your task is to rotate a matrix 90 degree to the left.
// The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.
//
// There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...
//
// One easy example:
//
//     Input: {{-1, 4, 5},
//         { 2, 3, 4}}
//
// Output: {{ 5, 4},
//     { 4, 3},
//     {-1, 2}}
// First there are some static tests, later on random tests too...

// ✅SOLUTION:

function rotateMatrix(matrix) {
    matrix=matrix.map(el=>el.reverse())
    let newArr=Array.from({length: matrix[0].length }, () => [])
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newArr[j].push(matrix[i][j])
        }
    }
    return  newArr
}


console.log('rotateMatrix: ', rotateMatrix([
    [-1, 4, 5],
    [2, 3, 4]
]));

