const map1 = new Map();

const key1 = 'jackie',
      key2 = {},
      key3 = function() {};


// set value of key "map.set()"
map1.set(key1,'value of key1');
map1.set(key2,'value of key2');
map1.set(key3,'value of key3');

// get value by key "map.get()"
// console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// count values 
// console.log(map1.size);

// // Iterating Maps 

// // looping with forEach loop 
// map1.forEach(function(key,value){
//     console.log(`${key} = ${value}`);
// }); 

// looping with for ...of method 
// // to get keys only 
// for(let key of map1.keys()){
//     console.log(key);
// }

// // to get value only 
// for(let value of map1.values()){
//     console.log(value);
// }

// // to get both key and value
// for(let entry of map1){
//     console.log(entry);
// }
// for(let [key,value] of map1){
//     console.log(`${key} = ${value}`);
// }

// // to delete and entry by key 
// map1.delete(key1);
// for(let [key,value] of map1){
//     console.log(`${key} = ${value}`);
// }

// // to clear everything from map 
// map1.clear();
// for(let [key,value] of map1){
//     console.log(`${key} = ${value}`);
// }

// // converting to ARRAY 
// // create and array of key value pair 
// const keyVal = Array.from(map1);
// console.log(keyVal);

// // create an array of  key only 
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);

// // create an array of  value only 
// const valArr = Array.from(map1.values());
// console.log(valArr);

// // converting OBJECT to MAP
// let obj = {
//     name: "jackie",
//     roll: 4
// }

// let mapObj = new Map(Object.entries(obj));

// for(let [key,value] of map1){
//         console.log(`${key} = ${value}`);
//     }

// // NGCLONI and MERGING map 
// let clone = new Map(map1);
// console.log(clone.get(key3));
// console.log(map1 === clone ); //false indicate that they are different

// let first = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
//   ])
  
//   let second = new Map([
//     [1, 'uno'],
//     [2, 'dos']
//   ])

// //   MERGING 
// let third = new Map([...first,...second,[1,'chik']]);
// console.log(third.get(1));
// console.log(third.get(2));
// console.log(third.get(3));



