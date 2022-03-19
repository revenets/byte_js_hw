import './styles/style.scss';
import {LoginForm, RegisterForm, TaskConfigForm} from './components/Form.js';
import {Task} from '../src/components/Task.js';
import {api, TOKEN_STR} from '../src/components/API.js';

// Creating Login form
const LOGIN_TEXT = 'login';
const REGISTER_TEXT = 'register';

const logContainer = document.querySelector ('.login');
const todoConfigWrapper = document.querySelector ('.todo__config-wrapper');
const headerNav = document.querySelector ('.header__nav');
const headerUserLogo = document.querySelector ('.header__nav-user');
const logoutButton = document.querySelector ('.header__nav-logout');

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

loginForm.formBody.addEventListener ('submit', e => {
  e.preventDefault ();
  const logEmail = document.getElementById ('login-email').value;
  const logPassword = document.getElementById ('login-password').value;
  api
    .logUser ({
      email: logEmail,
      password: logPassword,
    })
    .then (result => {
      api.autoLogin ();
      hideBlock (logContainer);
      configForm.show (todoConfigWrapper);
      headerNav.classList.toggle ('logged');
    })
    .catch (error => {
      console.log (error);
      alert ('No such user, please register');
    });
});


// Render on reload
const isAuthSuccess = api.isLoggedIn ();
if (isAuthSuccess) {
  api.autoLogin ();
  hideBlock (logContainer);
  console.log ('welcome');
  configForm.show (todoConfigWrapper);
  headerNav.classList.toggle ('logged');
} else {
  loginForm.show (formWrapper);
}
