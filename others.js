// rest parameter (...) allowed indefinite number of arguments as an array

function sum(...args) {
    let sum = 0;
    for (const arg of args) sum += arg;
    return sum;
}

const result = sum(1, 2, 2, 4, 8, 5);
console.log(result);

const numbers = [5, 6, 7, 34, 23, 32, 5, 7, 9];// numbers array
// find 
const findNum = numbers.find((value) => value > 8);// store first number larger than 8 in numbers array
console.log(findNum);

//find index
const indexNum = numbers.findIndex((value) => value > 10);//store first number index larger than 10 in numbers array
console.log(indexNum);

//symbol 
const student = {
    name: 'Hr Delwar',
    age: 19,
    class: 'Honours'
}
let id = Symbol('id'); // make unique 
student.id = 777777;
console.log(student);

// default parameters 
const subtract = (x, y = 5 /* default value set*/) => x - y;
console.log(subtract(14));

//