// ❓DESCRIPTION:
//Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

// ✅SOLUTION:
function logs(x, a, b) {
    if (x <= 0 || a <= 0 || b <= 0) {
        return undefined;
    }
    const result = Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
    return Number(result.toFixed(10));
}


console.log('logs: ', logs(10, 2, 3))
