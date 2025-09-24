// JavaScript Function call(), you can write a method that can be used on different objects.
const dog ={
    firstName: "Scooby",
    lastName: "Doo",
    fullName: function() {
        return this.firstName + "" +this.lastName
    }
    // to get the fullname of the dog you return the firstname and lastname
}
console.log(dog.fullName())

// The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an object as an argument (parameter).

const myDog ={
    dogNameColor: function(){
        return this.dogname + "" + this.dogcolor
    }
}
const myDog1 ={
    dogname: "John",
    dogcolor: "Black"
}
const myDog2 ={
    dogname: "Peter",
    dogcolor: "Brown"
}
myDog.dogNameColor.call(myDog1)
// this example calls the dogNameColor method of my dog
console.log(myDog.dogNameColor.call(myDog1))

// The call() Method with Arguments
