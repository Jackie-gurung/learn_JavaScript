// class EventObserver{
//     constructor(){
//         this.observers = [];
//     }

//     subscribe(fn){
//         this.observers.push(fn);
//         console.log(`you are now suscribed to ${fn.name}`)
//     };

//     Unsubscribe(fn){
//         this.observers = this.observers.filter(function(item){
//             if(item !== fn){
//                 return item;
//             }
//         })
//         console.log(`you are now Unsuscribed from ${fn.name}`);
//     };

//     fire(){
//         this.observers.forEach(function(item){
//             item.call();
//         })
//     };

// };

// // Event listener 
// const click = new EventObserver;

// document.querySelector('.sub-ms').addEventListener('click',
// function(){
//     click.subscribe(getMiliseconds);
// });

// document.querySelector('.unsub-ms').addEventListener('click',
// function(){
//     click.Unsubscribe(getMiliseconds);
// });

// document.querySelector('.fire').addEventListener('click',
// function(){
//     click.fire();
// });

// const getMiliseconds = function(){
//     console.log(`Current Miliseconds : ${new Date().getMilliseconds()}`);
// }