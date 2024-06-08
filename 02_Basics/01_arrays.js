// Lets Discuss arrays 

const myarr = [0, 1, 2, 3, 4, 5] // this is how array is defined
// here array can contain single datatype ass well as different datatype in js
// In js the array can be updated (increase in size is possible)

console.log(myarr[2]) // use to print element at index 2

// Lets Discuss some of the array methods

myarr.push(6) // used to push element in array but from last(add element) it is also used to push array
console.log(myarr)
myarr.pop() // used to remove last element only
console.log(myarr)
myarr.unshift(9) // inserts the element from the start of an array and array length is incerased
console.log(myarr)
myarr.shift() //Removes the first element from an array 
console.log(myarr)

console.log(myarr.includes(9)) // used to check that our array contain the element or not
console.log(myarr.indexOf(5)) // used to find the index of the given number

const newarr = myarr.join() // this converts all the elements in array to string 


// Now lets discuss about slice , splice
console.log("A" , myarr);
const myn1 = myarr.slice(1 , 3) // here sice is taken out (A,B) from a index to b-1 index b index is excluded in it
console.log(myn1)
console.log("B" , myarr);
const myn2 = myarr.splice(1,4) // it just remove the part of array from thr original array including the first and last element 
console.log(myn2);
console.log("C" , myarr);