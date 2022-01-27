import './styles/plus.css';
import makeTodo from "./makeTodo";

function plus() {
    let main = document.createElement('div');
    main.classList.add('plus-box');

    let plusButton = document.createElement('button');
    plusButton.classList.add('plus-button');
    plusButton.textContent = "+";

    main.appendChild(plusButton);
    return main;
}

export default plus;