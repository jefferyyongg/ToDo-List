const list = document.querySelector('.list')

const btnVisivility = function(){
    const checked = document.querySelectorAll('input:checked');
    const delBtn = document.querySelector('.btn');
   
    if (checked.length === 0) {
        delBtn.style.visibility  = 'hidden';
    } else {
        delBtn.style.visibility  = 'visible';
    }
}

const delFromList = async function(){
    const checked = document.querySelectorAll('input:checked');
    const delBtn = document.querySelector('.btn');

    for(const check of checked){
        await delApi(check.parentNode.className)
    }

    getAllTasks();
    delBtn.style.visibility  = 'hidden';
}

const addToList = function() {
    const taskInput = document.getElementById('newtask').value;
    const text = {description: taskInput, ID: ""};

    postApi(text);
    getAllTasks();
}

const getAllTasks = async function(){
    const getRequest = await getApi();
    list.innerHTML = '';
    getRequest.forEach(element => {
        addToDom(element)
    })
}

const addToDom = function(task) {
    const li = document.createElement('li'),
        text = document.createTextNode(task.description),
        checkbox = document.createElement('input');

    li.setAttribute('class', task._id);
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'mycheck');
    checkbox.setAttribute('onchange', 'btnVisivility()');

    li.appendChild(checkbox);
    li.appendChild(text);
    list.appendChild(li);
}