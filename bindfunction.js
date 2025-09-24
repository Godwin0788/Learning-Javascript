// javaScript Function bind()
// Function Borrowing With the bind() method, an object can borrow a method from another object.
const cars ={
    carBrand: "subaru",
    carColor: "white",
    carBrandColor: function() {
        return this.carBrand + "" + this.carColor
    }
}
const carOwner ={
    carBrand: "Nissan",
    carColor: "Black",
}
let carBrandColor=cars.carBrandColor.bind(carOwner)
// The carOwner object borrows the carBrandColor method from cars
console.log(carBrandColor())
