// console.log('hello world');
// console.log('123');
// console.log([1,2,3])
// console.log({a:1,b:2});
// //var
// // var greeting = 'Hello';
// // console.log(greeting);
// console.error('this is error');
// console.clear();
// var name = 'jackie';
// console.log(name);

// // initializing variables
// var greeting;
// console.log(greeting);
//  greeting='namaste';
// console.log(greeting);
// console.clear();



// // // // // // //let
// // // // // // let jackie;
// // // // // // jackie= 'jackie';
// // // // // // console.log(jackie);
// // // // // // let sonam='sonam';
// // // // // // console.log(sonam);


// // // // // //const
// // // // // // const name='pema';
// // // // // // console.log(name);
// // // // // // //cannot reasign
// // // // // // name='jackie';
// // // // // // console.log(name);


// // // // // const person={
// // // // //     name:'jackie',
// // // // //     age:21
// // // // // } 
// // // // // console.log(person);

// // // // // person.name='sara';
// // // // // person.age='22';
// // // // // console.log(person);


// // // // // const number=[1,2,3,4,5]
// // // // // number.push(6);
// // // // // console.log(number);


// // // // //DATA TYPES 
// // // // //string
// // // // const name='jackie';
// // // // //number
// // // // const age=21;
// // // // //boolean
// // // // const marriage=false;
// // // // // null
// // // // const car=null;
// // // // // undefined 
// // // // let media;
// // // // // array
// // // // const aim=['developer','musician'];
// // // // const address={
// // // //     city:'jomsom',
// // // //     dstrict:'mustang'
// // // // }

// // // // const today=new Date();

// // // // console.log(today);
// // // // console.log(typeof today);

// // // let val;
// // // // number to string
// // // val = String(5);
// // // //boolean to string 
// // // val = String(true);
// // // // date to string
// // // val = String (new Date());

// // // // array to string
// // // val= [1,2,3,4].toString();



// // // // string to number 
// // // val=Number('5');

// // // // boolean to number 
// // // val =Number(true);
// // // val =Number(false);

// // // val =Number('jackie');

// // // val= Number([1,2,3,4]);

// // // console.log(val);
// // // console.log(typeof val);
// // // // console.log(val.length);
// // // console.log(val.toFixed());
// // // let val1=String('4'); 
// // // let val2=5;
// // // sum= val1 + val2;
// // // console.log(sum);
// // // console.log(typeof sum)

// // const num1=100;
// // const num2= 20;

// // let val;
// // val = num1 + num2;
// // val = num1 * num2;
// // val = num1 - num2;
// // val = num1  / num2;
// // val = num1 % num2;
// // console.log(val);
 

// // // math objects 
// // val = Math.PI;
// // val = Math.E;
// // val = Math.round(2.4);
// // val = Math.abs(-9);
// // val = Math.ceil(5.4);
// // val = Math.floor(7.4);
// // val = Math.pow(8,2);
// // val = Math.sqrt(64);
// // val = Math.random();
// // val = Math.floor(Math.random()* 50);
// // val= Math.max(1,2,4,8,-7)
// // val= Math.min(1,2,4,8,-7)
// // console.log(val);

// const firstname ='jackie';
// const lastname = 'gurung';
// const age = 21;
// const str= 'hello my name is jackie';
// const tags= 'UX,Web development, web design';


// let val;
// // concatanation
// val = firstname + ' ' + lastname;

// // Append
// val = 'jamyang ';
// val += 'gelek';
// //  use of escapig 
// val = 'hello my name is ' + firstname + ' and I\'m ' + age ;
 
// // length of the caracter 
// val= firstname.length;

// // concat()
// val = firstname.concat(' ',lastname); 

// // change case 
// val = firstname.toUpperCase();
// val = firstname.toLowerCase();

// val = firstname[0];

// // indexof 
// val= firstname.indexOf('c');
// val= firstname.lastIndexOf('e');

// // CharAt 
// val= firstname.charAt(0);
// val= firstname.charAt(2);

// // get the last char 
// val = firstname.charAt(firstname.length-1);

// // // substring 
// // val = firstname.substring(0,4);

// // // slice 
// // val = firstname.slice(0,3);
// // val = firstname.slice(-4);


// // //split
// // val =str.split(' ');
// // val = tags.split(',');

// // // replace 
// // val = str.replace('jackie', 'sonam');

