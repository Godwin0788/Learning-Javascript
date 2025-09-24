class Mother {
    constructor(color, size) {
        this.mcol = color
        this.msize = size
    }
    Wash() {
        console.log("my" + this.mcol + "washes our clothes")

    }
    clean() {
        console.log("my" + this.msize + "cleans the house")
    }
}
class Child extends Mother {
    constructor(color, size, typeHair, personality) {
        super(color, size)
        this.mychildshair=typeHair
        this.mychildspersonality=personality
    }
    swim(){
        console.log("my"+ this.mychildshair+"swims inthe pool")
    }
    doesHair(){
        console.log("my"+this.mychildspersonality+"plaits dreads")
    }
}
let myChild = new Child ("black", "20kg", "Afro", "introvert")
console.log(myChild.mychildshair)
console.log(myChild.mychildspersonality)
myChild.swim()
myChild.doesHair()
myChild.clean()
// example of inheritence
class Dog {
    constructor(color, type){
        this.dCol=color
        this.dTyp=type
    }
    skin(){
        console.log("my dog has"+this.dCol+"spots")
    }
    breed(){
        console.log("the dog"+this.dTyp+"is good")
    }
}
class Puppy extends Dog {
    constructor(color, type, age, vaccinated){
        super(color, type)
        this.pAg=age
        this.pVac=vaccinated
    }
    month(){
        console.log("the puppy is" + this.pAg + "old")
    }
    vet(){
        console.log("is it vaccinated?" + this.pVac + "every after 2 months")
    }
}
let myPuppy = new Puppy("Dark", "German Shepherd", "3months", "yes")
console.log(myPuppy.pAg)
console.log(myPuppy.pVac)
myPuppy.month()
myPuppy.vet()
console.log(myPuppy.dCol)
console.log(myPuppy.dTyp)
myPuppy.skin()
myPuppy.breed()

// Getters and Setters
class Forest {
    constructor(largest){
        this.forlargest=largest
    }
    get flargest(){
       return this.forlargest
    }
    set flargest(m){
        this.forlargest=m
    }
}
const myForest = new Forest ("Amazon")
console.log(myForest.flargest)
myForest.flargest="mabira"
console.log(myForest.flargest)