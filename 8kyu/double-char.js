// ❓DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// ✅SOLUTION:

function doubleChar(str) {
    return str.split('').map(elem => elem += elem).join('')
}

console.log('doubleChar: ', doubleChar("String"))
console.log('doubleChar: ', doubleChar("Hello World"))
console.log('doubleChar: ', doubleChar("1234!_ "))