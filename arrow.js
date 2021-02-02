// arrow function without parameters 
const hello = () => 'Hello world!';
// arrow function with parameters
const welcome = name => 'Welcome' + ' ' + name;
// Note: it's only work when function has one statements and statements returns a value

// for multiple statement and return
const sum = (num1, num2, num3 = 2/* default value*/) => {
    const sumTotal = num1 + num2 + num3;
    return sumTotal;

}

console.log(sum(2, 3));  