const name = "Gaurav" // string is declared here
const repocount = 1   // string can be written in single inverted comma or double inverted comma too

console.log(name + repocount + " Value") // this is old method to display one or more string 
// but the above method is not readable so we use string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// the above shown method is called as the string interpolation and it is the new method and readble
// ${variable can be written here} it is the good way

const myname = new String ('gaurav') // it is also used to declare the string bur here as we use the new object the new string is declared here
console.log(myname)
console.log(myname[0]) // it will print the element at the 0th index of the string
console.log(myname.__proto__) // used to access the prototype i.e functions such as .length;.touppercase

console.log(myname.toUpperCase) // .toUpperCase is prototype here

// lets disucuss some of the examples
const newstring = myname.substring(0, 4) // here in substring the start will always be from 0 and end will be anything (start ,end) here end will be considerd as end-1
console.log(newstring)

const anotherstring = myname.slice(-8 , 4) // is is like substring and use to slice it accepts the negative values
console.log(anotherstring)

const newstring1 = "   Gaurav.   "
console.log(newstring1)
console.log(newstring1.trim()); // canbe used to trim spaces

const url = "https://gauravkkawalkar.com/gk%220kawalkar"
console.log(url)
console.log(url.replace('220', '-')) // replace is used to replace values .replace('original' , 'replace')