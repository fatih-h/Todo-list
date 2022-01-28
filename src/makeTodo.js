import './styles/main.css';
import todo from './todo';
import { format } from 'date-fns';

function makeTodo(type) {
    let box = document.createElement('div');
    let title = document.createElement('input');
    let description = document.createElement('input');
    let dueDate = document.createElement('input');
    let priority = document.createElement('div');
    let green = document.createElement('button');
    let yellow = document.createElement('button');
    let red = document.createElement('button');
    let check = document.createElement('button');


    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'title');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'description');
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

    let task = new todo(type);

    title.addEventListener('keyup', (event) => {
        if (event.key == "Enter") {
            task.changeTitle(title.value);
            let tit = document.createElement('h2');
            tit.textContent = task.title;
            title.after(tit);
            tit.classList.add('main-todo-title');
            title.remove();
        }
    });

    description.addEventListener('keyup', (event) => {
        if (event.key == "Enter") {
            task.changeDescription(description.value);

            let desc = document.createElement('p');
            desc.textContent = task.description;
            description.after(desc);
            desc.classList.add('main-todo-description');
            description.remove();
        }
    });

    dueDate.addEventListener('change', event => {
        task.changeDate(event.target.value);
    });

    green.addEventListener('click', event => {
        task.changePriority(event.target.textContent);

    });

    yellow.addEventListener('click', event => {
        task.changePriority(event.target.textContent);

    });

    red.addEventListener('click', event => {
        task.changePriority(event.target.textContent);

    });

    check.addEventListener('dblclick', event => {
        box.remove();
    });
    check.classList.add(type);

    box.appendChild(title);
    box.appendChild(description);
    box.appendChild(dueDate);
    box.appendChild(priority);
    priority.appendChild(green);
    priority.appendChild(yellow);
    priority.appendChild(red);
    box.appendChild(check);

    return box;
}

export default makeTodo;