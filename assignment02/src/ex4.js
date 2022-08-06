console.log("----- QUESTION 1 -----");
var q1Function = function (a) { return a + 10; };
console.log(q1Function(5));
console.log("----- QUESTION 2 -----");
var q2F1 = function (a, b) { return a + b + 100; };
console.log(q2F1(1, 2));
var q2F2 = function (a, b) {
    var chunk = 42;
    return a + b + chunk;
};
console.log(q2F2(1, 2));
var bob = function (a) { return a + 100; };
console.log(bob(1));
