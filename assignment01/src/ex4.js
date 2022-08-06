// QUESTION 1
console.log("----- QUESTION 1 -----");
// global scope
var fullName = "Le Van Hai";
function hello() {
    console.log(fullName);
}
hello();
// function scope
function helloFunctionScope() {
    var fullName = "Le Van Hai in function";
    console.log(fullName);
}
helloFunctionScope();
// lexical scope
function helloLexicalScoping() {
    var fullName = "Le Van Hai lexical";
    return function innerFunction() {
        console.log(fullName);
    };
}
helloLexicalScoping();
// QUESTION 2
console.log("----- QUESTION 2 -----");
var printName = function printName(myName) {
    console.log("My name is " + myName);
};
printName("Hai");
// QUESTION 3
// console.log("----- QUESTION 3 -----");
// function getGreeting(firstName:string, lastname:string): void {
//     let prefix = "Hello "
//     const innerGetGreeting = function ():string {
//         return prefix + firstName + " " + lastname;
//     }
//     console.log(innerGetGreeting());
//     // console.log(innerGetGreeting); // Output: [Function: innerGetGreeting]
// }
//
// getGreeting("Hai", "Le");
console.log("----- QUESTION 3 -----");
function getGreeting(firstName, lastname) {
    var prefix = "Hello ";
    var innerGetGreeting = function () {
        return prefix + firstName + " " + lastname;
    };
    return innerGetGreeting;
    // console.log(innerGetGreeting); // Output: [Function: innerGetGreeting]
}
console.log(getGreeting("Hai", "Le")());
// QUESTION 4
console.log("----- QUESTION 4.1 -----");
var printEverySecond = function (second) {
    var timer = setTimeout(function () {
        return second;
    }, 1000);
    return timer;
};
for (var i = 1; i <= 6; i++) {
    var tempValue = printEverySecond(i);
    console.log(tempValue);
}
// OUTPUT: undefined
// undefined
// undefined
// undefined
// undefined
// undefined
// console.log("----- QUESTION 4.2 -----");
// const printEverySecond = function (second) {
//     setTimeout(function () {
//         return second;
//     }, 1000)
// }
// for (let i=1; i <= 6; i++) {
//     printEverySecond(i);
//     // console.log(printEverySecond(i));
// }
// OUTPUT: nothing
// console.log("----- QUESTION 4.3 -----");
// const printEverySecond = function (second) {
//     setTimeout(function () {
//         console.log(second);
//     }, 1000)
// }
// for (let i=1; i <= 6; i++) {
//     printEverySecond(i);
//     // console.log(printEverySecond(i));
// }
OUTPUT: 
// 1
// 2
// 3
// 4
// 5
// 6
// console.log("----- QUESTION 4.3 -----");
// const printEverySecond = function (second) {
//     setTimeout(function () {
//         return second;
//     }, 1000)
// }
// for (let i=1; i <= 6; i++) {
//     printEverySecond(i);
//     // console.log(printEverySecond(i));
// }
// QUESTION 5
console.log("----- QUESTION 5 -----");
// const factory = function (inputNumber:number) {
//     return function () {
//         return inputNumber * inputNumber;
//     }
// }
//
// console.log(factory(2));
var factory = function (inputNumber) {
    return function () {
        return inputNumber * inputNumber;
    };
};
console.log(factory(2)());
// QUESTION 6
console.log("----- QUESTION 6 -----");
var Person = /** @class */ (function () {
    function Person(name) {
        Person.counter++;
        this._id = Person.counter;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.counter = 0;
    return Person;
}());
var person1 = new Person("Hai 1");
var person2 = new Person("Hai 2");
console.log(person1);
console.log(person2);
console.log((person1.name));
