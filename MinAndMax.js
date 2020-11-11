// problem 1 if & else
let first = Math.floor(Math.random() * 900) + 100;
let second = Math.floor(Math.random() * 900) + 100;
let third = Math.floor(Math.random() * 900) + 100;
let fourth = Math.floor(Math.random() * 900) + 100;
let fifth = Math.floor(Math.random() * 900) + 100;
console.log("5 Number are : " + first + " " + second + " " + third + " " + fourth + " " + fifth);

if (first < second && first < third && first < fourth && first < fifth) {
    console.log("Minimum no is: " + first);
} else if (second < first && second < third && second < fourth && second < fifth) {
    console.log("Minimum no is: " + second);
} else if (third < first && third < second && third < fourth && third < fifth) {
    console.log("Minimum no is: " + third);
} else if (fourth < first && fourth < second && fourth < third && fourth < fifth) {
    console.log("Minimum no is: " + fourth);
} else {
    console.log("Minimum no is: " + fifth);
}

if (first > second && first > third && first > fourth && first > fifth) {
    console.log("Maximum no is: " + first);
} else if (second > first && second > third && second > fourth && second > fifth) {
    console.log("Maximum no is: " + second);
} else if (third > first && third > second && third > fourth && third > fifth) {
    console.log("Maximum no is: " + third);
} else if (fourth > first && fourth > second && fourth > third && fourth > fifth) {
    console.log("Maximum no is: " + fourth);
} else {
    console.log("Maximum no is: " + fifth);
}
