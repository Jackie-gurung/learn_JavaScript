// let a,b;
// [a,b] = [100, 200];

// // rest pattern 
// [a,b, ...rest] = [100, 200, 300, 400, 500];

// ({a,b} = {a:100, b:200, c:300})
// console.log(a);

// // Array destructuring 
// const people = ['jackie','rohan','ayush'];
// const [person1, person2, person3] = people;
// console.log(person3);


// // parse array returned from function 
// function getPeople(){
//     return ['jackie','rohan','ayush'];
// }

// let person4, person5, person6 ;
// [person4, person5, person6 ] = getPeople();
// console.log(person4, person5, person6);

// Object Destructuring assignment 
const school = {
    name: 'MGA',
    estd: 1992,
    loc: 'kapan', //do not use location as its keyword "window.location"
    medium: 'english'
}

// // old ES5 way
// const name = school.name,
//       estd = school.estd;
    
// console.log(name,estd);

//new Es6 way 
const {name,estd,medium} = school;

console.log(name,estd,medium);

console.log(`${name} was established on ${estd} and it is  ${medium} `)