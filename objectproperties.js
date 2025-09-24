// JavaScript Object.defineProperty() 
// this helps in adding a new property to an object
const animals = {
    name: "cat",
    color: "black"
}
console.log(animals)
Object.defineProperty(animals, "numberLegs", {value:25, writable: false, enumerable:true, configurable:true})
console.log(animals)
animals.numberLeg=42
console.log(animals)
// Changing a Property Value
const tv={
    type: "LG",
    capacity: "8gb",
    make: "japan"
}
console.log(tv)
Object.defineProperty(tv, "make", {value:"china"})
console.log(tv)

let user = {};
// Define a property that holds an object
Object.defineProperty(user, "profile", {
  value: { name: "Erinah", age: 25 },
  writable: true,
  enumerable: true
});
user.profile = { name: "Changed" }; 
console.log(user.profile); 
// { name: "Erinah", age: 25 }  ← reassignment blocked
// BUT modifying the inner object works:
user.profile.name = "patrick"; 
console.log(user.profile); 
// { name: "Erinah", age: 30 }  ← mutation allowed!
user.profile={
    name:"eva",
    age: 20
}
console.log(user.profile)
// JavaScript getOwnPropertyNames()
// this is for Listing all Object Properties
const race = {
    firstName: "king",
    color:"black",
    country:"ugnada"
}
Object.getOwnPropertyNames(race);
console.log(Object.getOwnPropertyNames(race))

// JavaScript Object.keys()
