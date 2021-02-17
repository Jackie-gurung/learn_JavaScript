// SETS - store unique value of any type 

const set1 = new Set();

set1.add(100);
set1.add('jackie');
set1.add({name:'jackie'});
set1.add(true);
set1.add(100);


const set2 = new Set([1,false,'string']);

// console.log(set1);
// console.log(set1.size);
// console.log(set2);

// // check for values 
// console.log(set2.has(2));
// console.log(set2.has(2/2));
// console.log(set2.has({name:'jackie'})); //obj are not primitive type

// console.log(set2.delete(1));
// console.log(set2);

// // iterating through set 
// for(let item of set1){
//     console.log(item);
// }

// set1.forEach((value) => {
//     console.log(value)
// })

// converting set to array 
const setArr = Array.from(set1);
console.log(setArr);