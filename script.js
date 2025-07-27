 const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTodo();
    updateTaskCount();
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', function() {
            li.remove();
            updateTaskCount();
        });

        li.appendChild(deleteButton);
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
        todoInput.value = '';
        todoInput.focus();
    }
}

function updateTaskCount() {
    const taskCountValue = todoList.children.length;
    taskCount.textContent = `Tasks: ${taskCountValue}`;
}

// Initial display of task count
updateTaskCount();
