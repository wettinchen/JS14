// var, let, and const

// global scope
var x = 1;
// let y = 2;
// const z = 3;



// local scope - function scope
function myFunc() {
    // nested local scope
    const z = 5;
    console.log(z);

    // nested local scope - block scope
    {
        let y = 4;
        console.log(y);
    }
}

myFunc();
