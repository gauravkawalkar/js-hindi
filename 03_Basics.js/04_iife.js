// iife stands for Immediately Invoked Function Expressions
// Why we use iife :- Globalscope ke pollution se problem hoti hai kai bar isliyye 
//hum iife use karte hai iife se fn fast execute hota hai

// (fn)() ye hai iife ka syntax


(function chai() {
    // name IIFE
    console.log(`DB CONNECTED`)
}());

// ye semicolon iife fn ko stop karne ke liye use hota hai taki next IIFE fn execute kar sako

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})(`Gaurav`)
