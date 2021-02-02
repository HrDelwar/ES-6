//var 
var a = 10;
// hera a = 10;
{
    //block
    var a = 2;// allow
    // here a is 2
    var b = 2;
    // hre b is useable
}
// here a is 2
// hera b is also useable 



// let 
// value re-assignable
// block scope

let x = 10;
// here x is 10 
x = 5;// reassign
// here x is 5
{
    //block
    let x = 2; // allow
    // here x is 2
    let y = 4;
    // here y is useable
}
// here x is 10;
// here y is not useable


//const
// block scope 
// not re-assignable
const p = 10;  // allow
p = 5; // not allow make error
// here p is 10
{
    //block
    const p = 5; // allow
    p = 2; //reassign not allow make a error
    const q = 5; // allow
}
// here p is 10;
// here q is not useable


// var let const
var z = 1; //allow
let z = 2;  // not allow
const z = 3; // not allow
z = 4; // allow
{
    var z = 2; // allow 
    let z = 3; // not allow
    const z = 4; // not allow
    z = 5; // allow
}

// let var const
let c = 1; // allow
var c = 2; // not allow
const c = 3; // not allow
c = 3; // allow
{
    let c = 4; // allow
    var c = 5; // not allow
    const c = 6; // not allow
    c = 7; // allow
}

// const var let
const r = 1; //allow
var r = 2; // not allow
let r = 3; // not allow 
r = 5; // not allow
{
    const r = 6; //allow
    var r = 7; // not allow
    let r = 8; // not allow 
    r = 10; // not allow
}