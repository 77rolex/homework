function sum(num1, num2) {
    return num1 + num2;
}
const RESULT = sum(6, 5)
console.log(RESULT)
// -----------
function isEven(num) {
    return num % 2 === 0
}
console.log(isEven(RESULT))
// -------------------------
// -------------------------
// -------------------------
console.log(greet("John"))
function greet(name){
    return `Hi, ${name}`
}
// ------------------------
// ------------------------
// ------------------------
const GREET = function (name) {
    return `Hi, ${name}`
}
console.log(GREET("Alex"))
// ------------------------
// ------------------------
// ------------------------
const LET_GREET=(name)=>{
    return `Hi, ${name}`
}
console.log(LET_GREET("Andrei"))
// -----------------------
const NUM= num =>{
    return `I need ${num}$`
}
console.log(NUM(10))
// ------------------------
const MONEY = num => `I need ${num}$`;
console.log(MONEY(20))
// ------------------------
// ------------------------
// ------------------------
// IIFE (Immediately Invoked Function Expression)
(function log (x){
    console.log(x);
})("LOG!");
// -----------------------
(function (x){
    console.log(x);
})("LOG!");
