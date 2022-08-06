console.log("----- QUESTION 1 -----");
var multiply = function (a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
};
console.log(multiply(5, 3));
console.log(multiply(5));
console.log("----- QUESTION 2 -----");
var multiplyQ2 = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    if (params == undefined || params.length == 0)
        return "No params";
    var result = 1;
    params.forEach(function (item) {
        if (item == null)
            throw new Error("Item is nulll");
        result *= item;
    });
    return result;
};
console.log(multiplyQ2(null));
console.log(multiplyQ2(5));
console.log(multiplyQ2(5, 3));
console.log(multiplyQ2(5, 3, 2));
console.log("----- QUESTION 3 -----");
var printInformation = function (name, email) {
    if (email === undefined)
        console.log("Toi ten la ".concat(name, ". Toi chua co email"));
    else
        console.log("Toi ten la ".concat(name, ". Email la ").concat(email));
};
printInformation("Hai", "hailesuper@gmail.com");
printInformation("Hai");
