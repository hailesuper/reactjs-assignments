"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex1_1 = require("./ex1");
console.log("----- QUESTION 1 -----");
var intro = "T\u00F4i t\u00EAn l\u00E0 ".concat(ex1_1.person.firstName, " ").concat(ex1_1.person.lastName, " tu\u1ED5i ").concat(ex1_1.person.age, " \u0111ang \u1EBF");
console.log(intro);
console.log("----- QUESTION 2 -----");
var a = 5;
var b = 20;
console.log("Tong cua ".concat(a, " va ").concat(b, " l\u00E0 ").concat(a + b));
console.log("----- QUESTION 3 -----");
var foodArray = ["Món 1", "Món 2", "Món 3"];
for (var i = 0; i < foodArray.length; i++) {
    console.log("".concat(i + 1, " . ").concat(foodArray[i]));
}
