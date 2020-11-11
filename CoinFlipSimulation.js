const HEADS = 0;
const TAILS = 1;
let coin = Math.floor(Math.random() * 10) % 2;
if (coin == HEADS) {
    console.log("Heads");
} else {
    console.log("Tails");
}