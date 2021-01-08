// defining variables 
const form = document.querySelector('#task-form');
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// event listener 
loadEventListener();

function loadEventListener(){
    document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removeTask);
    clearBtn.addEventListener('click',clearTask);
    filter.addEventListener('click',filterTask);
}

// add task 
function addTask(e){
    if(taskInput.value===''){
        alert('Add a task');
    } else{
        // create li element 
        const li = document.createElement('li');
        li.className = 'collection-item';
        // create textnode and append it to li 
        li.appendChild(document.createTextNode(taskInput.value));
        // create the remove icon and append it to li 
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<li class = "fa fa-remove"></li>';
        li.appendChild(link);
        // li append to ul 
        taskList.appendChild(li);

        saveToLocalStorage(taskInput.value);
        // clear task 
        taskInput.value = '';
    }
    
    e.preventDefault();
}

// load tasks 
function getTasks(){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // create li element 
        const li = document.createElement('li');
        li.className = 'collection-item';
        // create textnode and append it to li 
        li.appendChild(document.createTextNode(task));
        // create the remove icon and append it to li 
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<li class = "fa fa-remove"></li>';
        li.appendChild(link);
        // li append to ul 
        taskList.appendChild(li);
    })
}

// save to local storage 
function saveToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


//remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure ?')){
            e.target.parentElement.parentElement.remove();   
            removeFromLocalStorage(e.target.parentElement.parentElement);   
        }
    }
}

function removeFromLocalStorage(taskItem){
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clearTask
function clearTask(){
    // taskList.innerHTML = ' '; 
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild); 
    }

    clearTasksFromLS();
}

function clearTasksFromLS(){
    localStorage.clear();
}


// filter task 
function filterTask(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}