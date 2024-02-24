// ❓DESCRIPTION:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.
//     Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

// ✅SOLUTION:

function remove(s, n) {
    let str = ''
    for (let index = 0; index < n; index++) {
        str = s.replace(/\!/, '')
        s = str
    }
    return str
}

console.log('remove: ', remove("Hi!",1))
console.log('remove: ', remove("Hi!",100))
console.log('remove: ', remove("Hi!!!",1))
console.log('remove: ', remove("Hi!!!",100))
console.log('remove: ', remove("!Hi",1))
console.log('remove: ', remove("!Hi!",1))
console.log('remove: ', remove("!Hi!",100))
console.log('remove: ', remove("!!!Hi !!hi!!! !hi",1))
console.log('remove: ', remove("!!!Hi !!hi!!! !hi",3))
console.log('remove: ', remove("!!!Hi !!hi!!! !hi",5))
console.log('remove: ', remove("!!!Hi !!hi!!! !hi",100))
