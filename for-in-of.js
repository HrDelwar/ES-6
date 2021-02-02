// for in
// for in  statement loops through the properties of an object  
const person = {
    fname: 'Hr',
    lname: 'Delwar',
    age: 19
}
let fullName = '';

for (const x in person) {
    if (Object.hasOwnProperty.call(person, x)) {
        fullName += person[x] + ' ';
        
    }
}
console.log(fullName);

// for of
// the for/of statements loops through the values of an iterable object
// for/of for array
const fruits = ['Mango', 'Banana', 'Pineapple', 'Orange'];
for(const x of fruits){
    const fruit = x;
    console.log(fruit);
}

// for/of for string
const myName = 'Hr Delwar';

for(const x of myName){
    console.log(x);
}
