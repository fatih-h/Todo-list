import './styles/style.css';
import plus from './plus';
import makeTodo from './makeTodo';
import header from './header';
import sidebar from './sidebar';
import doItem from './main';
import { format, add } from 'date-fns';

document.getElementById('content');

(function () {
    content.appendChild(header());
    content.appendChild(sidebar());
    content.appendChild(plus());
    content.appendChild(doItem());
})();

document.getElementsByClassName('plus-button')[0].addEventListener('click', () => {
    let mainBox = document.getElementsByClassName('main-box')[0];
    mainBox.appendChild(makeTodo('General'));
});


document.getElementsByClassName('side-box')[0].addEventListener('click', (e) => {
    if (e.target.type == 'button') {

        if (e.target.classList[0] == 'side-button-home') {
            Array.from(document.getElementsByClassName('main-todo')).forEach((event) => {
                event.style.display = 'grid';
            });
        }

        else if (e.target.classList[0] == 'side-button-week') {

            Array.from(document.getElementsByClassName('main-todo-dueDate')).forEach((event) => {
                let counter = 0;
                for (let i = 0; i < 7; i++) {
                    let x = add(new Date(), { days: i });
                    if (event.value == format(x, 'y-MM-dd')) {
                        counter++;
                    }
                }
                if (counter > 0) {
                    event.parentElement.style.display = 'grid';
                } else {
                    event.parentElement.style.display = 'none';
                }

            });
        }

        else if (e.target.classList[0] == 'side-button-today') {

            Array.from(document.getElementsByClassName('main-todo-dueDate')).forEach((event) => {
                if (event.value == format(new Date(), 'y-MM-dd')) {
                    event.parentElement.style.display = 'grid';
                }
                else {
                    event.parentElement.style.display = 'none';
                }
            });
        }
    }

});
