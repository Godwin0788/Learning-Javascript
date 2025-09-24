function person(first,last,age,eye) {
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.eyeColor=eye;
    this.nationality="luganda";
}
let myFather=new person ("Chris","Patrick",50,"Black")
console.log(myFather.firstName)
console.log(myFather.lastName)
console.log(myFather.age)
console.log(myFather.eyeColor)
console.log(myFather.nationality)

function Car(brand, engine, fuel, seater) {
this.carBrand=brand;
this.carEngine=engine;
this.fuelConsumption=fuel;
this.carSeater=seater;
this.color="white";
this.fullBrand=function(){
    return this.carBrand+""+ this.carEngine;
};
}
let myCar=new Car ("Toyota Harrier", "volve matic", "2000cc", 5)
console.log(myCar.carBrand)
console.log(myCar.carEngine)
console.log(myCar.fuelConsumption)
console.log(myCar.carSeater)
console.log(myCar.color)

let mySpecialCar=new Car("Subaru", "turbo",2500,6)
console.log(mySpecialCar.color)
myCar.manufacturer="mercedez"
myCar.height=2.3
console.log(myCar)
// adding a property to a constructor using prototype
Car.prototype.weight=700
mySpecialCar.weight
console.log(mySpecialCar.weight)
console.log(myCar.fullBrand)