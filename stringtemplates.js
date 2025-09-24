// Back-Tics Syntax
let mr ='Mwachan'
console.log(mr)
// Quotes Inside Strings
let me ='they are coming to"eat"'
console.log(me)
// Expression Substitution
// Template Strings allow interpolation of expressions in strings:
let price = 3e5
let VAT = 3e-2
let total= 'total:ush{(price*(1+VAT)).toFixed(3)}'
console.log(total)