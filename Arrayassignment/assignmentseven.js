let names = [];


function addName() {
    let input = document.getElementById("nameInput");
    let name = input.value.trim();

    if (name === "") {
        alert("Please enter a name!");
        return;
    }

    names.push(name);
    input.value = "";
    displayNames();
}


function displayNames() {
    let list = document.getElementById("nameList");
    list.innerHTML = "";

    names.forEach(name => {
        let li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
    });
}


function sortNames() {
    names.sort((a, b) => a.localeCompare(b));
    displayNames();
}


function resetList() {
    names = [];
    displayNames();
}