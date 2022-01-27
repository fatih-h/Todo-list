import './styles/style.css';
import makeTodo from './makeTodo';
import header from './header';
import sidebar from './sidebar';
import doItem from './main';


document.getElementById('content');

(function () {
    content.appendChild(header());
    content.appendChild(sidebar());
    content.appendChild(doItem());
})();

document.getElementsByClassName('side-box')[0].addEventListener('click', (e) => {
    if (e.target.type == 'button' && e.target.classList[0] != 'side-project-add') {
        let mainBox = document.getElementsByClassName('main-box')[0];
        mainBox.appendChild(makeTodo('Uzaya git', "osur"));
    }
});


//main.appendChild(makeTodo('Salata yap', 'Soyle guzel bir salata yap'));
