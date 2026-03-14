function square() {
    function printSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

printSquare(5);
}

function rightangletriangle() {
    function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

printTriangle(5);
}

function Inverted() {
    function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row);
    }
}

printInvertedTriangle(5);
}

function centered() {
    function printPyramid(n) {
    for (let i = 1; i <= n; i++) {

        let space = " ".repeat(n - i);
        let stars = "* ".repeat(i);

        console.log(space + stars);
    }
}

printPyramid(5);
}

function diamond() {
   function printDiamond(n) {

    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "* ".repeat(i));
    }

    for (let i = n-1; i >= 1; i--) {
        console.log(" ".repeat(n-i) + "* ".repeat(i));
    }
}

printDiamond(5);   
}

function pyramid() {
    function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {

        let row = "";

        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }

        console.log(row);
    }
}

printNumberPyramid(4);
}

function pascaltriangle() {
    function printPascalsTriangle(n) {

    for (let i = 0; i < n; i++) {

        let row = "";
        let number = 1;

        for (let j = 0; j <= i; j++) {
            row += number + " ";
            number = number * (i - j) / (j + 1);
        }

        console.log(row);
    }
}

printPascalsTriangle(5);
}

