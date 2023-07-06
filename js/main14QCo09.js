// var, let, and const

// global scope
var x = 1;
let y = 2;
const z = 3;

// local scope - block scope
{
    let y = 4;
}

// local scope - function scope
function myFunc() {
    const z = 5;
}