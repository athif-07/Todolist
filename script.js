let addTodoButton = document.getElementById("addTodo");
let todoContainer = document.getElementById("todoContainer");
let inputField = document.getElementById("inputField");

addTodoButton.addEventListener('click', function () {
    var todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;


    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', function () {
        todoContainer.removeChild(todoItem);
    });

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'underline';
        paragraph.style.color = 'red';
        paragraph.style.fontWeight = 'bold';
    });


    todoItem.appendChild(paragraph);
    todoItem.appendChild(deleteButton);
    todoContainer.appendChild(todoItem);

    inputField.value = '';
});