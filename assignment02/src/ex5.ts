console.log("----- QUESTION 1 -----");
const multiply = (a: number, b: number = 1) => a * b;
console.log(multiply(5, 3));
console.log(multiply(5));

console.log("----- QUESTION 2 -----");
const multiplyQ2 = (...params) => { // rest parameters
    if (params == undefined || params.length == 0)
        return "No params";
    let result = 1;
    //[5, 3]
    // for (let i=0; i < params.length; i++) {
    //     if (params[i] == null)
    //         throw new Error("Item is null");
    //     result *= params[i];
    // }
    params.forEach(item => {
        if (item == null)
            throw new Error("Item is null");
        result *= item // result = result * item
    });
    return result;
}

console.log(multiplyQ2(null)); // params = [null]
console.log(multiplyQ2(5)); // params = [5]
console.log(multiplyQ2(5,3)); // params = [5, 3]
console.log(multiplyQ2(5,3,2));


console.log("----- QUESTION 3 -----");
const printInformation = (name: string, email?: string) => {
    if (email === undefined)
        console.log(`Toi ten la ${name}. Toi chua co email`);
    else
        console.log(`Toi ten la ${name}. Email la ${email}`);

}

printInformation("Hai", "hailesuper@gmail.com");
printInformation("Hai");


