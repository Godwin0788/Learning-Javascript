// set methods include
// The new Set() Method
// The add() Method
// The size Property
const myLetters = new Set (["a","b","c"])
console.log(myLetters.size)

// Listing Set Elements using for..of loop:
const animals = new Set(["cat", "cow", "pig"])
let ani = "";
for (const x of animals){ani +=x+" "}
console.log(ani)

// The has() Method
// method returns true if a specified value exists in a set.
const phone =new Set (["lg", "tecno","apple"])
brand=phone.has("samsung")
console.log(brand)

// The forEach() Method
// method invokes a function for each Set element
const countries =new Set (["uganda", "kenya", "rwanda"])
let country ="";
countries.forEach(function(value){
    country +=value+" "
})
console.log(country)

// The values() Method
// returns an Iterator object with the values in a Set:
const towns =new Set (["gulu", "mbarara", "arua"])
// get all values
const myIterator = towns.values()
// list all elemets
let go ="";
for (const y of myIterator){
    go +=y+" "}
console.log(go)

// The keys() Method
// returns an Iterator object with the values in a Set
const villages =new Set (["bunono","zziru","katabi"])
// create an iterator
const iterator=villages.keys();
// list all elements
let villa="";
for (const w of iterator){
    villa +=w+" "
}
console.log(villa)

// The entries() Method
// returns an Iterator with [value,value] pairs from a Set:
const fruits = new Set(["apple", "banana", "orange"])
const juice = fruits.entries()
let friutJuice="";
for (const entry of juice){
    friutJuice+=entry+" "
}
console.log(friutJuice)