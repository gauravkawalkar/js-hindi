// {} this is caalled as scope
let a = 300
var x = 99
if(true){
    let a = 30
    const b = 20
    var x = 79 
    console.log("INNER :" , a);
} 
console.log(a); // as here a is defined outside so it will be printed
//console.log(b); // here b is defined(in if cond^n) so as it is in local scope the o/p will be b is note defined
console.log(x); // here the o/p will be 79

/*as we know that the var is used to define the variable but var = 99 
in global scope the var = 99 and in local scope the var = 79 and o/p is 79
as the program is executed line by line var = 79 so the var doesn't understand the scope
so generally we don't use the var for defining the scope */

// now let's discuss in depth
// we can aslo have the nesting of function and the nesting of if too so there scopes are aslo considered
sum() //we can access the function. before the definition
function sum(){
 let name = "Gaurav"
 function sumagain() {
    let fullname = "Kawalkar"
    console.log(name + fullname)
 }
 sumagain()
 console.log (sumagain())
 //console.log(name + fullname)// here it will show that the full name is not defined
}
// sum()
//sumagain()
// but if the the function is stored in variable then it cannot be access before the declaration

// so here we learned that for fn in fn the child fn can access values of parent fn but parent fn can't access the values of child