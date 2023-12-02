const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
function addTask() {
    const taskText = taskInput.value;
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="taskText"> ${taskText}</span>
        <button onclick = "removeTask(this)" class="removeButton">X</button>
    `;
    taskList.appendChild(li);
    taskInput.value = " ";


}
function removeTask(button){
    const li = button.parentElement;
    taskList.removeChild(li);
}