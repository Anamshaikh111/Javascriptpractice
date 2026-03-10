//Assignment 1.[  Arithmetic Operations ]
function assignment1() {
let num1 = (prompt("Enter the first number:"));
let num2 = (prompt("Enter the second number:"));

let add = num1 + num2;
let sub = num1 -  num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

console.log("Addition: " + add);
console.log("Substraction: " + sub);
console.log("Multiplication: "+ mul);
console.log("Division:" + div);
console.log("Modulus:" + mod);
}

//Assignment 2 [ Comparison Operators]

function assignment2() {
let num2 = (prompt("Enter the first number:"));
let num3 = (prompt("Enter the second number:"));

if  (num2 > num3) {
    console.log("First number is greater then secoond number");
}
else if (num2 < num3) {
    console.log("First number is less than second number");
}
else {
    console.log("Both numberss are equal");
}
}

//Assignment 3 [ Logical Operators ]

function assignment3() {
    let math = prompt("Enter Math marks: ");
    let science = prompt("Enter Science marks: ");

    if( math >= 90 && science >= 85) {
        console.log("Student is eligible for scholarship");
    } 
    else {
        console.log("Student is not eligible for scholarship");
    }
}


//Assignment 4 [ Assignment Operators ]

function assignment4() {
    let x = 10;
    console.log("Initial value of x:", x);

    x += 5;
    console.log("After adding 5:", x);

    x *= 3;
    console.log("After multiplying by 3:" , x);

      x -= 10;
    console.log("After substracting by 10:" , x);

      x /= 2;
    console.log("After dividing by 2:" , x);

      x %= 3;
    console.log("After modulus with 3:" , x);

}

//Assignment 5 [ Operator Precedence ]

function assignment5() {
let result1 = 10 + 3 * 5;
console.log("1. 10 + 3 * 5 = " + result1);

let result2 = (10 + 3) * 5;
console.log("2. (10 + 3) * 5 = " + result2);

let result3 = 20 / 2 + 3;
console.log("3. 20 / 2 + 3 = " + result3);

let result4 = 20 / (2 + 3);
console.log("4. 20 / (2 + 3) = " + result4);
}

//Assignment 6 [ Combined example ]

function assignment6() {
let length = Number(prompt("Enter the length of rectangle"));
let width = Number(prompt("Enter the width of rectangle"));


let perimeter = 2 * (length + width);


let area = length * width;


console.log("Perimeter of rectangle = " + perimeter);
console.log("Area of rectangle = " + area);


let result = perimeter > area;
console.log("Is perimeter greater than area? " + result);
}

//Assignment 7 [ Complex logical and comparison operations ]

function assignment7() {
let age = Number(prompt("Enter your age"));
let citizenship = prompt("Are you a citizen? (true/false)") === "true";


let eligible = (age >= 18 && citizenship) && !false;


console.log("Age:", age);
console.log("Citizenship:", citizenship);
console.log("Eligible to vote:", eligible);
} 

//Assignment 8 [ Complex logical and comparison operations ]