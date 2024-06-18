document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const dateTime = document.getElementById('dateTime');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} <button class="delete-button">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskClick(event) {
        const target = event.target;
        if (target.classList.contains('delete-button')) {
            target.parentElement.remove();
        } else if (target.tagName === 'LI') {
            target.classList.toggle('completed');
        }
    }

    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        dateTime.textContent = now.toLocaleDateString('en-US', options);
    }

    setInterval(updateDateTime, 1000);
    updateDateTime(); // Initial call to set the date and time immediately
});
