function main() {
    let todos = [];
    
    console.log("todo.js fired", todos);
    // let primitives = 1, 'hello', true, null
    // const stuctures = [0, 1, 2, ...], {K: V}

    // add a todo
    let todoForm = document.getElementById('todoForm');
    let todoInput = document.getElementById('todoInput');

    todoForm.addEventListener('submit', (event) => {
        // stops page refresh 
        event.preventDefault();

        const todo = todoInput.value;
        
        todos = add(todos, todo); 
        
        console.log("todos", todos); 
    });
    

    // complete todo
}

main();

function add(todos, todoValue) {
    todos.push(todoValue);

    // got todolist element
    const todoList = document.getElementById('todoList');
    
    // created todo element with textNode
    const todoEl = document.createElement('div');
    const completed = document.createElement('input');
    const todoText = document.createElement('p');
    const deleteEl = document.createElement('p');

    // set class and id
    todoEl.classList.add("todo");   // add class name (1+ elements, good for styling components together)
    todoText.id = 'todoText';       // add id (1 unique element, good for setting one element like an EVENT handler)   
    todoText.textContent = todoValue;
    deleteEl.id = 'deleteBtn';
    deleteEl.textContent = "⌫";
    completed.id = 'completed';

    // add attributes
    completed.setAttribute('type', 'checkbox');

    // EVENT listeners
    // mark completed (strikethrough)
    completed.addEventListener('change', function(event) {
        event.preventDefault();
        completedItem(this);
    });

    // remove todo
    deleteEl.addEventListener('click', (event) => {
        event.preventDefault();
        remove(deleteEl.parentNode);
    });

    // add completed to todo
    // then add todoText, 
    // then the delete btn
    todoEl.append(completed); 
    todoEl.appendChild(todoText);
    todoEl.append(deleteEl);

    // then todo to todoList
    todoList.appendChild(todoEl);

    // clear the input text
    const inputText = document.getElementById('todoInput');
    inputText.value = "";

    console.log("todolist", todoList);

    return todos;
}

function remove(todo) {
    const todoList = document.getElementById('todoList');

    todoList.removeChild(todo);

    console.log("removed");
}

function completedItem(that) {
    console.log("that", that.parentElement.querySelector('#todoText'));

    const todoText = that.parentElement.querySelector('#todoText');

    if (!that.checked) {
        // remove line-through
        todoText.style.textDecoration = "none";
        // uncheck
        console.log('unchecked');
    } else {
        // add line-through
        todoText.style.textDecoration = "line-through";
        // check
        console.log('checked');
    }
}