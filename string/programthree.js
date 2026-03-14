function assignment1(){
    let str = prompt("Enter a string:");
let count = 0;

for(let i = 0; i < str.length; i++){
    let ch = str[i].toLowerCase();
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        count++;
    }
}

console.log("Number of vowels:", count);
}

function assignment2() {
    let str = prompt("Enter a string:");
let reversed = str.split("").reverse().join("");

if(str === reversed){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}
}

function assignment3() {
    let sentence = prompt("Enter a sentence:");
let firstWord = sentence.split(" ")[0];

console.log("First word:", firstWord);
}

function assignment4() {
    let str = prompt("Enter a string:");
let result = str.replaceAll(" ", "-");

console.log(result);
}

function assignment5() {
    let str = prompt("Enter a sentence:");
let words = str.split(" ");

console.log(words);
}

function assignment6() {
    let str = prompt("Enter a sentence:");
let words = str.split(" ");

for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let result = words.join(" ");
console.log(result);
}

function assignment7() {
    let str = prompt("Enter a string:");
let reversed = "";

for(let i = str.length - 1; i >= 0; i--){
    reversed = reversed + str[i];
}

console.log("Reversed string:", reversed);
}

function assignment8() {
    let str = prompt("Enter a string:");
let char = prompt("Enter character to count:");
let count = 0;

for(let i = 0; i < str.length; i++){
    if(str[i] === char){
        count++;
    }
}

console.log("Occurrences:", count);
}

function assignment9() {
    let str = prompt("Enter a string:");
let result = str.replace(/[^a-zA-Z0-9]/g, "");

console.log(result);
}

function assignment10() {
    let str = prompt("Enter a string:");

if(str[0] === str[str.length - 1]){
    console.log("Starts and ends with same character");
}else{
    console.log("Different characters");
}
}