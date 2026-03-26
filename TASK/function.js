//Question one 
function questionone() {
function countWords(sentence) {
    if (!sentence) return 0;
    return sentence.trim().split(/\s+/).length;
}

// Example
console.log(countWords("Hello world from JS")); 
}

//Question Two 
function questiontwo() {
function longestWord(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

// Example
console.log(longestWord("I love programming in JavaScript")); 
}

//Questioon three 
function questionthree() {
function removeFalsy(arr) {
    return arr.filter(Boolean);
}

// Example
console.log(removeFalsy([0, "hello", false, null, 42, "", undefined, NaN]));
// Output: ["hello", 42]
}

//Question four 
function questionfour() {
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // remove duplicates
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
}

// Example
console.log(secondLargest([10, 5, 20, 8, 20])); // 10
}

//Question five 
function questionfive() {
function sortArray(arr) {
    // Bubble Sort
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example
console.log(sortArray([5, 2, 9, 1, 5, 6])); // [1,2,5,5,6,9]
}