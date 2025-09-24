const animals = ["cat", "cows", "pig", "rabbit", "elephant", "donkey", "monkey", "lion", "rat", "dog"]
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

const phone = [24, 50, true, false]
const myPhone = []
// if an item is a boolean push it to an empty array outside
// if phone at index 1 is a boolean push it to the empty array
for (let i = 0; i < phone.length; i++) {
    if (typeof phone[i] == 'boolean') { myPhone.push(phone[i]) }
}
console.log(myPhone)

const cars =[2,3,6,7,8]
let i = 0
let sum = 0
for (; i < cars.length; i++){
    sum = sum + cars[i]
}
console.log("the value of sum is"+sum)

// How to use Expression 3
// printing from 10-1
const cash =[1,2,3,4,5,6,7,8,9,10]
let y = 10 
for (; y > 0;){
    console.log(y)
    y--
}

// create a for loop that will print from 40-46
let m = 40;
for (; m <47;){
    console.log(m)
    m++
}

// The While Loop
// create a vairable equal to 40
let h =40
while (h<60){
    console.log("i will go to kenya")
    h++
}

// The Do While Loop
// this JS code runs from top to buttom coming down
let f = 40
do{
console.log("i like coding")
}
while(f<2)

