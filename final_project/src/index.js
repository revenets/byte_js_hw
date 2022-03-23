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

const loginForm = new LoginForm ('login');
const registerForm = new RegisterForm ('register');
const configForm = new TaskConfigForm ('add task');

const hideBlock = block => {
  block.classList.toggle ('hidden');
};

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

const isAuthSuccess = api.isLoggedIn ();
if (isAuthSuccess) {
  scriptAfterLogin ();
} else {
  loginForm.show (formWrapper);
}

// Handling login form submit

loginForm.formBody.addEventListener ('submit', async event => {
  event.preventDefault ();
  const logEmail = document.getElementById ('login-email');
  const logPassword = document.getElementById ('login-password');

  api
    .logUser ({
      email: logEmail.value,
      password: logPassword.value,
    })
    .then (() => {
      scriptAfterLogin ();
    })
    .catch (error => {
      error.data.details.forEach (err => {
        if (logEmail.name === err.path[0]) {
          logEmail.nextElementSibling.innerText = err.message;
          console.log (err.message);
        } else if (logPassword.name === err.path[0]) {
          logPassword.nextElementSibling.innerText = err.message;
        }
      });
    });
});

// // Handling register form submit

registerForm.formBody.addEventListener ('submit', async event => {
  event.preventDefault ();
  const regEmail = document.getElementById ('reg-email');
  const regName = document.getElementById ('reg-name');
  const regPassword = document.getElementById ('reg-password');
  api
    .regUser ({
      email: regEmail.value,
      name: regName.value,
      password: regPassword.value,
    })
    .then (() => {
      registerForm.hide ();
      loginForm.show (formWrapper);
      switchRegisterBtn.innerHTML = REGISTER_TEXT;
    })
    .catch (error => {
      if (!error.data.details) {
        alert(error.data.email)
      } else {
        error.data.details.forEach (err => {
          if (regEmail.name === err.path[0]) {
            regEmail.nextElementSibling.innerText = err.message;
          } else if (regName.name === err.path[0]) {
            regName.nextElementSibling.innerText = err.message;
          } else if (regPassword.name === err.path[0]) {
            regPassword.nextElementSibling.innerText = err.message;
          }
        });
      }
    });
});

// Handling task config form submit

configForm.formBody.addEventListener ('submit', event => {
  event.preventDefault ();

  const taskName = document.getElementById ('task-add-name');
  const taskDescription = document.getElementById ('task-add-description');
  api
    .addTask ({
      name: taskName.value,
      description: taskDescription.value,
    })
    .then (result => {
      console.log (result);
      const newTask = new Task (result.name, result.description, result._id);
      newTask.show (taskList);
    })
    .catch (error => {
      error.data.details.forEach (err => {
        if (taskName.name === err.path[0]) {
          taskName.nextElementSibling.innerText = err.message;
        } else if (taskDescription.name === err.path[0]) {
          taskDescription.nextElementSibling.innerText = err.message;
        }
      });
    });
});
