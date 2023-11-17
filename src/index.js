import {image, h1, p} from './homepage.js';
import './style.css';

let content = document.querySelector('#content');
content.appendChild(image);
content.appendChild(h1);
content.appendChild(p);

let h2 = document.createElement('h2');
h2.textContent = 'This should be red';
h2.classList.add('red');
content.appendChild(h2);