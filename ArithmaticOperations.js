var prompt = require('prompt-sync')();
console.log("Arithmatic Operations")
let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter third number : ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
console.log("(a + b * c) : " + (a + b * c));
console.log("(a % b + c) : " + (a % b + c));
console.log("(c + a / b) : " + (c + a / b));
console.log("(a * b + c) : " + (a * b + c));
if (a < b && a < c) {
    console.log("Minimum no is: " + a);
} else if (b < a && b < c) {
    console.log("Minimum no is: " + b);
} else {
    console.log("Minimum no is: " + c);
}

if (a > b && a > c) {
    console.log("Maximum no is: " + a);
} else if (b > a && b > c) {
    console.log("Maximum no is: " + b);
} else {
    console.log("Maximum no is: " + c);
}