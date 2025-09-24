// The new Map() Method
// started by creating a map
const fruits = new Map([
  ["grapes", 400],
  ["pears", 200],
  ["strawberry", 100]
]);
let numb = fruits.get("pears");
console.log("there are" + numb + "pears")

// The set() Method
// You can add elements to a Map with the set() method:
// create a map
const phone = new Map()
// setting map values
phone.set("tecno", 400)
phone.set("samsung", 300)
phone.set("iphone", 150)
let calc =phone.get("iphone")
console.log("there are"+calc+"iphone")

// The get() Method
const tv = new Map([
    ["hisense", 300],
    ["lg", 250],
    ["sony", 150]
])
console.log(tv.get("hisense"))