// class Car{
//     constructor(options){
//         this.color = options.color;
//         this.state = options.state;
//     }
// }

// class Truck{
//     constructor(options){
//         this.color = options.color;
//         this.state = options.state; 
//     }
// }

// class vehicleFactory{
//     createVehicle(options){
//         if(options.vehicleType === 'car'){
//             return new Car(options);
//         }else if(options.vehicleType === 'truck'){
//             return new Truck(options);
//         }
//     }
// }

// const factory = new vehicleFactory();

// const car = factory.createVehicle({
//     vehicleType : 'car',
//     color : 'red',
//     state : 'new'
// });

// const truck = factory.createVehicle({
//     vehicleType : 'truck',
//     color : 'black',
//     state : 'old'
// });

// console.table(car);
// console.table(truck);