// // example of how to override the constructor to set new defaults.

// function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//         reportingUrl = "http://www...";
//     };
// }

// @reportableClassDecorator
// class BugReport {
//     type = "report";
//     title: string;

//     constructor(t: string) {
//         this.title = t;
//     }
// }

// const bug = new BugReport("Needs dark mode");
// console.log(bug.title); // Prints "Needs dark mode"
// console.log(bug.type); // Prints "report"

// // Note that the decorator _does not_ change the TypeScript type
// // and so the new property `reportingURL` is not known
// // to the type system:

// bug.reportingUrl; // Property 'reportingUrl' does not exist on type 'BugReport'.
