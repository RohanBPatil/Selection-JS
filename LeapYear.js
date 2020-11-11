var prompt = require('prompt-sync')();
let year = prompt("Enter the input for year: ");
if ((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a Leap year");
}