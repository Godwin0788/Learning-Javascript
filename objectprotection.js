// JavaScript Object Protection
// The Object.preventExtensions() method prevents adding properties to an object.
// creating an abject
const donkey = {
    name:"animalia",
    part: "forest"
}
// this prevents any addition to the property.
Object.preventExtensions(donkey)
console.log(Object.preventExtensions(donkey))
// testing for error
let animal = "";
try {  donkey.nationality = "English";}
catch (err) {  animal = err;}
console.log("the animal is", donkey.nationality)

// JavaScript Object.isExtensible()
// is to check if an object is extensible and returns true if an object is extensible.
// Create Array
const tv = ["LG", "Hisense", "samsung", "sony"];
Object.preventExtensions(tv);
console.log(Object.preventExtensions(tv))
// This will return false
let x = Object.isExtensible(tv);
console.log(x)

// JavaScript Object.seal()
// method prevents additions or deletions of new properties.
// example
// Create Object
const me = {
  firstName: "Godwin",
  lastName: "Peter",
  age: 16,
  eyeColor: "black"
};
Object.seal(me)
console.log(Object.seal(me))
// Test Error
let r = "";
try {  delete me.age;
  r = Object.values(me);}
catch (err) {  r = err;}
console.log(r)

// JavaScript Object.isSealed()
// method can be used to check if an object is sealed and returns true if an object is sealed.
const fruits =["pineapple", "grapes", "apple"]
// seal the Array
Object.seal(fruits)
console.log(Object.seal(fruits))
// return true
let d = Object.isSealed(fruits)
console.log(d)