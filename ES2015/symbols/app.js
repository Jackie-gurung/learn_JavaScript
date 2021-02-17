const sym1 = Symbol();
const sym2 = Symbol('jackie');

console.log(sym1);
console.log(typeof sym1);
console.log(sym2.description);

// symbol is unique
console.log(Symbol('123') === Symbol('123'));

// symbol don't auto convert to string 
// console.log(`Hello ${sym2}`)
// but you can use conversion 
console.log(`Hello ${sym2.toString()}`)
console.log(`Hello ${String(sym2)}`)
console.log(`Hello ${String(sym2.description)}`)

