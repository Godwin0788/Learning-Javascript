const phones = ["Techno", "Nokia", "Iphone"]
const televisions =[]
console.log(televisions)
televisions[0]="Hisense";
console.log(televisions)
televisions[1]="LG";
console.log(televisions)
console.log(televisions[0])
const race=new Array("African", "American", "Asian");
console.log(race)
race[1]="Afro"
console.log(race)
race[2]="latin"
console.log(race)
let x=televisions.toString();
console.log(x)
console.log(typeof x)
console.log(televisions)
console.log(typeof televisions)
let length =televisions.length
console.log(length)

// writing a for loop
for(counter=0; counter<20; counter++){
    console.log("i will run 20 times"+counter)
}
// this loop should stop printing from 20 to 0
for(let meme=20; meme>=0; meme--){
    console.log("racing in winter"+meme)
}

// looping array with length
const soda=["fanta", "sprite", "coke", "fruity"]
let Lsoda=soda.length
for(let counter=0; counter <soda.length; counter++){
    console.log(soda[counter])
}

// loop that prints from 40-50
for(let fish=40; fish<=50; fish++){
    console.log(fish)
}

// writing a loop from 100-89
for(let y=100; y>=89; y--){
    console.log(y)
}

phones.push("zec")
console.log(phones)
