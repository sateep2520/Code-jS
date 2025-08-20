const name = "Sateep"
const trades = 100

//console.log(`Hello my name is ${name}, I have made ${trades} trades.`);// moderrn way to do it(recommended)

//console.log("Hello my name is " + name + ", I have made " + trades + " trades.");// old way to do it(not recommended)

const gameName = new String("Call of Duty");

console.log(gameName[1]); // Accessing character at index 1
console.log(gameName.length); // Length of the string   

console.log(gameName.toUpperCase()); // Convert to uppercase

console.log(gameName.charAt(2)); // Character at index 2
console.log(gameName.indexOf("D")); // Index of substring "Duty"

const newString = gameName.substring(0, 4); // Extract substring from index 0 to 4
console.log(newString); // Output: "Call"

const anotherString = gameName.slice(-12, 4); // Extract substring from index 0 to 4
console.log(anotherString); // Output: "Call" 