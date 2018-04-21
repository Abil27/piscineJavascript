//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all Event listeners
loadEventListeners();

// function to load all event Listeners
function loadEventListeners() {
    // add task event listener
    form.addEventListener('submit', addTask);
}

// function add Task
function addTask(event) {
    if(taskInput.value === ''){
        alert('Dude add task');
    }


    // create li element when task is added
    const li = document.createElement('li');
    // add class to the li of the added task
    li.className = 'collection-item';
    // create text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    // add class to the link element
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to the li
    li.appendChild(link);
    // append the li to the ul
    taskList.appendChild(li);
    // clear input after we submit
    taskInput.value = '';





    event.preventDefault();
}