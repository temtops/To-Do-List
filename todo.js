window.addEventListener('load', ()=> {
    const newForm = document.getElementById('new-task-form');
let input = document.getElementById('new-task');
let add = document.getElementById('save-task')
let form2 = document.getElementById('added-tasks')
let task = document.getElementById('task')
let edit = document.getElementById('edit-task')
let remove = document.getElementById('remove-task')
 add.addEventListener('click', (e)=>{
    e.preventDefault();
    const val = input.value
    if (!val){
        alert('Please add a task')
        return;

    } 
    const contain = document.createElement('div');
    contain.classList.add('added-task-form');
    const taskInput = document.createElement('input');
    taskInput.classList.add('new');
    taskInput.type = "text";
    taskInput.setAttribute('readonly','readonly');
    taskInput.value=val;
    contain.appendChild(taskInput);
    const actions = document.createElement('div');
    actions.classList.add('actions');
    contain.appendChild(actions);
    const editTask = document.createElement('button')
    editTask.classList.add('btn1');
    editTask.innerText = "Edit";
    actions.appendChild(editTask);
    const removeTask = document.createElement('button')
    removeTask.classList.add('btn2');
    removeTask.innerText = "X";
    actions.appendChild(removeTask);
    form2.appendChild(contain);
    editTask.addEventListener('click', ()=> {
        if(editTask.innerText=="Edit"){
            taskInput.removeAttribute('readonly');
            taskInput.focus()
            editTask.innerText="Save"    
        } else{
            editTask.innerText = "Edit";
            taskInput.setAttribute('readonly','readonly')
        }
    })
    removeTask.addEventListener('click', ()=>{
        form2.removeChild(contain)
    })
 } )
})  