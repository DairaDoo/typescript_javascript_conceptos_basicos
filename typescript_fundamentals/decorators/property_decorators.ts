// import 'reflect-metadata';

// class Greeter {
//     @format("Hello, %s")
//     greeting: string;

//     constructor(message: string) {
//         this.greeting = message;
//     }

//     greet() {
//         let formatString = getFormat(this, "greeting");
//         return formatString.replace("%s", this.greeting);
//     }
// }

// const metadataKey = Symbol("format");

// function format(formatString: string) {
//     return Reflect.metadata(formMetadataKey, formatString);
// }

// function getFormat(target: any, propertyKey: string) {
//     return Reflect.getMetadata(metadataKey, target, propertyKey);
// }