// // //  includes
// // val = str.includes('jackie');
// // val = str.includes('Jack');

// // console.log(val);

// ///////////////////////////////////////////////////////////////////////
//template literals
// const name= 'jackie';
// const age = 54;
// const job = 'developer';
// const city = 'Mustang';
// let html;

// function hello(){
//     return 'hello' ;
// }


// //without template string
// html= '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li><li>job:' + job + '</li></ul>';


// html= '<ul>' +
// '<li>Name:' + name + '</li>' +
// '<li>Age:' + age + '</li>' +
// '<li>job:' + job + '</li>' +
// '<li>city:' + city + '</li>' +
// '</ul>';




// // with template literals 
// html = `
// <ul>
//     <li>Name: ${ name}</li>
//     <li>Job: ${ job}</li>
//     <li>Age: ${ age}</li>
//     <li>City: ${ city}</li>
//     <li>${2+2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'over 30' : 'below 30'}</li>
// </ul>`;


// document.body.innerHTML = html;
//  const number= [5,89,9,67,77];
//  const number2= new Array(4,8,3,1,9);
//  const string = ['jackie' , 'gurung' , 'pema'];
//  const mixed = [21, 'jackie' , true, null , undefined, {a:1,b:2}, new Date()];
//  console.log(mixed);

//  let val ;
// //  get array length 
// val=number.length;
// // check if it is array 
// val = Array.isArray(number);
// val = Array.isArray(mixed);
// // get single value 
// val= number[1];
// val = number[4];
// //find the indexof
// val = number.indexOf(5);
// // insert into a array 
// number[2]= 45;

// // mutating arrays 
// // adding on the end 
// number.push(100);
// // adding to the beginning
// number.unshift(66);
// // take off from the end 
// number.pop();
// // take off from the beginning 
// number.shift();
// // taking off elements of array 
// number.splice(1,3);
// // reverse 
// number.reverse();
// // concatenate array 
// val = number.concat(number2);

// // sort 
// val = string.sort();
// val = number.sort();//sort according to first number

// // sort using function 
// val = number.sort(function(x,y){
//     return x-y;
// });

// // reverse sort 
// val = number.sort(function (x, y) {
//     return y- x;
// });

//find
// function under50(num){
//     return num < 50;
// }
// val= number.find(under50);

// function over50(num){
//     return num > 50;
// }
// val = number.find(over50);

// console.log(number);
// console.log(val);

// const person = {
//     firstName:'jackie',
//     lastName:'gurung',
//     age:21,
//     address: {
//         city:'Ghiling',
//         district: 'mustang'
//     },
//     email:'jackie@gmail.com',
//     hobbies:['sports', 'books', 'photography'],
//     getBirthYear: function(){
//         return 2020 - this.age;
//     }
// }

// let val;
// val= person;
// // get specific values 
// val = person.firstName;
// val =person.age;
// val = person.hobbies[2];
// val= person.address.district;
// val = person.getBirthYear();

// console.log(val);

// const people= [
//     {name:'john', age:'41'},
//     {name:'pema', age:'54'},
//     {name:'doma', age:'4'}
// ];

// for(i=0;i<people.length;i++){
//     console.log(people[i].name);
//     console.log(people[i].age);
// }
 
// let val;
// const today= new Date();
// let birthday = new Date('may 24 1999 4:45 ');
// birthday = new Date('5/24/1999');


// val= today.getDay();
// val= today.getMonth();
// val= today.getTime();
// val= today.getHours();
// val= today.getMinutes();
// val= today.getSeconds();
// val= today.getFullYear();

// birthday.setDate(12);
// birthday.setMonth(2);
// birthday.setFullYear(2020)
// console.log(birthday);


//CONDITIONAL STATEMENTS
// equal to in value 
// const id= 100;
// if(id ==100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // not equal to in value 
// if(id != 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // equal in terms of value and type 
// if(id===100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// // not equal in terms of value and type 
// if(id !== 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// Test if undefined 

// if(typeof id !== 'undefined'){
//     console.log(`the id is ${id}`)
// }else{
//     console.log('no id')
// }

// greater than or less than 
// if(id >= 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// else if 
// const color = 'yellow';

// if(color ==='red'){
//     console.log('The color is Red');
// }else if(color === 'blue'){
//     console.log('The color is Blue');
// }else {
//     console.log(`The color is ${color}`);
// }

// Logical Operator 
// const name='jackie';
// const age=21;
 
// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a Child`)
// }else if (age >=13 && age <= 19){
//     console.log(`${name} is a Teenager`)
// }else {
//     console.log(`${name} is an adult`)
// }

// OR ||
// if(age <=13 || age >=65){
//     console.log(`${name} cannot participate`);
// }else {
//     console.log(`${name} can participate.`)
// }

// Ternary operator 
// console.log(name === 'jack' ?'CORRECT' :'INCORRECT');

/*In javascript, it's not mandatory to use curly braces for conditional statement */

// // Switches 
// const color='red';

// switch(color){
//     case 'red':
//         console.log('Color is red.');
//         break;
//     case 'blue':
//         console.log('Color is blue.');
//         break;
//     default:
//         console.log('Color is not red or blue.');
//         break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// function declaration 
// function greet(firstName ='jackie', lastName= 'john'){
    // if(typeof firstName === 'undefined'){firstName= 'jackie'}
    // if(typeof lastName === 'undefined'){lastName= 'gurung'}
    // console.log('hello');
//     return ' hi, hello' + ' ' +  firstName + ' ' + lastName;
// }

// console.log(greet()); 

// function expression 
// const square=function(x=3){
//     return x*x;
// };

// console.log(square(9));

// immediately invokable function expression IIFES 
// (function(){
//     console.log('jackie grg');
// })();

// (function (name) {
//     console.log('jackie grg ' + name);
// })('jamyang');

// property function (adding function to an object)

// const todo = {
//     add: function(){
//         console.log('ADD todo');
//     },

//     edit: function(){
//         console.log('Edit todo');
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo');
// }

// todo.add();
// todo.edit();
// todo.delete();

// // FOR LOOP

// for(let i=0; i <= 10; i++){

//     if(i===2){
//         console.log(`my fav number is ${i}`);
//         continue;
//     }

//     console.log('number ' + i);

//     if(i===6){
//         console.log('stop the loop')
//         break;
//     }
// }

//WHILE LOOP

// let i=0;
// while(i < 10){
//     console.log('Roll no. ' + i);
//     i++;
// }
 
// DO WHILE (runs at least once)
// let i=0;
// do{
//     console.log('NUMBER ' + i);
//     i++;
// }

// while( i<= 10 );

// loop through array 
// const fruits=['apple', 'banana', 'Lemon', 'pears']

// for(let i=0;i < fruits.length;i++){
//     console.log(fruits[i]);
// }

//FOR EACH
// fruits.forEach(function(fruits,index,array){
//     console.log(`${index} :  ${fruits}` );
//     console.log(array);
// })

// // MAPPING 
// const users =[
//     {id:1,name:'jackie'},
//     {id:2,name:'john'},
//     {id:3,name:'gurung'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);


// //FOR IN
// const user = {
//     firstName: 'john',
//     lastName: 'Tamang',
//     age:40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// WINDOW METHOD / ALERT / PROPERTIES 

// ALERT 
// alert('Good Morning !!');

// PROMPT 
// const input = prompt() + '  thank You for your time';
// alert(input);

// CONFIRM 
// if(confirm('Are you sure ?')){
//     console.log('correct');
// }else {
//     console.log('Incorrect');
// }


// let val;

// OUTER HEIGHT AND WIDTH 
// val = window.outerHeight;
// val = window.outerWidth;


// INNER HEIGHT AND WIDTH 
// val = window.innerHeight;
// val = window.innerWidth;

//SCROLL POINT
// val = window.scrollY;
// val = window.scrollX;


// LOCATION OBJECT 

// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// REDIRECT 
// window.location.href='http://google.com';

// RELOAD 
// window.location.reload();

// HISTORY OBJECT 
// window.history.go(-2);
// val = window.history.length;

// NAVIGATOR OBJECT 
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);


// GLOBAL SCOPE 
// var a=1;
// let b=2;
// const c=3;


// FUNCTION SCOPE 
//value in function scope is different from other scope
// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function scope: ', a, b, c);
// }
// test();


// BLOCK SCOPE 
//in this case only var value takes preference over previous value
//it's a features of VAR
// if(true){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If scope: ', a, b, c);
// }

// LOOP SCOPE
// also in the loop scope the value of the var changes
// for(var  a = 0; a < 10; a++){
//     console.log(`loop : ${a}`);
// }

// console.log('Global scope: ', a, b, c);
