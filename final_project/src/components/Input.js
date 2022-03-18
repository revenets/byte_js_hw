export class Input {
  constructor (name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.inputWrapper = document.createElement ('div');
    this.inputWrapper.classList.add ('form-field-wrapper');
  }

  render (form) {
    const inputField = document.createElement ('input');
    inputField.setAttribute = ('type', this.type);
    inputField.setAttribute = ('id', this.id);
    inputField.classList.add ('form-input');
    const label = document.createElement ('label');
    label.htmlFor = inputField;
    label.innerText = this.name;
    const errorSpan = document.createElement ('span');
    errorSpan.classList.add ('input-error');

    this.inputWrapper.append(label, inputField, errorSpan);
    form.append(this.inputWrapper);
  }
  

}