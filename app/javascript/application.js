// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('create-todo-btn').addEventListener('click', function() {
        const todoInput = document.getElementById('todo-input');
        const todoText = todoInput.value.trim();

        if (todoText) {
            // Create new todo item
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <div class="todo-actions">
                    <button class="check-btn" title="Mark as complete">✔️</button>
                    <button class="delete-btn" title="Delete todo">❌</button>
                </div>
            `;

            // Append to incomplete list
            document.getElementById('incomplete-list').appendChild(todoItem);

            // Clear input field
            todoInput.value = '';

            // Add event listeners for check and delete buttons
            todoItem.querySelector('.check-btn').addEventListener('click', function() {
                const completeList = document.getElementById('complete-list');
                completeList.appendChild(todoItem);
                todoItem.querySelector('.check-btn').style.display = 'none'; // Hide check button
            });

            todoItem.querySelector('.delete-btn').addEventListener('click', function() {
                todoItem.remove(); // Remove todo item
            });
        } else {
            alert("Please enter a todo item."); // Alert if the input is empty
        }
    });
});
