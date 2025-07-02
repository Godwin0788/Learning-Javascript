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

// return function
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

// creating n empty javascript object 
let animal={}

animal.fname="scobby";
animal.color="brown";
animal.barks="no";
animal.type="pet";
console.log(animal)