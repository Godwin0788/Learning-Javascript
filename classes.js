class Car {
    constructor(menu, raye){
        this.name= menu
        this.year=raye
    }
}
let Defender = new Car ("Discovery", 2025)
let Audi = new Car ("XC20", 2020)
let Toyota = new Car ("Hilux", 2019)
let Subaru = new Car ("forester", 2021)

class Phone {
    constructor(type, storage) {
        this.make=type
        this.rom=storage
    }
}
let LG = new Phone("Japan", "128gb")
let Iphone= new Phone("Apple", "64gb")

class Washingmachine{
    constructor(soap, water, wire){
        this.product=soap
        this.utility=water
        this.sun=wire
    }
    spinning(){
        console.log("the first wash is"+ this.utility)
    }
    rinsing(){
        console.log("the second wash is" + this.product)
    }
    drying(){
        console.log("the third wash is" + this.sun)
    }
}
let machine = new Washingmachine("Liquid soap", "Rwenzori", "Chint")
machine.spinning()
machine.rinsing()
machine.drying()
console.log(machine.product)
// example of classes
class Shoes{
    constructor(color, type, pair, gender){
        this.shoeColor=color
        this.shoeType=type
        this.noPairs=pair
        this.sex=gender
    }
    polish(){
        console.log("the polish i use is"+this.shoeColor)
    }
    make(){
        console.log("i put on"+this.shoeType)
    }
    number(){
        console.log("the pairs are"+this.noPairs)
    }
    person(){
        console.log("the shoe is"+this.sex)
    }
}
let myShoes = new Shoes ("Black", "Clarks", 2, "Unisex")
myShoes.polish()
myShoes.make()
myShoes.number()
myShoes.person()
console.log(myShoes.shoeColor)
console.log(myShoes.shoeType)
console.log(myShoes.noPairs)
console.log(myShoes.sex)