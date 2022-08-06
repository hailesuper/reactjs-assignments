// Question 1:
// Ta có variable name và 1 function printName
// a) Hãy khai báo name là var và có scope là global
// b) Hãy khai báo name là var và có scope là local
// c) Hãy thử thay đổi giá trị của name xem được không?
console.log("----- QUESTION 1 -----");

// var name = "Hai";
var fullName = "Hai 1";
function printName() {
    var fullName = "Hai 2";
    fullName = "Hai 3";
    // change value of global fullName Line 9
    window.fullName = "Hai 1 New";
    console.log(fullName);
}
printName();
console.log(fullName);

console.log("----- QUESTION 1.2 -----");
// var fullName = "Hai 1";
// function printName() {
//     var fullName = "Hai 2";
//     console.log(fullName);
// }
// printName();
// console.log(fullName);


//     Question 2:
// Ta có variable name và 1 function printName
// a) Hãy khai báo name là let và có scope là global
// b) Hãy khai báo name là let và có scope là local
// c) Hãy thử thay đổi giá trị của name xem được không?
console.log("----- QUESTION 2 -----");
let fullNameQ2 = "Hai 1";
function printNameQ2() {
    let fullNameQ2 = "Hai 2";
    console.log(fullNameQ2);
}

printNameQ2();
console.log(fullNameQ2)
//     Question 3:
// Ta có variable name và 1 function printName
// a) Hãy khai báo name là const và có scope là global
// b) Hãy khai báo name là const và có scope là local
// c) Hãy thử thay đổi giá trị của name xem được không?
console.log("----- QUESTION 3 -----");

const fullNameQ3 = "Hai 1";
// fullNameQ3 = "Hai 1 New";
function printNameQ3() {
    const fullNameQ3 = "Hai 2";
    console.log(fullNameQ3);
}

printNameQ3();
console.log(fullNameQ3)

//     Question 4:
// Hãy khai báo 1 array const numbers có chứa các số 1 2 3.
// Sau đó add thêm 4 vào array numbers.
//     Hãy giải thích tại sao const ở Question 3 không thể thay đổi name mà
// array numbers ở Question 4 lại có thể add được thêm element
console.log("----- QUESTION 4 -----");
const theArray:number[] = [1,2,3];
theArray.push(4); // reference
