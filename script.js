
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
        
        `
}
