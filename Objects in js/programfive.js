function assignment1() {
let student = {
    name: "Anam",
    age: 20,
    grade: "A"
};

console.log("Original Object:", student);

student.subject = "Math";
console.log("After adding subject:", student);

student.grade = "A+";
console.log("After updating grade:", student);

delete student.age;
console.log("After deleting age:", student);
}

function assignment2() {
let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    
    details: {
        pages: 250,
        genre: "Education"
    }
};

console.log("Pages:", book.details.pages);
console.log("Genre:", book.details.genre);
}

function assignment3() {
let product = {
    name: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}
}

function assignment4() {
let calculator = {

    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        return a / b;
    }
};

console.log("Addition:", calculator.add(10, 5));
console.log("Subtraction:", calculator.subtract(10, 5));
console.log("Multiplication:", calculator.multiply(10, 5));
console.log("Division:", calculator.divide(10, 5));
}

function assignment5() {
let person1 = {
    name: "Anam",
    age: 20
};

let person2 = {
    name: "Sara",
    age: 22
};

if (person1.name === person2.name) {
    console.log("Both persons have the same name.");
} else {
    console.log("Names are different.");
}

if (person1.age === person2.age) {
    console.log("Both persons have the same age.");
} else {
    console.log("Ages are different.");
}
}

function assignment6() {
    // Array to store tasks
let tasks = [];

// Add Task
function addTask(task) {
    tasks.push(task);
    console.log("Task added:", task);
}

// Show Tasks
function showTasks() {
    console.log("Task List:");
    tasks.forEach(function(task, index) {
        console.log(index + ": " + task);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    console.log("Task deleted at index:", index);
}

function updateTask(index, newTask) {
    tasks[index] = newTask;
    console.log("Task updated at index:", index);
}


addTask("Complete assignment");
addTask("Study JavaScript");

showTasks();

updateTask(0, "Complete JS assignment");

deleteTask(1);

showTasks();
}