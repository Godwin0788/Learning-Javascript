// creating an object using literal {}
const birds ={
    type: "chicken", 
    eyes: "two",
    legs: "two"
}
console.log(birds)
// creaating the obect using the new Object()
const person = new Object({
    color: "black",
    height: 9,
    age: 23
})
console.log(person)
// creating an object using The Object.create() method which creates an object from an existing object.
const television ={
    brand: "LG",
    type: "smart"
}
const tv = Object.create(television)
console.log(tv)

// The fromEntries() method creates an object from iterable key / value pairs.
const animals =[
    ["pig", 20],
    ["cat", 30],
    ["rats", 50]
]
const myAnimal=Object.fromEntries(animals)
console.log(myAnimal)
// The Object.assign() method copies properties from one or more source objects to a target object.
const phone={
    brand:"nokia",
    capacity:"126gb"
}
// create source object
const phone1={
    color:"balck",
    ram: "4gb"
}
// assign source to target
Object.assign(phone, phone1)
console.log(phone)