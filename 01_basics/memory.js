//memory types : Stack(primitive) and Heap(non-primitive)

let myname = "Superman"; 

let anotherName = myname; // This creates a copy of the value in the stack
anotherName = "Batman"; // Changing anotherName does not affect myname

console.log(myname); // This will log "Superman"
console.log(anotherName); // This will log "Batman"

let superHero = {
    name: "Superman",
    age: 35
}

let superHero2 = superHero; // This creates a reference to the same object in the heap
superHero2.name = "Spiderman"; // Changing SuperHero2 affects superHero    

console.log(superHero.name); // This will log "Spiderman"
console.log(superHero2.name); // This will also log "Spiderman"  