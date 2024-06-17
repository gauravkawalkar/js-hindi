// now lets discuss in detail about the objects in detail
// here we will discuss how to make the object as singleton as in previous we have discussed the object in literals

//const tinder = new Object() // object as singleton 

// lets discuss about them in detail

const tinderuser = {}

tinderuser.id = "123abc" // declared in objects as singleton
tinderuser.name = "Gaurav"

console.log(tinderuser);


// oject in object (nesting)

const regularUser = {
    email: "gauravkawalkar",
    fullname: {
        userfullname: {
            firstname: "Gaurav",
            lastname: "Kawalkar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)// dot ke age dot lagao aur deep tak access karte jao

// as like arrays we can merge the objects too

const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "c", 2: "d"}
const obj3 = {1: "e", 2: "f"}
//const obj4 = {obj1 , obj2} // it can also be used to concat objects 
// but it will five object in object so we dont use it
//const obj4 = Object.assign({}, obj1 , obj2 , obj3) // also another way of joining the objects

const obj4 = {... obj1, ...obj2 , ...obj3} // best way to connect objects this method called as spread

// generally when the values comes from the DB it come in form of array whcich will consists of many objects
const user = [
{
    email: "gaurav",
    id: "41"
},
{
    email: "gaurav",
    id: "41"
},
{
    email: "gaurav",
    id: "41"
}

] //as like this

// you can access this values as values in an array
users[1].email // first value is accessed


// you can also access keys ans values of user too at once

console.log(Object.keys(tinderuser)) // used to access the keys of an objects

console.log(Object.values(tinderuser)) // used to access the values of the objects



