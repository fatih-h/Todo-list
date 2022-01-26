import './styles/main.css';
import makeTodo from './makeTodo';
import sidebar from './sidebar';

function doItem() {
    let main = document.createElement('div');
    main.classList.add('main-box');

    main.appendChild(makeTodo('Salata yap', 'Soyle guzel bir salata yap'));


    return main;
}

export default doItem;