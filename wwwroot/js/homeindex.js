"using strict";

sayHello("Jeff"); // call can be made before or
                  // after function definition

// function definition
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// function expression
let sayHello2 = function (name) {
    console.log(`Hello, ${name}!!`);
};

sayHello2("Jeff2"); // call cannot be made before function expression

// arrow function
let sayHello3 = (name) => {
    console.log(`Hello, ${name}!!!`);
};

sayHello3("Jeff3"); // must be defined before call

varTest();
letTest();

function varTest() {
    var x = 1;
    if (x === 1) {
        var x = 2; // Same x as above
        console.log(x);
    }
    console.log(x);
}

function letTest() {
    let x = 1;
    if (x === 1) {
        let x = 2; // Same x as above
        console.log(x);
    }
    console.log(x);
}

var x = 'global';
let y = 'local';
z = 'very global'; // don't do this
console.log(this.x);
console.log(y);
console.log(this.z);
