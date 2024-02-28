// ❓DESCRIPTION:
// Remove all exclamation marks from the end of sentence.
//     Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// ✅SOLUTION:

function remove(string) {
    for (let i = 0; i < string.length; i++) {
        string = string.replace(/!$/g, '')
    }
    return string
}


console.log('remove: ', remove("Hi!!!"))
console.log('remove: ', remove("Hi!"))
console.log('remove: ', remove("!Hi"))
console.log('remove: ', remove("!Hi!"))
console.log('remove: ', remove("Hi! Hi!"))
console.log('remove: ', remove("Hi"))
