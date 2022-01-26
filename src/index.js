import './styles/style.css';
import header from './header';
import sidebar from './sidebar';
import doItem from './main';


document.getElementById('content');

content.appendChild(header());
content.appendChild(sidebar());
content.appendChild(doItem());