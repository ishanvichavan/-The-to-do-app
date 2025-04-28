function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.textContent = taskText;

  // Create a delete button for each task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "X";
  deleteButton.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";  // Clear the input field
}
