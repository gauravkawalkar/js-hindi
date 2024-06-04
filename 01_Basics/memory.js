// here we will learn about memory in js
/*
there are two types of memory statck and heap
1) Stack is used for primitive datatypes while Heap is used for non primitive datatypes
2) If Stack memory is used you will gebcopy and if Heap memory is used you will get refernce 
i.e. It will cange in original value(means as refernce)
 */
// Example of stack
let Myyoutubename = "gauravakawalkar"
let anothername = Myyoutubename // here another name is gaurav kawalkar as we assingned anothername=myyoutubename
anothername = "Chai aur code" // here we changed in another name so it will till another name not will be in myyoutubename

console.log(Myyoutubename);
console.log(anothername);

//Example of heap
let userone = {
    email: "user@google.com" // original
   
}

 let usertwo = userone
 usertwo.email = "gauravkawalkar" // as here we changed in email of user two but the user two pointed to one so here it will change in user one tooo

 console.log(userone.email)
 console.log(usertwo.email)