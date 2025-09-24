function myName() {
    console.log ("i come from luwero")
}
myName()

function myMother() {
    return "My mother is walking"
}
myMother()
function myMic(y1,y2) {
    console.log(y1*y2)
}
myMic(4,10)
function myText(x1,x2) {
    console.log(x1+x2)
}
myText(6,8)

// function to calculate the area of a rectangle
function calculateAreaRectangle(length,width){
    console.log(length*width)
}
calculateAreaRectangle(7,9)
calculateAreaRectangle(5,8)
// function to calculate the area of a trianagle 
function calculateAreaTriangle(base,height){
    console.log(base*height)
    let area=1/2*base*height
    console.log(area)
}
calculateAreaTriangle(3,9)
// function to convert celsius to fahrenheit
function convertCelsiusFahrenheit(celsius){
    console.log(celsius)
    let fahrenheit=celsius*9/5+32
    console.log(fahrenheit)
}
convertCelsiusFahrenheit(2)
convertCelsiusFahrenheit(37)

// creating a return function
function myPlace(){
    return "my place entebbe"
}
myPlace()
console.log(myPlace())

let x=myPlace()
console.log(x)

let w=myMother()
console.log(w)

function homeAlone(){
    return "am home alone"
}
homeAlone()
console.log(homeAlone())

function exam(){
    return "we are doing an exam"
}
exam()
console.log(exam())

// creating Java Script Objects

let glass={type:"water", make:"spring", color:"opeq"}
let computer={type:"laptop", make:"hp", processor:"i7"}
let television={type:"smart", make:"lg", ram:"8gb"}

// creating an empty javascript object 
let animal={};

animal.fname="scobby";
animal.color="brown";
animal.barks="no";
animal.type="pet";
console.log(animal)

// creatin a javascript object using a new object()
var person= new Object();
person.fname="peter";
person.color="white";
person.height="6.2";
person.weight="90";
console.log(person)

// javascript object methods
const employee={
    firstName:"Mark",
    lastName:"Paul",
    id: 3456,
    fullName: function(){
        return this.firstName +" "+ this.lastName;
    }
};
console.log(employee.fullName())

// javascript objects mutable
const donkey = {
  firstName: "eric",
  lastName: "kit",
  age:5,
  Color: "black"
};
const q=donkey
console.log(q)
q.age=3
console.log(q)

