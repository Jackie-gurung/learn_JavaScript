// function nameIterator(names){
//     let nextIndex = 0;
//     return{
//         next: function(){
//             return nextIndex < names.length ? 
//             {value: names[nextIndex++] ,done : false} : 
//             {done: true}
//         }
//     }
// }

// const arr = ['apple','orange','banana'];
// const names = nameIterator(arr);
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

// GENERATOR 

// function* sayNames(){
//     yield 'jack';
//     yield 'jackie';
// }

// const name = sayNames();

// console.log(name.next());
// console.log(name.next());
// console.log(name.next());

function* createIds(){
    let index = 1;
    while(true){
        yield index++;
    }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);