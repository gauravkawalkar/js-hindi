// function is like a package which is packed in a container.
// as if you write the code for the function then you just have to call that function rather than writing it again and again
// let us discuss the functions in detail function() way to define the function


// when you define fn's then these are called as parameters and when the fn is called then these are arguments


// function addTwonumbers (number1 , number2) { // here the number1 and number 2 are called as parameters
//      console.log(number1 + number2);
// } 
//console.log(addnumbers(2,3))

//as here nothing is returned. function should return any thing

function addnumbers(num1 , num2) {
    let result = num1+num2 //now result will store some value
    return result // yaha return karne ke baad hi hum value baadme variable me store kar sakte hai
    console.log("Gaurav")// return ke baad kuch bhi execute nahi hota
}
const result = addnumbers(5 , 7)

console.log("Result:" , result);
// the result declared in fn and outside the fn are differnt as js follow the scope

// let us define another function and learn again

function loginusermessage(username){
    return `${usernme} just logged in` // string interpolation
}

console.log(loginusermessage("Gaurav")) // here we called function and passed value in it


