// ❓DESCRIPTION:
// Given any positive integer x ≤ 4000, find the smallest positive integer m such that mx consists of all 9's.
// Return -1 if no such m exists.
//
// Examples:
// allNines(11) -> 9, because 11*9 = 99.
//
// allNines(12) -> -1, because 12 is even, so no multiple of it can be all 9's.
//
// allNines(13) -> 76923, because 13*76923 = 999999, and no smaller positive integer, when multiplied by 13, generates an integer containing only 9's.
//
// NOTE: Although x ≤ 4000, m can be very very LARGE.
// Where necessary, the way of handling big integers appropriate to the language should be used.

// ✅SOLUTION:

function allNines(x) {
    if (x % 2n === 0n || x % 5n === 0n) return -1n;

    let num = 0n;
    for (let i = 1n; ; i++) {
        num = num * 10n + 9n;
        if (num % x === 0n) {
            return num / x;
        }
        if (i > 10000n) break;
    }
    return -1n;
}

console.log('allNines: ', allNines(11n))
console.log('allNines: ', allNines(12n))
console.log('allNines: ', allNines(13n))
