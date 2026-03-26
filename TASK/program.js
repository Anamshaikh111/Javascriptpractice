// -------------------- 1. TO-DO LIST --------------------
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerText = taskText;

    // Mark complete on click
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

// -------------------- 2. FORM VALIDATION --------------------
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("formMessage");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        message.innerText = "Name cannot be empty";
        return false;
    }

    if (!emailPattern.test(email)) {
        message.innerText = "Invalid email format";
        return false;
    }

    if (password.length < 6) {
        message.innerText = "Password must be at least 6 characters";
        return false;
    }

    message.innerText = "Form submitted successfully!";
    return false; // prevent reload for demo
}

// -------------------- 3. THEME TOGGLE --------------------
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// -------------------- 4. COUNTER --------------------
let count = localStorage.getItem("count") || 0;
document.getElementById("count").innerText = count;

function increase() {
    count++;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById("count").innerText = count;
    localStorage.setItem("count", count);
}

// -------------------- 5. MODAL --------------------
function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// -------------------- 6. PASSWORD STRENGTH --------------------
function checkStrength() {
    let password = document.getElementById("strengthPassword").value;
    let result = document.getElementById("strengthResult");

    let weakPattern = /.{1,5}/;
    let mediumPattern = /^(?=.*[a-z])(?=.*[0-9]).{6,}$/;
    let strongPattern = /^(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;

    if (password.length === 0) {
        result.innerText = "";
        result.className = "";
    } 
    else if (strongPattern.test(password)) {
        result.innerText = "Strong";
        result.className = "strong";
    } 
    else if (mediumPattern.test(password)) {
        result.innerText = "Medium";
        result.className = "medium";
    } 
    else if (weakPattern.test(password)) {
        result.innerText = "Weak";
        result.className = "weak";
    }
}