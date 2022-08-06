var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("----- QUESTION 1 -----");
var evenArr = [];
var oddArr = [];
for (var number = 1; number <= 10; number++) {
    if (number % 2 == 0) {
        evenArr.push(number);
    }
    else {
        if (number >= 5)
            oddArr.push(number);
    }
}
console.log(evenArr);
console.log(oddArr);
var newArr = __spreadArray(__spreadArray([], evenArr, true), oddArr, true);
console.log(newArr);
console.log("----- QUESTION 2 -----");
var copyArr = __spreadArray([], newArr, true);
console.log(copyArr === newArr);
console.log("----- QUESTION 3 -----");
var cold = ["autumn", "winter"];
var warm = ["spring", "summer"];
var seasons = __spreadArray(__spreadArray([], cold, true), warm, true);
console.log(seasons);
