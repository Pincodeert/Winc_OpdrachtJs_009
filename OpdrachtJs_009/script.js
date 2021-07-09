// 3 ways to write a function

//function declaration
function result1 (number1, number2) {
    return (number1*number1 + number2*number2)*(number1*number1 + number2*number2)
}
console.log(result1(2, 3,));
console.log(result1(4, 5));
console.log(result1(1, 1));

//function expression
const result2 = function (number1, number2) {
    return (number1*number1 + number2*number2)*(number1*number1 + number2*number2)
};
console.log(result2(2,3));
console.log(result2(4,5));
console.log(result2(1,1));

//arrow function
const result3 = (number1, number2) => {
    return (number1*number1 + number2*number2)*(number1*number1 + number2*number2)
};
console.log(result3(2,3));
console.log(result3(4,5));
console.log(result3(1,1));