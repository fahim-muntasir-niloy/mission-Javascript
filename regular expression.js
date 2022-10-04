// regular expressions are often called `regex`
// these are used to match part of strings. 

let bigString = "a quick brown dog jumps over the lazy dog"
let testRegex = /quick/g //global idk what
console.log(testRegex.test(bigString))


// regex can take multiple values to match. these are separated by or (|) operation
let multiRegex = /cat|dog|rabbit/
console.log(multiRegex.test(bigString));


// regex can also be set so that it ignores the lettercase
let ignoreRegex = /DOG|CAT|GOAT/i
console.log(ignoreRegex.test(bigString));


// Match function matches the exact pattern that we tell it to find
// it returns with an index position object
let matchRegex = /dog/ig //ignore case can be applied here as well
console.log(bigString.match(matchRegex));


// multiple flags can be used such as `/word/gi`
// there can be repeated words that can be founded as well


//? wildcard
//wildcards are some portion of a word, that can mathc with full words containing that pattern
let newLine = "Let's have fun while having bun under the sun with loaded gun with regular expressions!"
let wildRegex = /.un/g //the g is for matching multiple items, global flag
console.log(newLine.match(wildRegex));
// console.log(wildRegex.test(newLine)); hudai called.


//? we can also specify to match something inside of a string /a[mon]g/ 
//? /[a-z]/ means whole a to z is selected to be matched.
//! /[^aeiou]/ means we dont want to match the vowels. ^ this symbol is used for this

