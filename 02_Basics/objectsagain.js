// lets learn about the destructuring of the objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
}
// so whenever we have to access the courseinstructor we have to use the course.courseinstructor
// but if we have to access it many time then it is hard to write it all time as such a big name

const {courseinstructor} = course // so as using this u can acess value just by writing courseinstructor
//const {courseinstructor:instructor} = course can be updated too it is callled as destructuring
console.log(courseinstructor)

//api = agar apna kam kisi aur ke sar pe dalna ho to api use hote hai
//api { content } is format me likhte hai ha as same as object but without name
// in apis keys and values both are strings





