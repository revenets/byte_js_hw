import './styles/style.scss';
import {Form} from './components/Form.js';
import {Input} from './components/Input.js';
import {Task} from '../src/components/Task.js';
import {api, TOKEN_STR} from '../src/components/API.js';

const logContainer = document.querySelector ('.login');
const container = document.querySelector ('.wrapper');
const todoConfigWrapper = document.querySelector ('.todo__config-wrapper');
const headerNav = document.querySelector ('.header__nav');
const headerUserLogo = document.querySelector ('.header__nav-user');
const logoutButton = document.querySelector ('.header__nav-logout');
const taskList = document.querySelector ('.todo__list');
const formWrapper = document.createElement ('div');
const addTaskForm = document.querySelector ('.add');
formWrapper.classList.add ('login__form');
logContainer.append (formWrapper);

const todoConfigClose = document.createElement ('button');
todoConfigClose.innerHTML = '<i class="fas fa-times"></i>';
todoConfigClose.classList.add ('todo__config-wrapper-close');
todoConfigClose.addEventListener ('click', () =>
  todoConfigWrapper.classList.add ('hidden')
);

todoConfigWrapper.addEventListener ('click', (event) => {
  if(event.target.contains(todoConfigWrapper)){
    todoConfigWrapper.classList.add ('hidden')
  }
})

const taskInnerText = document.createElement ('p');
taskInnerText.innerText = 'No tasks yet!';
taskInnerText.classList.add ('todo__info', 'hidden');
container.append (taskInnerText);
addTaskForm.addEventListener ('click', () =>
  todoConfigWrapper.classList.remove ('hidden')
);
// Login form

const forLogin = data => {
  return api.logUser (data);
};

const loginAfterSubmit = () => {
  const isAuthSuccess = api.isLoggedIn ();
  if (isAuthSuccess) {
    scriptAfterLogin ();
  } else {
    login.show ();
  }
};

const login = new Form (
  'login',
  true,
  'register',
  [
    new Input ('Email', 'text', 'login-email'),
    new Input ('Password', 'password', 'login-password'),
  ],
  'submit',
  forLogin,
  formWrapper,
  loginAfterSubmit
);

// Register form

const forRegister = data => {
  return api.regUser (data);
};

const registerAfterSubmit = () => {
  register.hide ();
  login.show ();
};

const register = new Form (
  'register',
  true,
  'login',
  [
    new Input ('Email', 'text', 'reg-email'),
    new Input ('Name', 'text', 'reg-name'),
    new Input ('Password', 'password', 'reg-password'),
  ],
  'submit',
  forRegister,
  formWrapper,
  registerAfterSubmit
);

login.switchToFormEvent (register);
register.switchToFormEvent (login);

const scriptAfterLogin = () => {
  api.autoLogin ().then (user => (headerUserLogo.innerText = user.name[0]));
  hideBlock (logContainer);
  addTaskForm.classList.remove ('hidden');
  configTask.show ();
  headerNav.classList.toggle ('logged');
  api.getAllTasks ().then (results => {
    if (results.length) {
      taskInnerText.classList.add ('hidden');
      results.forEach (res => {
        const newTask = new Task (res);
        newTask.show (taskList);
      });
    } else {
      taskInnerText.classList.remove ('hidden');
    }
  });
};

// Task configuration form

const forConfig = data => {
  return api.addTask (data);
};

const afterConfigSubmit = (res) => {
  todoConfigWrapper.classList.add('hidden');
  const newTask = new Task (res);
  newTask.show (taskList);
  taskInnerText.classList.add ('hidden');
};

const configTask = new Form (
  'add task',
  false,
  '',
  [
    new Input ('Name', 'text', 'task-add-name'),
    new Input ('Description', 'text', 'task-add-description'),
  ],
  'add',
  forConfig,
  todoConfigWrapper,
  afterConfigSubmit
);

configTask.formWrapper.append(todoConfigClose);

const hideBlock = block => {
  block.classList.toggle ('hidden');
};

logoutButton.addEventListener ('click', () => {
  localStorage.removeItem (TOKEN_STR);
  addTaskForm.classList.add ('hidden');
  document.location.reload ();
});

loginAfterSubmit ();

taskList.addEventListener ('click', (e) => {
  const taskCloseBtns = document.querySelectorAll('.todo__list-item-close-btn');
  if(!taskCloseBtns.length) {
    taskInnerText.classList.remove ('hidden');
  }
})

