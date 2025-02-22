// // decortator factory
// function color(value: string) {
//     return function(target) {
//         // this is the decortator
//         // do something with 'target' and 'value'...
//     }
// }

// // evaulation order example with decorator factories
// function first() {
//     console.log("first(): factory evaluated");
//     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("First() called");
//     };
// }

// function second() {
//     console.log("Second(): factory evaluated");
//     return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("Second() called.")
//     }
// }


// class ExampleClass {
//     @first()
//     @second()
//     method() {}
// }