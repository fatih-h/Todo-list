import './styles/style.css';
import header from './header';
import sidebar from './sidebar';
import main from './main';


document.getElementById('content');

content.appendChild(header());
content.appendChild(sidebar());
content.appendChild(main());