function assignment1() {
let num = prompt("Enter a number:");
num = Number(num);

if (num > 0) {
    alert("The number is Positive");
}
else if (num < 0) {
    alert("The number is Negative");
}
else {
    alert("The number is Zero");
}
}

function assignment2() {
let num = prompt("Enter a number to generate its multiplication table:");

num = Number(num);

for (let i = 1; i <= 10; i++) {
    let result = num * i;
    document.write(num + " x " + i + " = " + result + "<br>");
}
}

function assignment3() {
    
let randomNumber = Math.floor(Math.random() * 10) + 1;


let guess = prompt("Guess a number between 1 and 10");


while (Number(guess) !== randomNumber) {
    guess = prompt("Wrong guess! Try again:");
}

alert("Congratulations! You guessed the correct number: " + randomNumber);
}

function assignment4() {
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.write(i + "<br>");
    }
}
}

function assignment5() {

let num = prompt("Enter a number");

num = Number(num);

let sum = 0;

do {
    let digit = num % 10;   
    sum = sum + digit;      
    num = Math.floor(num / 10); 
} while (num > 0);


document.write("Sum of digits = " + sum);
}

function assignment6() {
for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz <br>");
    }
    
  
    else if (i % 3 === 0) {
        document.write("Fizz <br>");
    }
    
    
    else if (i % 5 === 0) {
        document.write("Buzz <br>");
    }
    
    
    else {
        document.write(i + "<br>");
    }
}
}

function assignment7() {
   
let num = prompt("Enter a number");


num = Number(num);

let isPrime = true;

for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (num <= 1) {
    document.write(num + " is not a Prime Number");
}
else if (isPrime) {
    document.write(num + " is a Prime Number");
}
else {
    document.write(num + " is not a Prime Number");
}
}

function assignment8() {
 let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern = pattern + "*";
    }

    document.write(pattern + "<br>");
}
}

function assignment9() {
  
let n1 = prompt("Enter first number:");
let n2 = prompt("Enter second number:");
let n3 = prompt("Enter third number:");


n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

let largest;

if (n1 >= n2 && n1 >= n3) {
    largest = n1;
} 
else if (n2 >= n1 && n2 >= n3) {
    largest = n2;
} 
else {
    largest = n3;
}

document.write("The largest number is: " + largest);
}

function assignment10() {
let str = prompt("Enter a string");

str = str.toLowerCase();

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}

if (str === reversed) {
    document.write(str + " is a Palindrome");
} else {
    document.write(str + " is not a Palindrome");
}
}

function assignment11() {
  
let str = prompt("Enter a string");

str = str.toLowerCase();

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}

document.write("Number of vowels: " + vowels + "<br>");
document.write("Number of consonants: " + consonants);
}

function assignment12() {

let num = prompt("Enter a number");


num = Number(num);

let reverse = 0;


while (num > 0) {
    let digit = num % 10;      
    reverse = reverse * 10 + digit; 
    num = Math.floor(num / 10);  
}

// Display result
document.write("Reversed number is: " + reverse);
}