// QUESTION 1
console.log("----- QUESTION 1 -----");
// global scope
let fullName: string = "Le Van Hai";

function hello() {
    console.log(fullName);
}

hello();

// function scope
function helloFunctionScope() {
    let fullName: string = "Le Van Hai in function";
    console.log(fullName);
}

helloFunctionScope();

// lexical scope
function helloLexicalScoping() {
    let fullName: string = "Le Van Hai lexical";
    return function innerFunction() {
        console.log(fullName);
    }
}

helloLexicalScoping();

// QUESTION 2
console.log("----- QUESTION 2 -----");
const printName = function printName(myName: string): void {
console.log("My name is " + myName);
}

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
function getGreeting(firstName:string, lastname:string) {
    let prefix = "Hello "
    const innerGetGreeting = function () {
        return prefix + firstName + " " + lastname;
    }
    return  innerGetGreeting;
    // console.log(innerGetGreeting); // Output: [Function: innerGetGreeting]
}

console.log(getGreeting("Hai", "Le")()) ;


// QUESTION 4
console.log("----- QUESTION 4.1 -----");
const printEverySecond = function (second) {
    const timer =  setTimeout(function () {
        return second;
    }, 1000);
    return timer;
}
for (let i=1; i <= 6; i++) {
    let tempValue = printEverySecond(i);
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

const factory = function (inputNumber:number) {
    return function () {
        return inputNumber * inputNumber;
    }
}

console.log(factory(2)());

// QUESTION 6
console.log("----- QUESTION 6 -----");
class Person {
    static counter = 0;
    private _id:number;
    private _name:string;


    constructor(name: string) {
        Person.counter++;
        this._id = Person.counter;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let person1 = new Person("Hai 1");
let person2 = new Person("Hai 2");

console.log(person1);
console.log(person2);
console.log((person1.name))

