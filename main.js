//getting all needed element from the dom
let name = document.getElementById('name');
let password = document.getElementById('password');
const loginButton = document.getElementById('login');

let newTask = document.getElementById('newTask');
const createTask = document.getElementById('createTask');

const toDoContainer = document.getElementById('items');


//use username and item to post to backend


//event listener for the createNewTask button
createTask.addEventListener('click', function(){
    //create a new dom element
    let listItem = document.createElement('div');

    let text = document.createElement('span');
    //set its text
    text.innerText = newTask.value;

    let editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
        handleEditButton(text.innerText);
    })
    let deleteButton = document.createElement('button');

    deleteButton.innerText = 'Delete'


    listItem.appendChild(text);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    //append it as a child to the parent component
    toDoContainer.appendChild(listItem);
    newTask = '';

    //fetch to backend to post data to database;

}) 

function handleEditButton(text) {
    //fetch to backend to edit data to database;

}

function handleDeleteButton() {
     //fetch to backend to delete data to database;

}
