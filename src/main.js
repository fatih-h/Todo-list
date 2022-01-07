import './styles/main.css';
import {format} from 'date-fns';
import todo from './todo';

function main() {
    let main = document.createElement('div');
    main.classList.add('main-box');

    let box = document.createElement('div');
    let title = document.createElement('h2');
    let description = document.createElement('p');
    let dueDate = document.createElement('input');
    let priority = document.createElement('div');
    let check = document.createElement('input');

    dueDate.setAttribute('type', 'date');
    check.setAttribute('type', 'radio');

    box.classList.add('main-todo');
    title.classList.add('main-todo-title');
    description.classList.add('main-todo-description');
    dueDate.classList.add('main-todo-dueDate');
    priority.classList.add('main-todo-priority');
    check.classList.add('main-todo-check');

    let task = new todo('Buy Apple', 'GO to grocery to buy an apple', format(new Date(),'d-M-y'));
    console.log(task.title);
    console.log(task.description);
    console.log(task.dueDate);
    console.log(task.priority);
    console.log(task.check);

    title.textContent = task.title;
    description.textContent = task.description;
    // dueDate.placeholder= `${task.dueDate}`;
    priority.style.backgroundColor = task.priority;


    main.appendChild(box);
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(dueDate);
    box.appendChild(priority);
    box.appendChild(check);

    return main;
}

export default main;