console.log("2" > 1); // here op is false but dont comppare different datatypes
// sometimes it give us the required results whilw someime not
console.log("02" > 1); // it is also a tricky comparision

console.log(null > 0) // here op will be false
console.log(null == 0) // here op will be false
console.log(null >= 0) // here op will be true as >= works differtly first here null is convertesd to number then checked so the op is true
 

// === this check very intensively i.e it check the datatype too
console.log("2" === 2) // as it check to strict so the op will be false as it check dataype to
