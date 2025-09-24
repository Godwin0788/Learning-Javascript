const person={
firstName: "peter",
color: "white",
height: 6.2,
weight: 90,
}
// accessing property with one object
console.log(person.firstName)
console.log(person["firstName"]) 
console.log(person.color)
console.log(person["color"])
console.log(person.height)
console.log(person["height"])
console.log(person.weight)
console.log(person["weight"])
// adding new properties
person.legs=2
console.log(person)
person["age"]= 13
console.log(person)
delete person.legs
console.log(person)
delete person.color
console.log(person)
// nested objects
myComputer={
    name:"hp",
    type:"laptop",
    capacity:"500gb",
    myHome: {
        location: "entebbe",
        distance: "31km"
    }
}
console.log(myComputer)
console.log(myComputer.myHome.location)