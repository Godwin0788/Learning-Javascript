// The JavaScript apply() Method
const cars = { 
    brandName: function() {
        return this.brandName+""+this.color
    }
}
const cars1={
    brandName: "subaru",
    color: "blue"
}
cars.brandName.apply(cars1)
console.log(cars.brandName.apply(cars1))