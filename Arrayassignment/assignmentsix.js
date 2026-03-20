// Predefined array
let arr = ["Apple", "Banana", "Mango", "Orange", "Grapes"];


function displayArray(highlightIndex = -1) {
    let container = document.getElementById("arrayContainer");
    container.innerHTML = "";

    arr.forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("item");

        if (index === highlightIndex) {
            div.classList.add("highlight");
        }

        div.innerText = item;
        container.appendChild(div);
    });
}


function searchValue() {
    let input = document.getElementById("searchInput").value.trim();
    let message = document.getElementById("message");

    let index = arr.findIndex(item => item.toLowerCase() === input.toLowerCase());

    if (index !== -1) {
        message.innerText = "Value Found!";
        message.style.color = "green";
        displayArray(index);
    } else {
        message.innerText = "Not Found!";
        message.style.color = "red";
        displayArray();
    }
}


displayArray();