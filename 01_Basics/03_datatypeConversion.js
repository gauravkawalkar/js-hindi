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
// lets discuss the operations in detail here we all know some basics operations like add sub etc. 
// we will not discuss the arithmatc operations here we will discuss diffternts

let str1 = "Gaurav"
let str2 = " Kawalkar "

let str3 = str1+str2 //this will add string 
console.log(str3)

// adding similar datatypr is not a problem but diffent data type is a problem

console.log("1"+2) // op is 12 both are considerd as string
console.log(1+"2") //op is 12 both are considerd as string
console.log("1"+2+2) //op is 122 as 1 st is string so both are considerd as string
console.log(1+2+"2") //op is 32 as 1 st is integer so 1+2 get added and then considerd as a string

//console.log(3+4%6*6)// this is messy conversion dont use this type of conversion instead use (3+4)
//console.log(+true) bad conversion
