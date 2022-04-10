import {Input} from './Input.js';
import {api} from './API.js';

export class Form {
  constructor (
    title,
    allowSwitchBtn,
    switchInner,
    inputs,
    submitBtnText,
    submitHandler,
    parentDiv,
    afterSubmit
  ) {
    this.title = title;
    this.allowSwitchBtn = allowSwitchBtn;
    this.switchInner = switchInner;
    this.inputs = inputs;
    this.submitBtnText = submitBtnText;
    this.submitHandler = submitHandler;
    this.parentDiv = parentDiv;
    this.afterSubmit = afterSubmit;

    this.formTitle = document.createElement ('h3');
    this.formBody = document.createElement ('form');
    this.formSwitchButton = document.createElement ('button');
    this.formSubmitButton = document.createElement ('button');
    this.formWrapper = document.createElement ('div');

    this.render ();
  }

  static getInputValues (inputs) {
    let values = {};
    inputs.forEach (input => {
      // console.log (input);
      values[input.name.toLowerCase ()] = input.inputField.value;
    });
    return values;
  }

  render () {
    if (this.allowSwitchBtn) {
      this.formSwitchButton.innerText = this.switchInner;
    } else {
      this.formSwitchButton.style.display = 'none';
    }

    const idString = String (this.title).split (' ').join ('_');
    this.formBody.id = idString;

    this.formTitle.classList.add ('form-label');
    this.formTitle.innerHTML = this.title;

    this.formSwitchButton.classList.add ('form-switch');

    this.formSubmitButton.classList.add ('form-btn');
    this.formSubmitButton.type = 'submit';
    this.formSubmitButton.innerText = this.submitBtnText;

    this.inputs.forEach (input => {
      input.render (this.formBody);
    });

    const preloader = document.querySelector ('.preloader__wrapper');

    this.formBody.addEventListener ('submit', async event => {
      event.preventDefault ();

      this.formValues = Form.getInputValues (this.inputs);
      this.formSubmitButton.setAttribute ('disabled', '');
      // console.log (this.formValues);
      preloader.classList.toggle ('hidden');
      try {
        await this.submitHandler (this.formValues).then(result => {
          this.afterSubmit (result);
        });
      } catch (error) {
        if (!error.data.details) {
          if (error.data.email) {
            alert (error.data.email);
          } else {
            alert (error.data.message);
          }
        } else {
          error.data.details.forEach (({message, path}) => {
            const invalidInput = this.inputs.find (input => {
              return input.inputField.name === path[0];
            });
            invalidInput.setErrorMessage (message);
          });
        }
      }
      this.inputs.forEach (input => {
        input.inputField.value = "";
      })
      preloader.classList.toggle ('hidden');
      this.formSubmitButton.removeAttribute ('disabled');
    });

    this.formBody.append (this.formSubmitButton);

    this.formWrapper.append (
      this.formSwitchButton,
      this.formTitle,
      this.formBody
    );
  }

  switchToFormEvent (form) {
    this.formSwitchButton.addEventListener ('click', () => {
      this.hide ();
      form.show (this.parentDiv);
    });
  }

  switchToForm (form) {
    this.hide ();
    form.show (this.parentDiv);
  }

  show () {
    this.parentDiv.append (this.formWrapper);
  }

  hide () {
    this.formWrapper.remove ();
  }
}
