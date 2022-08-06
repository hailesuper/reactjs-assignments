console.log("----- QUESTION 1 -----");
let evenArr = [];
let oddArr = [];
for (let number = 1; number <= 10; number++) {
    if (number % 2 == 0) {
        evenArr.push(number);
    } else {
        if (number >= 5)
            oddArr.push(number);
    }
}
console.log(evenArr);
console.log(oddArr);
let newArr = [...evenArr, ...oddArr];
console.log(newArr);

console.log("----- QUESTION 2 -----");
let copyArr = [...newArr];
console.log(copyArr === newArr);


console.log("----- QUESTION 3 -----");
let cold = ["autumn", "winter"];
let warm = ["spring", "summer"];
let seasons = [...cold, ...warm];
console.log(seasons);
