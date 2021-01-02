//constructor and destructor
// function Person(fName,lName){
//     this.firstName = fName;
//     this.lastName = lName;
//     this.getFullName = function(){
//         return this.firstName + ' ' + this.lastName;
//     }
//     // this.age = age;
//     // this.birthDay = new Date(dob);
//     // this.calculateAge = function(){
//     //     const diff = Date.now() - this.birthDay.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear()-1970);
//     // }
// }

// const jackie = new Person('jackie','gurung');
// console.log(jackie.getFullName());

// // string as an object 
// const name1 = 'jackie';
// const name2 = new String('jackie');

// console.log(typeof name2);

// // value is same but not the type 
// if(name2 === 'jackie')
//     console.log('yes');
// else
//     console.log('no');

// // number as object 
// const num1 = 4;
// const num2 = new Number(4);
// console.log(typeof num2);  

// // boolean as an object 
// const bool1 = true;
// const bool2 = new Boolean(true);
// console.log(bool2);

// // function as an object 
// const getsum1 = function (x,y){
//     return x + y;
// }
// const getsum2 = new Function('x','y','return x + y');
// console.log(getsum2(5,5));

// // object as an object itself 
// const jackie1 = {name:'jackie'};
// const jackie2 = new Object({ name: 'jackie'});
// console.log(jackie2);

// // array as an object 
// const arr1 = [1,2,3];
// const arr2 = new Array([1,2,3,4,5]);
// console.log(arr2);

// PROTOTYPE

// function Person(fName, lName,dob) {
//     this.firstName = fName;
//     this.lastName = lName;
//     this.birthDay = new Date(dob);

    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthDay.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear()-1970);
    // }
// }

// Person.prototype.calculateAge = function () {
//     const diff = Date.now() - this.birthDay.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
// }

// // gets married 
// Person.prototype.getsMarried = function (newlastName){
//     this.lastName = newlastName;
// }

// const jackie = new Person('jackie','gurung','may 24 1999');
// // console.log(jackie)
// // console.log(jackie.calculateAge());
// console.log(jackie.getFullName());
// jackie.getsMarried('lama');
// console.log(jackie.getFullName());

// // INHERITANCE 

// function Person (firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function (){
//     return `hello ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('jackie','gurung');
// console.log(person1);
// console.log(person1.greeting());

// // cretating Customer and inheriting it from Person 
// function Customer (firstName,lastName,phone,membership){
//     Person.call(this,firstName,lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// // inherit prototype as well 
// Customer.prototype = Object.create(Person.prototype);

// // make customer constructor a  customer 
// Customer.prototype.constructor = Customer;
// const cus1 = new Customer('john','doe','5555-55555','standard');
// console.log(cus1);

// // Customer.prototype.greeting = function (){
// //     return `hello ${this.firstName} ${this.lastName} Wel-come to our meeting`;
// // }

// console.log(cus1.greeting());
// console.log(person1.hasOwnProperty('phone'));

// const FunctionPrototypes = {
//     greeting: function(){
//         return `hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried : function(newlastName){
//         this.lastName = newlastName;
//     }
// }

// const jackie = Object.create(FunctionPrototypes);
// jackie.firstName = 'jackie';
// jackie.lastName = 'gurung';
// jackie.age = 21;
// console.log(jackie);
// console.log(jackie.greeting());
// jackie.getsMarried('lama');
// console.log(jackie.greeting());

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Person {
//     constructor(firstName,lastName,dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }

//     greeting(){
//         return `hello ${this.firstName} ${this.lastName}`;
//     }

//     age(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear()-1970);
//     }

//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }
//     // static methods
//     static addnumber(x,y){
//         return x+y;
//     }
// }
// const jack = new Person('jack','lama','12-12-1999');
// console.log(jack.greeting());
// jack.getsMarried('gurung');
// console.log(jack.greeting());
// console.log(jack.age());
// console.log(Person.addnumber(5,2));

// // inheritance in ES6
// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     greeting(){
//         return `hello ${this.firstName} ${this.lastName}`;
//     }
// }

// class customer extends Person{
//     constructor(firstName,lastName,status){
//         super(firstName, lastName);       
//         this.status = status;
//     }
//     static getmembershipCost(){
//         return 200;
//     }
// }

// const cus = new customer("jackie","nam","married" );
// console.log(cus.greeting());
// console.log(customer.getmembershipCost());