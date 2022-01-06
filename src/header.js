import './styles/header.css';

function header() {
    let main = document.createElement('div');
    main.classList.add('header-box');

    let heading = document.createElement('h1');
    heading.classList.add('header-heading');

    heading.textContent = 'To-Do List';

    main.appendChild(heading);
    return main;
}
export default header;