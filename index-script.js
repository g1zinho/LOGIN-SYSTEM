function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var listItem = document.createElement("li");
        listItem.innerHTML = taskText + ' <button class="editBtn" onclick="editTask(this)">Edit</button>';
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function editTask(editBtn) {
    var listItem = editBtn.parentElement;
    var taskText = listItem.firstChild.nodeValue.trim();
    var newText = prompt("Edit task:", taskText);

    if (newText !== null && newText.trim() !== "") {
        listItem.firstChild.nodeValue = newText.trim() + ' ';
    }
}


function refreshPage(){
    window.location.reload();
} 