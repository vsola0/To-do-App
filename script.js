
function insertTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (!title) {
        alert('Please add a title to your task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    taskDiv.innerHTML = `
        <div class="task-info">
            <strong>${title}</strong>
            <p>${description}</p>
            <small>Due: ${dueDate}</small>
            <small>Priority: ${priority}</small>
        </div>
        <div class="task-actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="">Delete</button>
        </div>
        `;
    
    taskList.appendChild(taskDiv);
    
}

function editTask(button) {
    selectedTask = button.parentElement. parentElement;

    document.getElementById('title').value = selectedTask.getElementByTagName('strong') [0].innerText;
    document.getElementById('description').value = selectedTask.getElementByTagName('p') [0].innerText;

    document.getElementById('dueDate').value = selectedTask.getElementByTagName('small') [0].innerText.replace('Due: ', '').trim();
    document.getElementById('priority').value = selectedTask.getElementByTagName('small') [1].innerText.replace('Priority: ', '').trim();

}

