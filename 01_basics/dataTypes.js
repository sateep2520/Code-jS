//console.log("Sateep");
let score = 93
let isPassed = false;

//console.log(typeof score);
//console.log(typeof isPassed);   

let valueInisPassed = Number(isPassed);
console.log(valueInisPassed); // This will log 0, as false is converted to 0
console.log(typeof valueInisPassed);

 // let valueInisPassed=number(isPassed);This will throw an error because'number'is not a valid function in JavaScript

 // Declaring symbols
 const id = Symbol("2005");
 const id2 = Symbol("2005");
    console.log(id === id2); // This will log false, as each Symbol is unique even if they have the same description

// Using BigInt
 const bigIntValue = BigInt(1234567890123456789012345678901234567890);
// or we can use the BigInt literal syntax
// const bigIntValue = 1234567890123456789012345678901234567890n;( This will also create a BigInt)
console.log(typeof bigIntValue); // This will log "bigint"
console.log(bigIntValue); // This will log the BigInt value

// Using null and undefined
let value = null; // This is explicitly set the value to null
let notAssigned; // This is undefined because it has not been assigned a value

//console.log(value); // This will log null
//console.log(notAssigned); // This will log undefined