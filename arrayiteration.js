// JavaScript Array filter()
const phone =["Nokia", "Tecno", "Nec", "Itel"]
const less5=phone.filter(myFunction);
function myFunction(value, index,array){return value.length <5}
console.log(less5)

// array that contain numbers, strings and booleans filtering numbers and booleans
const television =[10,25,"Hisense", "LG",true, false]
const numbers=television.filter(mukono)
function mukono(value, index, array){return (typeof value=="number")}
console.log(numbers)
const booleans=television.filter(history)
function history(value, index, array) {return(typeof value=="boolean")}
console.log(booleans)
// JavaScript Array reduce() This example finds the sum of all numbers in an array:
const points = [55, 7, 11, 17, 29];
let sum = points.reduce(parameter);
function parameter(total, value, index, array) {return total + value;}
console.log(sum)
// JavaScript Array reduceRight()
const java = [7,8,10]
let sub =java.reduceRight(mySubstraction);
function mySubstraction(total, value, index, array){return total - value}
console.log(sub)
// JavaScript Array every() checks if all array values are larger than 18
const paper =[15, 10, 11, 18]
let allover40 = paper.every(myOver)
function myOver(value, index, array){return value>40}
console.log("numbersabove 8 are" + allover40)
// JavaScript Array some() checks if some array values are larger than 18:
const pre =[50, 65, 45, 70]
let sumover50=pre.some(myPre)
function myPre(value, index, array){return value>50}
console.log("numbers above 50 are" + sumover50)
// JavaScript Array.from() method returns an Array object from:
const myNumbers=[1,2,3,4,5]
const myArr = Array.from(myNumbers, youth)
function youth(value, index, array){return value*2}
console.log(myArr)
// JavaScript Array keys() eturns an Array Iterator object with the keys of an array.
const cat = ["ket", "debby", "goff"]
const keys = cat.keys()
console.log(keys)
for (let x of keys){
    console.log(x)
}

// JavaScript Array entries()
const rat =["got", "pet", "rob"]
const r= rat.entries()
for (let w of r){
    console.log(w)}

// for (){} is for looping 

const cars = ["ford", "nissan", "subaru", "benz","mazda"]
console.log("the car is ford")
console.log("the car is nissan")
console.log("the car is subaru")
console.log("the car is benz")
console.log("the car is mazda")
let y = cars.entries()
for(let y of cars){
 console.log("the car is"+ y)
}
for(let [x , z] of y) {
 console.log(x+ " "+ z)
}
// JavaScript Array keys() eturns an Array Iterator object with the keys of an array.
const person= { 
    firstName: "Godwin",
    lastName: "Peter",
    height: "6.3ft",
    color: "dark"
}
let w =[{fName: "Godwin", lName: "Peter", H: "6.3ft"}, {fName: "Jack", lName: "Sam", H: "5.3ft"}]
let d=w.keys()
console.log(d)
for(let t of d){
    console.log(t)
}
// merging two arrays using JavaScript Array Spread (...)
const number1=[1,2,3,4,5]
const number2 = [50, 65, 45, 70]
const number3=[...number1, ...number2]
console.log(number3)