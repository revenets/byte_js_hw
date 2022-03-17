import {Input} from './Input.js';

export class Form {
  constructor (inputs) {
    this.inputs = inputs;
    this.formContainer = document.createElement ('form');
  }

  render (btnText, labelText) {
    const formButton = document.createElement ('button');
    formButton.classList.add ('form-btn');
    formButton.setAttribute ('type', 'submit');
    formButton.innerText = btnText;

    const formLabel = document.createElement ('h3');
    formLabel.classList.add ('form-label');
    formLabel.innerText = labelText;

    this.formContainer.append(formLabel);
    this.inputs.forEach (input => {
      const {name, type, id} = input;
      const newInput = new Input (name, type, id);
      newInput.render (this.formContainer);
    });
    this.formContainer.append (formButton);
  }

  show (div) {
    div.append (this.formContainer);
  }

  hide() {
    this.formContainer.remove();
  }
}
