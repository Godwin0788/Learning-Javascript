// sorting an array The sort() method sorts an array alphabetically
const fruits= ["banana", "apple", "pineapple", "kiwi"]
fruits.sort()
console.log(fruits)
const names= ["Diannie", "Liz","Godwin","Alex"]
names.sort()
console.log(names)
// Reversing an Array The reverse() method reverses the elements in an array:
const animals= ["kanganro","Rabbit","Donkey","Cheetah"]
animals.reverse()
console.log(animals)
// By combining sort() and reverse(), you can sort an array in descending order:
const race=["Asian","African","American","European"]
race.sort();
race.reverse();
console.log(race)
// JavaScript Array toSorted() Method as a safe way to sort an array without altering the original array
const months=["jan","Feb","March","April"]
const sorted=months.toSorted()
console.log(sorted)
// JavaScript Array toReversed() Method
const days=["Mon","Tue","Wed","Thurs"]
const reversed=days.toReversed()
console.log(reversed)
// Numeric Sort Sort the array in ascending order: 
const digits=[40, 50, 1, 10, 5, 25]
digits.sort(function (a,b) {return a-b})
console.log(digits)
digits.sort(function (a,b) {return b-a})
console.log(digits)
// The Compare Function compare function is to define an alternative sort order.
const points=[45, 55, 1, 15, 8, 30]
function myFunction1() {points.sort()};
console.log(points)
  function myFunction2() {
  points.sort(function(a, b){return a - b})}
  console.log(points)
// Sorting an Array in Random Order
function myFunction() {
  points.sort(function(){return 0.5 - Math.random()})}
  console.log(points)