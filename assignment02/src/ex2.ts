import {person} from "./ex1";

console.log("----- QUESTION 1 -----");
const intro = `Tôi tên là ${person.firstName} ${person.lastName} tuổi ${person.age} đang ế`;
console.log(intro);

console.log("----- QUESTION 2 -----")
let a = 5;
let b = 20;
console.log(`Tong cua ${a} va ${b} là ${a+b}`);

console.log("----- QUESTION 3 -----")
let foodArray = ["Món 1", "Món 2", "Món 3"];
for (let i=0; i < foodArray.length; i++) {
    console.log(`${i+1}. ${foodArray[i]}`);
}





