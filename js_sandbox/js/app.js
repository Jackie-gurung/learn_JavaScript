// // dealing with console

// console.log("hello world");
// console.log(123);
// console.log(true);
// var name = "jackie";
// console.log(name);
// console .log([1,2,3,4]);
// console.log({a:1,b:2});
// console.table({ a: 1, b: 2 });
// console.error("this is error!");
// console.clear();
// console.warn("this is warn");
// console.time("jack");
// console.log(123);
// console.log(123);
// console.log(123);
// console.timeEnd("jack");

// // var,let and const 
// var greeting ;
// console.log(greeting);
// greeting = "namaste";
// console.log(greeting);

// let greeting;
// console.log(greeting);
// greeting = "namaste";
// console.log(greeting);

// const greeting = "namaste";
// console.log(greeting);

// const person = {
//     name : "john",
//     age : 45
// }

// person.name = "jackie";
// console.log(person);


// const today = new Date();
// console.log(today);
// console.log(typeof(today));

// let val;
// val = String(5);
// val = String(true);
// val = String([1,2,3,4]);
// val = String(new Date);

// val = (5).toString();

// val = Number("51.25");
// val = Number(true);
// val = Number('hello');
// val = Number([1,2,3,4,5]);

// console.log(val);
// console.log(typeof(val));
// // console.log(val.length);
// console.log(val.toFixed(3));

// const val1 = (5).toString();
// const val2 = 6;
// const sum = parseInt(val1 + val2);
// console.log(sum);
// console.log(typeof(sum)); 

// math operator
// const num1 = 100;
// const num2 = 40;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 % num2;

// val =  Math.PI;
// val = Math.E;
// val = Math.round(2.94);
// val = Math.ceil(4.5);
// val = Math.floor(3.9);
// val = Math.sqrt(36);
// val = Math.abs(-56);
// val = Math.pow(8,2);
// val = Math.max(1,2,5,9); 
// val = Math.min(1, 2, 5, 9);
// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1) ; 
// console.log(val);


// const firstName = "jackie";
// const lastName = "grg";
// let hobbies = "wed,it,javascript,python";

// let val;
// val = firstName + lastName;
// val = firstName + " " + lastName;
// val = "jamyang ";
// val += "gelek";//append
// val = "hi my name is " + firstName + " and i'm 20 ";
// val = 'that\'s  is ' + firstName + ' and i\'m 20 ';
// val = firstName.length;
// val = firstName.concat(' ' , lastName);
// val = firstName.toLowerCase();
// val = firstName.toUpperCase();

// val = firstName.indexOf('k');
// val = firstName.charAt(3);
// //last letter
// val = firstName.charAt(firstName.length - 1);

// //substring
// val = firstName.substring(0,3);

// // slice
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// // split 
// val = hobbies.split(',');
// val = hobbies.replace('wed','web');
// val = hobbies.includes('football');



//////////////////////////////////////////////////////////////////////////////
//template string/literals

// const name = 'jackie';
// const age = 4;
// const job = 'front end';
// const city = 'jomsom';
// function op(){
//     return 'hello ';
// }

// let html;

// html = `<ul>
//         <li> Name : ${name}</li>
//         <li>Age : ${age}</li>
//         <li>Job : ${job}</li>
//         <li>City : ${city}</li>
//         <li>${4+5}</li>
//         <li>${op()}</li>
//         <li>${age > 20 ? 'not teen' : 'teen'}</li>
// </ul>`;

// let jack;
// jack = `<ul>
//         <li>NAME : ${name}</li>
//         <li>Age : ${age}</li>
//         <li>${100*8}</li>
//         <li>${op() + name}</li>
//         </ul>`
// document.body.innerHTML = jack;

//////////////////////////////////////////////////////////////////////////////
//array
// const number = [11,5,9,66,3,0];
// const numbers = new Array('jack',undefined,null,{a:1,b:2},true,2);
// //find array length
// let val;
// val = number.length;
// //check if its array
// val = Array.isArray(numbers);
// //index of
// val = number.indexOf(3);
// //get value of 
// val = number[0];
// //push,pop,unshift,shift & splice
// number.push(100);
// number.unshift(222);
// number.pop();
// number.shift();
// number.splice(1,2);
// number.reverse();

// val = number.concat(numbers);
// //number are sorted based on their first digit 
// val = number.sort();
// //other way to sort
// val = number.sort(function(a,b){
//     return a-b;
// })

// // find
// function over50(num){
//     return num > 50;
// }

// val = number.find(over50);
// console.log(number);

