import './styles/sidebar.css';

function sidebar() {
    let main = document.createElement('div');
    main.classList.add('side-box');

    let navbar = document.createElement('div');
    let home = document.createElement('button');
    let week = document.createElement('button');
    let today = document.createElement('button');
    let project = document.createElement('div');
    let heading = document.createElement('h2');
    let add = document.createElement('button');

    navbar.classList.add('side-button');
    home.classList.add('side-button-home');
    today.classList.add('side-button-today');
    week.classList.add('side-button-week');
    project.classList.add('side-project')
    heading.classList.add('side-project-heading');
    add.classList.add('side-project-add');

    home.setAttribute('type', 'button');
    week.setAttribute('type', 'button');
    today.setAttribute('type', 'button');
    add.setAttribute('type', 'button');

    home.textContent = 'Home';
    week.textContent = 'Week';
    today.textContent = 'Today';
    heading.textContent = 'Projects';
    add.textContent = 'Add New Project';

    main.appendChild(navbar);
    main.appendChild(project);
    navbar.appendChild(home);
    navbar.appendChild(week);
    navbar.appendChild(today);
    project.appendChild(heading);
    project.appendChild(add);

    return main;
}

export default sidebar;