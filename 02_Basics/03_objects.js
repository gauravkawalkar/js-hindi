// Objects can be declared in two forms in literals and constructors
// there is also an another concept i.e. singleton means this object is made by construtor
// Object.create // it is created as constructor (singleton object)

// object literals
//const jsuser = {content } ...object declared in literals


const mysym = Symbol("Key1") // symbol is a datatype which is declared like this
const JsUser = {
    //"fullname" : "gaurav",
    [mysym]: "Mykey1", // here the above delcared symbol is accesd in this way
    name : "Gaurav", // here name is key and gaurav is value
    age: 18,
    location: "Akola",
    email: "gauravkawlar",
    isLoggedin: false,
    lastlogindays: ["Moonday" , "Saturday"] // in objects arrays can also be defined
}


console.log (JsUser.email) //how to acces ojects
console.log (JsUser["email"]) // another form of accesing the object for ex "fullname" : "gaurav" there is no chance to access fullname by dot so we use this method
console.log(JsUser[mysym]) // in this wat the symbol is accesed in object for printing

// we can update the data in object very easily
JsUser.email = "saurabhkawalkar" // email is update
//Object.freeze(JsUser) // the object is freeze no changes can be done after this in object

// in objects we can define. the functions too 
JsUser.greeting = function(){     // function is defined in this line
    console.log("Hello js user");
}

console.log(JsUser.greeting) // it will give undefined as answer since it is not accesed as a function also give answer as function anonomys

console.log(JsUser.greeting()) // it will give the correct answer



