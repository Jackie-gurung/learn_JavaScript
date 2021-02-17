// // standard Module pattern 
// const modFxn =(function() {
//     const pVar = 'hello world';
//     const anotherVar = 'jackie';
//     function pMethod(){
//         console.log(pVar);
//     }
//     return {
//         const publicVar = 'Public jackie';
//         puMethod: function(){
//             pMethod();
//         }
//     }
// })();

// modFxn.puMethod();
// const newVar = modFxn.pVar;
// console.log(newVar); //undefined output as it is private


// // revealing module pattern 

// var collection = (function(){
//     var obj =[];

//     function addObj(element){
//         obj.push(element);
//     }

//     function removeObj(element){
//         var index = obj.indexOf(element);
//         if(index >= 0){
//             obj.splice(index,1);
//         }
//     }

//     function getObj(){
//         return JSON.parse(JSON.stringify(obj));
//         // 
//     }

//     return{
//         addName : addObj,
//         removeName : removeObj,
//         getName : getObj
//     };
// })();


// collection.addName('jackie');
// collection.addName('pema');
// collection.addName('lama');
// collection.addName('grg');
// console.log(collection.getName());

/*
advantages of revealing module over standard module
- easier to change members from public to private & vice versa
- no fxn defination in return{} which makes code clear

disadvantages 
-   If we have a private function which is referring to a public function,
    we cannot override the public function, as the private function will
    continue to refer to the private implementation of the function,
    thus introducing a bug into our system.

   -If we have a public member pointing to a private variable, and 
   try to override the public member from outside the module, the other 
   functions would still refer to the private value of the variable, 
   introducing a bug into our system.
*/