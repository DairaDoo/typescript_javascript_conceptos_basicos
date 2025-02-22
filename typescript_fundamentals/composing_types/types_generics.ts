// // using generics to describe what values the type the array will have
// type StringArray = Array<string>;
// type NumberArray = Array <number>;
// type ObjectWithNameArray = Array<{name: string}>;

// // declare your own generic type
// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }

// interface User {
//     id: number;
//     name: string;
// }

// declare const backpack: Backpack<User>;

// const object = backpack.get();

// backpack.add({id: 1, name: "Henry"});
// backpack.get();