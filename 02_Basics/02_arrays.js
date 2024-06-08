// in this code we will learn about the funsctions in an array
const marvel_heros = ["Ironman" , "Thor" , "Hulk"]
const dc_heros = ["Superman" , "Batman"]
//marvel_heros.push(dc_heros) // here we pushed the dc heros in marvel heros

 // console.log(marvel_heros) // but here we get array in array 
//we have to join both the array not array in array so lets discuss about the following steps
const newarr = marvel_heros.concat(dc_heros) // used to connect the two arrays by forming new array
console.log(newarr);

const newarr2 = [...marvel_heros , ...dc_heros] // used to connect two or more arrays
console.log[newarr2]

const newarr3 = [1, 2, 3, [ 4, 5, 6, 7], 9 , 10,[6, 7, [5, 6]]] // it is too deep array
// to merge all of them in an single array we have to use following function and in that we have to give the depth of following function

const newarr4 = newarr3.flat(Infinity) // merge all arrayin array in single one
console.log(newarr4) 

// we can convert anything into an array into single single digits
console.log(Array.isArray("Gaurav")) // use to check wether thr give fn is array or not
console.log(Array.from("Gaurav")) // used to make anyting/convert anything into an array

// another function of an array
let score1 = 200
let score2 = 400
let score3 = 600

console.log(Array.of(score1, score2, score3)) // use to form the array of different elements which are defined in an code



