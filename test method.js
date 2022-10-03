// regular expressions are often called `regex`
// these are used to match part of strings.

let bigString = "a quick brown fox jumps over the lazy dog"
let testRegex = /over/g
let res = testRegex.test(bigString)
console.log(res)