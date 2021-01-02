// const sayHello = ()=>{
//     console.log('hello')
// }

// no braces needed for single line code 
// const sayHello = ()=> console.log('hello from single line')

// no parenthesis needed for single arguement 
// const sayHello = name => console.log(`hello ${name}`); 

// multiple parem need parenthesis 
// const sayHello = (firstName,lastName) => console.log(`hello ${firstName} ${lastName}`);
// sayHello('jackie','gurung');

const users = ['jackie','sonam','gyatso'];
// const nameLength = users.map((name)=>{
//     return name.length;
// }) 

const nameLength = users.map(name => name.length);

console.log(nameLength);