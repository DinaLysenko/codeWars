// ❓DESCRIPTION:
// Your task is simply to count the total number of lowercase letters in a string.
//
//     Examples
// "abc" ===> 3
//
// "abcABC123" ===> 3
//
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
//
// "" ===> 0;
//
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
//
// "abcdefghijklmnopqrstuvwxyz" ===> 26

// ✅SOLUTION:
function lowercaseCount(str) {
    let count = 0;
    let newStr = str.match(/[a-z]/g)
    if (newStr === null) {
        return 0
    }
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i].toLowerCase() === newStr[i]) {
            count += 1;
        }
    }
    return count;
}

console.log('lowercaseCount: ', lowercaseCount("abc"))
console.log('lowercaseCount: ', lowercaseCount("abcABC123"))
console.log('lowercaseCount: ', lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\\':;?/>.<,~"))
console.log('lowercaseCount: ', lowercaseCount(""))
console.log('lowercaseCount: ', lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\\':;?/>.<,~"))
console.log('lowercaseCount: ', lowercaseCount("abcdefghijklmnopqrstuvwxyz"))