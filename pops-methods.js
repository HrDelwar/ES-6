// number properties
//EPSILON
//MIN_SAFE_INTEGER
//MAX_SAFE_INTEGER
// console.log(Number.EPSILON, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

// number method
Number.isInteger(45); // true
Number.isInteger(12.5); //false
Number.isInteger('1'); // false

Number.isSafeInteger(45) // true
Number.isSafeInteger(11111111111112222222222) // false
//Safe integers are all integers from (-(2**53 - 1)) to (+(2**53 - 1))

// global method 
// isFinite()
// isNaN()

//isFinite()
isFinite(10/0) // false
isFinite(NaN) // false

//isNaN
isNaN('041') // false
isNaN('Hr Delwar'); // true
isNaN(5) // false
// NaN = not a number