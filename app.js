document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') return;

    const taskList = document.getElementById('taskList');

    // Create new task element
    const newTask = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        taskList.removeChild(newTask);
    };

    // Add edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function() {
        editTask(taskText, newTask);
    };

    // Toggle task completion
    newTask.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    newTask.appendChild(taskText);
    newTask.appendChild(editBtn);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    // Clear input
    taskInput.value = '';
}

function editTask(taskText, taskElement) {
    const currentText = taskText.textContent;
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.value = currentText;
    editInput.className = 'edit-input';

    // Create a save button for editing
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    saveBtn.onclick = function() {
        const updatedText = editInput.value.trim();
        if (updatedText !== '') {
            taskText.textContent = updatedText;
            taskElement.replaceChild(taskText, editInput);
            taskElement.replaceChild(taskElement.querySelector('.edit-btn'), saveBtn);
        }
    };

    taskElement.replaceChild(editInput, taskText);
    taskElement.replaceChild(saveBtn, taskElement.querySelector('.edit-btn'));
}
