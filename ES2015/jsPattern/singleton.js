// const singleton = (function() {
//     let instance;
    
//     function init() {
//       return {
//         name: 'Peter',
//         age: 24,
//       };
//     }
//     return {
//       getInstance: function() {
//         if(!instance) {
//           instance = init();
//         }
        
//         return instance;
//       }
//     }
//   })();
//   const instanceA = singleton.getInstance();
//   const instanceB = singleton.getInstance();
//   console.log(instanceA);
//   console.log(instanceB);


//   console.log(instanceA === instanceB); // prints true