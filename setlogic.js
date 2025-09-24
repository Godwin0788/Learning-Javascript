// The union() Method
// method returns the union of two sets.
// The Set.union() method returns a new set containing the elements which are in this set, or in the argument set, or in both
const A = new Set([1,2,3])
const B = new Set([2,3,4])
const C = A.union(B)
let take = "";
for (const x of C) {
  take += x;
}
console.log(take)

// The intersection() Method
// method returns the intersection of two sets.
// method returns a new set containing the elements which are in this set and in the argument set:
const D = new Set([1,2,3])
const E = new Set([2,3,4,5])
const F = D.intersection(E)
let inter ="";
for (const w of F){inter+=w}
console.log(inter)

// The difference() Method
// method returns the difference between two sets.
// method returns a new set containing elements which are in this set but not in the argument set:
const G = new Set([1,2,3,4])
const H = new Set([2,3,4,5])
const I = G.difference(H)
let diff ="";
for (const z of I){diff +=z}
console.log(diff)

// The symmetricDifference() Method
// method returns the symmetric difference between to sets.
// method returns a new set containing elements which are in this set or in the argument set, but not in both:
const J =new Set([1,2,3,4])
const K =new Set([2,3,4,5])
const L= J.symmetricDifference(K)
let sym ="";
for (const Q of L){sym +=Q}
console.log(sym)

// The isSubsetOf() Method
// method returns true if all elements in this set is also elements in the argument set:
const M = new Set([1,2,3,4])
const N = new Set([2,3,4,5])
let answer =M.isSubsetOf(N)
console.log(answer)

// The isSupersetOf() Method
// method returns true if all elements in the argument set are also in this set:
const O = new Set([1,2,3,4])
const P =new Set([2,3,4,5])
let ans =O.isSupersetOf(P)
console.log(ans)

// The isDisjointFrom() Method
// method returns true if this set has no elements in common with the argument set:
const R = new Set([1,2,3,4])
const S = new Set([2,3,4,5])
let answ =R.isDisjointFrom(S)
console.log(answ)