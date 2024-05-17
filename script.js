// Function to add a new task to the task list
function addTask() {

    // Get the input value and trim any extra spaces
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {

        // Create a new list item element
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        // Create a container div for the task text and buttons
        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");

        // Create a paragraph to hold the task text
        const taskParagraph = document.createElement("p");
        taskParagraph.textContent = taskText;

        // Create an "Edit" button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-btn");

        // Create a "Remove" button to remove the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Function to remove the task
        function removeTask() {
            listItem.remove();
        }

        // Function to edit the task
        function editTask() {
            // Create an input field with the current task text
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = taskText;
            editInput.classList.add("edit-input");

            // Create an "OK" button to save the edited task
            const okButton = document.createElement("button");
            okButton.textContent = "OK";
            okButton.classList.add("ok-btn");

            // When the "OK" button is clicked, update the task text and remove the input and button
            okButton.addEventListener("click", function() {
                taskParagraph.textContent = editInput.value.trim();
                taskContainer.removeChild(editInput);
                taskContainer.removeChild(okButton);
                taskContainer.insertBefore(taskParagraph, editButton);
            });

            // Replace the task text with the input field and add the "OK" button
            taskContainer.removeChild(taskParagraph);
            taskContainer.insertBefore(editInput, editButton);
            taskContainer.insertBefore(okButton, editButton);
        }

        // Add event listeners to the "Edit" and "Remove" buttons
        editButton.addEventListener("click", editTask);
        removeButton.addEventListener("click", removeTask);

        // Append the task text and buttons to the task container
        taskContainer.appendChild(taskParagraph);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(removeButton);

        // Append the task container to the list item
        listItem.appendChild(taskContainer);

        // Append the list item to the task list
        const taskList = document.getElementById("task-list");
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Add event listener to the "Add Task" button
document.getElementById("add-task-btn").addEventListener("click", addTask);
