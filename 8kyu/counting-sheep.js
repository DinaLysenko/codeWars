// ❓DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// ✅SOLUTION:
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(el => el === true).length
}

console.log('countSheeps: ', countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]))