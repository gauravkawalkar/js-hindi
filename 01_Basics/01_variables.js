const accountid = 14453;                //it is used to define constant in js
let email = "gauravkawalkar000";        //it is used to define variable
var accountpassword = "778899";         /*it is also used to define variable but we generally dont use it as in previous 
                 days js was unable to understand the scope or we can say due to issue in block scope and funcional scope*/
accountcity = "Akola";                  // it is used to define variable without letting defining
let accountstate;      // it will show undefined as we dont defined the output here

email = "gaurav777";
accountpassword = "887709";  // all the three can be updated in program but const cant be updated anywere in program
accountcity = "Amaravti"


console.table([email, accountid, accountpassword, accountstate, accountcity]); //used to display o/p in table form

console.log(accountid);             //used to print o/p