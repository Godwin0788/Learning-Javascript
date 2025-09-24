class Cow {
    constructor(kingdom){
        this.animalking=kingdom
    }
    static grass(){
        return "grass"
    }
    static legs(){
        return "legs"
    }
}
const myCow= new Cow("animalia")
console.log(Cow.grass())
console.log(Cow.legs())
