import './styles/main.css';
import makeTodo from './makeTodo';
import plus from './plus';


function doItem() {
    let main = document.createElement('div');
    main.classList.add('main-box');
    return main;
}

export default doItem;