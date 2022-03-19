import {Input} from './Input.js';
import {api} from './API.js';

class Form {
  constructor (title) {
    this.title = title;
    this.formTitle = document.createElement ('h3');
    this.formBody = document.createElement ('form');
    this.formButton = document.createElement ('button');
    this.formContainer = document.createElement ('div');
  }

  render () {
    this.formBody.id = this.title;

    this.formTitle.classList.add ('form-label');
    this.formTitle.innerHTML = this.title;

    this.formButton.classList.add ('form-btn');
    this.formButton.type = 'submit';

    
    this.formContainer.append(this.formTitle, this.formBody);
    
  }

  show (div) {
    div.append (this.formContainer);
  }

  hide() {
    this.formContainer.remove();
  }
}


export class LoginForm extends Form {
  constructor (options) {
    super(options);
    this.render();
  }
  render() {
    super.render();
    const emailInput = new Input('Email', 'email', 'login-email');
    emailInput.render(this.formBody);
    const passwordInput = new Input('Password', 'password', 'login-password');
    passwordInput.render(this.formBody);
    this.formBody.append(this.formButton);
    this.formButton.innerText = "Submit";
  }
}

export class RegisterForm extends Form {
  constructor (options) {
    super(options);
    this.render();
  }
  render() {
    super.render();
    const emailInput = new Input('Email', 'email', 'reg-email');
    emailInput.render(this.formBody);
    const nameInput = new Input('Name', 'text', 'reg-name');
    nameInput.render(this.formBody);
    const passwordInput = new Input('Password', 'password', 'reg-password');
    passwordInput.render(this.formBody);
    this.formBody.append(this.formButton);
    this.formButton.innerText = "Submit";
  }
}

export class TaskConfigForm extends Form {
  constructor (options) {
    super(options);
    this.render();
  }
  render() {
    super.render();
    const emailInput = new Input('Name', 'text', 'task-add-name');
    emailInput.render(this.formBody);
    const passwordInput = new Input('Description', 'text', 'task-add-description');
    passwordInput.render(this.formBody);
    this.formBody.append(this.formButton);
    this.formButton.innerText = "Add";
  }
}