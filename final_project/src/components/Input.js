export class Input {
  constructor (name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.inputWrapper = document.createElement ('div');
    this.inputWrapper.classList.add ('form-field-wrapper');
    this.errorSpan = document.createElement ('span');
    this.inputField = document.createElement ('input');
  }

  render (form) {
    this.inputField.type = this.type;
    this.inputField.id = this.id;
    this.inputField.name =  this.name.toLowerCase();
    this.inputField.classList.add ('form-input');
    const label = document.createElement ('label');
    label.htmlFor = this.id;
    label.innerText = this.name;
    this.errorSpan.classList.add ('input-error');

    this.inputField.addEventListener("input", () => {
      this.errorSpan.innerText = "";
    })

    this.inputWrapper.append(label, this.inputField, this.errorSpan);
    form.append(this.inputWrapper);
  }

  setErrorMessage (message) {
    this.errorSpan.innerText = message;
  }
  

}
