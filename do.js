function addTask() {
    var taskinput = document.getElementById("taskinput");
    var tasklist = document.getElementById("tasklist");

    if (taskinput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }  

    var listItem = document.createElement('li');
    listItem.innerText = taskinput.value;

    var buttonContainer = document.createElement('div');
    buttonContainer.className = "task-button";

    var deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        tasklist.removeChild(listItem);
    };

    var completeButton = document.createElement('button');
    completeButton.innerText = "Complete";
    completeButton.onclick = function() {
        listItem.classList.toggle('completed');
    };

    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(completeButton);
    listItem.appendChild(buttonContainer);
    tasklist.appendChild(listItem);

    // Clear the input field
    taskinput.value = "";
}