///////////////////////////////////////////////////////////////////////////
// //object literals
// const person = {
//     firstName : "jackie",
//     lastName : "gurung",
//     age : 21,
//     getDate : new Date(),
//     getBirthdate : function b (){
//         return 2020 - this.age;
//     },
//     hobbies : ['football','bat'],
//     address : {
//         country: 'nepal',
//         district : 'mustang',
//         village : 'ghiling'
//     }
// }
// let val;
// val = person.hobbies[1];
// val = person.getBirthdate();


// const player = [
//     {name :'jackie' , age : 21},
//     { name: 'messi', age: 47 },
//     { name: 'pogba', age: 24 }
// ]
// for (let i = 0; i < player.length; i++){
//     console.log(player[i].name);
// }

// const today = new Date();

// val = today.getDate();
// val = today.getMonth();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMilliseconds();
// let birthDay = new Date('1999-5-24 12:12:00');
// birthDay.setDate(14);
// birthDay.setFullYear(1448);
// val = birthDay;
// console.log(val);


//checking if both type and value are equal
// const id = "100";
// if (id === 100){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// // testing if something is defined 
// if(typeof id != 'undefined'){
//     console.log(`this is an id of ${id}`);
// }else{
//     console.log('no id');
// }

// const color = 'blue';
// if(color  === 'red'){
//     console.log('the color is red');
// }else if(color === 'yellow'){
//     console.log('the color is yellow');
// }else {
//     console.log('the color is something else');
// }
// console.log((color === 'blue') ? 'correct' : 'incorrect');

// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = 'sunday';
//         break;
//     case 1:
//         day = 'monday';
//         break;
//     case 2:
//         day = 'tuesday';
//         break;
//     case 3:
//         day = 'wednesday';
//         break;
//     case 4:
//         day = 'thursday';
//         break;
//     case 5:
//         day = 'friday';
//         break;
//     case 6:
//         day = 'saturday';
//         break;
// }
// console.log(`Today is ${day}`);


// //Function with default values
// function greet(firstName = 'john',lastName = 'Doe'){
//     return `Hello ${firstName} ${lastName}.`;
// }
// console.log(greet('jamyang', 'gurung'));

// // function expressions
// const cube = function (x=9){
//     return x*x*x;
// }
// console.log(cube(2));

// // immediately invokeable function expressions 
// // used in module pattern
// (function(name){
//     console.log('hello hi..' + name);
// })('jack')

// // propertity methods 
// const study = {
//     Read: function(book){
//         console.log('reading ' + book);
//     },
//     Write: function(text){
//         console.log('writing ' + text);
//     }
// }

// // writing into a object from outside
// study.draw = function(piece) {
//     console.log('drawing ' + piece);
// }

// study.Read('linear Algebra');
// study.Write('poem');
// study.draw('mona lisa');

// loop
// for(let i=0; i<10; i++){
//     if(i === 2){
//         console.log('2 is my fav number ang using continue');
//         continue;
//     }
//     if(i === 4){
//         console.log('breaking in four')
//         break;
//     }
//     console.log(`number ${i}`);
// }

// let i = 0;
// while(i<10){
//     console.log('number ' + i);
//     i++;
// }

// let i = 40;
// do{
//     console.log('number ' + i);
//     i++;
// }while(i < 45)


// const players = ['messi','pogba','ronaldo','cavani'];
// for(let i=0; i<players.length; i++){
//     console.log(players[i]);
// }

// forEach 
// players.forEach(function(play,index,array ){
//     console.log(`${index} : ${play}`);
//     console.log(array);
// });


// MAP
// const users = [
//     { id: 1, name: 'jackie'},
//     { id: 2, name: 'jack' },
//     { id: 3, name: 'billie' },
//     { id: 4, name: 'pema' },
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// const user ={
//     name : 'jackie',
//     age : 21,
//     school : 'soe'
// }

// for(let x in user){
//     console.log(x + user[x]);
// }

// WINDOW METHODS / OBJECTS / PROPERTIES        

// prompt and alert 

// let val = prompt();
// window.alert('im watching you ' + val);

// confirm 
// if(confirm('are you sure ?')){
//     console.log("yes");
// }else{
//     console.log("no");s
// }

// let val;
// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
// val = window.innerWidth;

// scroll point 
// val = scrollY;
// val = scrollX;
// val = window.location;
// val = window.location.host;
// val = window.location.search;
// val = window.location.href;
// val = window.location.href = 'https://google.com';
// window.location.reload();

// // history object 
// window.history.go(-1);
// val = window.history.length;

// navigator object 
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;

// console.log(val);
