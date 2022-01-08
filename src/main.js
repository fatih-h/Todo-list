import './styles/main.css';
import { format } from 'date-fns';
import todo from './todo';

function main() {
    let main = document.createElement('div');
    main.classList.add('main-box');

    let box = document.createElement('div');
    let title = document.createElement('h2');
    let description = document.createElement('p');
    let dueDate = document.createElement('input');
    let priority = document.createElement('div');
    let green = document.createElement('button');
    let yellow = document.createElement('button');
    let red = document.createElement('button');
    let check = document.createElement('button');

    dueDate.setAttribute('type', 'date');
    dueDate.value = format(new Date(), 'y-MM-dd');
    dueDate.setAttribute('min', format(new Date(), 'y-MM-dd'));
    green.setAttribute('type', 'button');
    yellow.setAttribute('type', 'button');
    red.setAttribute('type', 'button');
    check.setAttribute('type', 'button');

    green.textContent = "Easy";
    yellow.textContent = "Normal";
    red.textContent = "Hard";

    box.classList.add('main-todo');
    title.classList.add('main-todo-title');
    description.classList.add('main-todo-description');
    dueDate.classList.add('main-todo-dueDate');
    priority.classList.add('main-todo-priority');
    green.classList.add('green');
    yellow.classList.add('yellow');
    red.classList.add('red');
    check.classList.add('main-todo-check');

    let task = new todo('Buy Apple', 'GO to grocery to buy an apple', format(new Date(), 'dd-MM-y'));

    title.textContent = task.title;
    description.textContent = task.description;

    green.addEventListener('click', event => {
        task.changePriority(event.target.textContent);
    });

    yellow.addEventListener('click', event => {
        task.changePriority(event.target.textContent);
    });

    red.addEventListener('click', event => {
        task.changePriority(event.target.textContent);
    });

    main.appendChild(box);
    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(dueDate);
    box.appendChild(priority);
    priority.appendChild(green);
    priority.appendChild(yellow);
    priority.appendChild(red);
    box.appendChild(check);

    return main;
}

export default main;