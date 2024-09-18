const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const addTaskBtn = document.querySelector('#addTaskBtn');

addTaskBtn.addEventListener('click',addTask);

function addTask() 
{
    const taskValue = taskInput.value;


if (taskValue === '')
{
    alert('please enter a task');
    return;
}

const li = document.createElement('li');
li.innerHTML = taskValue;

const deleteBtn = document.createElement('button');
deleteBtn.innerHTML = "delete";
deleteBtn.style.marginLeft = '10px';

deleteBtn.addEventListener('click', function()
{
    taskList.removeChild(li);
});

li.appendChild(deleteBtn);

taskList.appendChild(li);

taskInput.value = '';;

}

