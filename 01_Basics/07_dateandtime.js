// lets learn about dates in detail
// the date is object in java any date is calculated form the date 1st jan 1970

let myDate = new Date() // here the date is defined
console.log (myDate) // it's output is not readable so let's convert it into readable format

console.log(myDate.toString()) // here it is converted into string
console.log (myDate.toISOString())
console.log (myDate.toJSON())
console.log (myDate.toLocaleDateString()) // same like string but here only date is printed another option for it is .tolocalestring
console.log (myDate.toDateString())
console.log (myDate.toLocaleTimeString())

//lets try to create our new date by our self
let newdate = new Date(2023, 0, 25) //here in js months start from 0
console.log(newdate) // it is not readable so let convert int into readable form
console.log(newdate.toLocaleString())


// now lets discuss about time stamps here
let mycreateddate = new Date("01-14-2023") // new format of declearing the date (MM-DD-YYYY)

let mytimestamp = Date.now() // it will give the value of now

console.log(mytimestamp) // it will not be readable here so lets convert it in string
console.log(mycreateddate.getTime()) // the ans will be in milliseconds you can convert them into seconds just by dividing by 1000 ms to s
console.log(Date.now()/1000); // the ans will be in seconds but there will be decimal point
// so we have learnt that there is function name Math.floor to round off value
console.log(Math.floor(Date.now()/1000))
