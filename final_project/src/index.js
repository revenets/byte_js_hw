import {a} from './test.js';
import './styles/style.scss';
import {Form} from '../src/components/Form.js';

// Creating Login form

const logContainer = document.querySelector ('.login');
const formWrapper = document.createElement ('div');
formWrapper.classList.add ('login__form');

const LOGIN_TEXT = 'login';
const REGISTER_TEXT = 'register';

const switchRegisterBtn = document.createElement ('button');
switchRegisterBtn.classList.add ('login__form-switch');
switchRegisterBtn.innerText = REGISTER_TEXT;
formWrapper.append(switchRegisterBtn);

logContainer.append(formWrapper);

// Registration Form
const registerForm = new Form ([
  {name: 'Email', type: 'email', id: 'user-email'},
  {name: 'Name', type: 'text', id: 'user-name'},
  {name: 'Password', type: 'password', id: 'user-password'}
]);
registerForm.render('submit', REGISTER_TEXT);

// Login form
const loginForm = new Form ([
    {name: 'Email', type: 'email', id: 'user-email'},
    {name: 'Password', type: 'password', id: 'user-password'}
  ]);
loginForm.render('submit', LOGIN_TEXT);
loginForm.show(formWrapper);


switchRegisterBtn.addEventListener('click', () => {
    if(switchRegisterBtn.innerHTML === REGISTER_TEXT) {
        loginForm.hide();
        registerForm.show(formWrapper);
        switchRegisterBtn.innerHTML = LOGIN_TEXT;
        
    } else {
        registerForm.hide();
        loginForm.show(formWrapper);
        switchRegisterBtn.innerHTML = REGISTER_TEXT;
        
    }
})

// Creating todo config form

const todoConfigWrapper = document.querySelector('.todo__config');

const configForm = new Form([
    {name: 'Name', type: 'text', id: 'add-task-name'},
    {name: 'Description', type: 'text', id: 'add-task-description'}
]);
configForm.render('add', 'add task');
configForm.show(todoConfigWrapper);