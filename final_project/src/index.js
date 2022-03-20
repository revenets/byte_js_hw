import './styles/style.scss';
import {LoginForm, RegisterForm, TaskConfigForm} from './components/Form.js';
import {Task} from '../src/components/Task.js';
import {api, TOKEN_STR} from '../src/components/API.js';

// Create login form wrapper

const LOGIN_TEXT = 'login';
const REGISTER_TEXT = 'register';

const logContainer = document.querySelector ('.login');
const todoConfigWrapper = document.querySelector ('.todo__config-wrapper');
const headerNav = document.querySelector ('.header__nav');
const headerUserLogo = document.querySelector ('.header__nav-user');
const logoutButton = document.querySelector ('.header__nav-logout');
const taskList = document.querySelector ('.todo__list');

const formWrapper = document.createElement ('div');
const switchRegisterBtn = document.createElement ('button');

formWrapper.classList.add ('login__form');
switchRegisterBtn.classList.add ('login__form-switch');
switchRegisterBtn.innerText = REGISTER_TEXT;

formWrapper.prepend (switchRegisterBtn);
logContainer.append (formWrapper);

// Create classes of forms

const loginForm = new LoginForm ('login');
const registerForm = new RegisterForm ('register');
const configForm = new TaskConfigForm ('add task');

// Add login form events

const hideBlock = block => {
  block.classList.toggle ('hidden');
};

switchRegisterBtn.addEventListener ('click', () => {
  if (switchRegisterBtn.innerHTML === REGISTER_TEXT) {
    loginForm.hide ();
    registerForm.show (formWrapper);
    switchRegisterBtn.innerHTML = LOGIN_TEXT;
  } else {
    registerForm.hide ();
    loginForm.show (formWrapper);
    switchRegisterBtn.innerHTML = REGISTER_TEXT;
  }
});

logoutButton.addEventListener ('click', () => {
  localStorage.removeItem (TOKEN_STR);
  document.location.reload ();
});

// Script to do after autologin

const scriptAfterLogin = () => {
  api.autoLogin ().then (user => (headerUserLogo.innerText = user.name[0]));
  hideBlock (logContainer);
  configForm.show (todoConfigWrapper);
  headerNav.classList.toggle ('logged');
  api.getAllTasks ().then (results =>
    results.forEach (res => {
      const newTask = new Task (res.name, res.description, res._id);
      newTask.show (taskList);
    })
  );
};

// Handling login form submit

loginForm.formBody.addEventListener ('submit', event => {
  event.preventDefault ();
  const logEmail = document.getElementById ('login-email').value;
  const logPassword = document.getElementById ('login-password').value;
  api
    .logUser ({
      email: logEmail,
      password: logPassword,
    })
    .then (result => {
      scriptAfterLogin ();
    })
    .catch (error => {
      console.log (error);
      alert ('No such user, please register');
    });
});

// // Handling register form submit

registerForm.formBody.addEventListener ('submit', event => {
  event.preventDefault ();
  const regEmail = document.getElementById ('register-email').value;
  const regName = document.getElementById ('register-name').value;
  const regPassword = document.getElementById ('register-password').value;
  api
    .regUser ({
      email: regEmail,
      name: regName,
      password: regPassword,
    })
    .then (() => {
      registerForm.hide ();
      loginForm.show (formWrapper);
      switchRegisterBtn.innerHTML = REGISTER_TEXT;
    })
    .catch (error => {
      console.log (error);
    });
});

// Handling task config form submit

configForm.formBody.addEventListener ('submit', event => {
  event.preventDefault ();

  const taskName = document.getElementById ('task-add-name').value;
  const taskDescription = document.getElementById ('task-add-description')
    .value;
  api
    .addTask ({
      name: taskName,
      description: taskDescription,
    })
    .then (result => {
      console.log (result);
      const newTask = new Task (result.name, result.description, result._id);
      newTask.show (taskList);
    })
    .catch (error => {
      console.log (error);
    });
});

// Render on reload
const isAuthSuccess = api.isLoggedIn ();
if (isAuthSuccess) {
  scriptAfterLogin ();
} else {
  loginForm.show (formWrapper);
}
