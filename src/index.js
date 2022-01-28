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

(function () {
    let mainBox = document.getElementsByClassName('main-box')[0];
    let result = true;
    document.getElementsByClassName('plus-button')[0].addEventListener('click', () => {

        if (result) {
            mainBox.appendChild(makeTodo('General'));
        } else {
            let key = document.getElementsByClassName('side-project-new')[0].textContent.split(' ').join('');
            mainBox.appendChild(makeTodo(key));
            Array.from(document.getElementsByClassName('main-todo')).forEach(event => {
                if (event.childNodes[4].classList[1] == key) {
                    event.style.display = 'grid';
                }
                else {
                    event.style.display = 'none';
                }
            });
        }
    });


    document.getElementsByClassName('side-box')[0].addEventListener('click', (e) => {
        if (e.target.type == 'button') {

            if (e.target.classList[0] == 'side-button-home') {
                result = true;
                Array.from(document.getElementsByClassName('main-todo')).forEach((event) => {
                    event.style.display = 'grid';
                });
            }

            else if (e.target.classList[0] == 'side-button-week') {
                result = true;
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
                result = true;
                Array.from(document.getElementsByClassName('main-todo-dueDate')).forEach((event) => {
                    if (event.value == format(new Date(), 'y-MM-dd')) {
                        event.parentElement.style.display = 'grid';
                    }
                    else {
                        event.parentElement.style.display = 'none';
                    }
                });
            }
            else if (e.target.classList[0] == 'side-project-new') {
                result = false;
            }
        }

    });

})();