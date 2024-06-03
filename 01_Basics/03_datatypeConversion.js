let score = 33.                 // we defined variable score and its value is 33 it is number
let Score = "33abc"             //we defined variable Score and its value is 33abc it is string

console.log(typeof Score)      
console.log(typeof score)

let valueInNumber = Number(Score) //changing string to number

console.log(typeof valueInNumber) // NaN(not a number) the string is convertd to number here

let stringNumber = String(score) // here the score 33 i.e number is getting converted to string
console.log( typeof stringNumber)

// we can convert most of the things to boolean too

let Khara = 1

let Gaurav=Boolean(Khara)
console.log(typeof Gaurav)