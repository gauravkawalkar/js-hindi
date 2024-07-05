// now lets discuss about the arrow fun here along with the This keyword

// the this keyword is used for the current context ; Lets Discuss
const user = {
    username : "Gaurav",
    price : 999 ,
    welcomeMessage: function(){
        console.log (`${this.username} , welcome to website`);
       // here this refer to the context and the context is for username
       //here the context of user name is Gaurav
       console.log(this); // here the context is the user object
    }  
}
user.welcomeMessage() ; 
user.username = "Kawalkar" //here the value of username is updated
user.welcomeMessage() ; // here the name is updated because we just used the this context
console.log(this);
// the this keyword is used on in objects not in functions

// function  chai() {
// let username = "hitesh"
// console.log(this.username); // this is also unefined as we can't use the this in fn
// console.log(this); // here this will work but it will givve differnt o/p
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // this is also unefined as we can't use the this in fn
//     console.log(this); // here this will work but it will givve differnt o/p
// }

// const chai =  () => { // here the arrow fn is defined
//     let username = "hitesh"
//     console.log(this.username); // this is also unefined as we can't use the this in fn
//     console.log(this); // here this will work but it will givve differnt o/p
// }
// chai ()

// const addtwo = (num1 , num2) => {
//     return num1+num2  // it is called as explicit return since we have to write the return statement
// }
// console.log(addtwo(5,3))

const addtwo = (num1 , num2) => num1+num2 // it is called as implicit return

const add = (num1 , num2) => (num1+num2) 

console.log(addtwo(5,3))