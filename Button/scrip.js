let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ol");

button.addEventListener("click", taskhandler);

function taskhandler() {
    let data = input.value;

    if (data == "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = data;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value = "";
}
