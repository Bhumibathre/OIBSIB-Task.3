function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.onclick = function () {
            completeTask(this.parentElement);
        };
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            deleteTask(this.parentElement);
        };
        li.appendChild(deleteBtn);

        document.getElementById('pending-tasks').appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(taskElement) {
    taskElement.classList.add('completed');
    document.getElementById('completed-tasks').appendChild(taskElement);
}

function deleteTask(taskElement) {
    taskElement.remove();
}