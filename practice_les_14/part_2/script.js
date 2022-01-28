const takenLogins = ['alexxx', 'john_cena', 'sam', 'ANDROMEDA2000'];

const form = document.getElementById ('form');
const formInputs = form.querySelectorAll ('input[type=text]');
const agreeCheckbox = document.getElementById ('agree');
const submitBtn = document.getElementById ('submit');

const loginInput = document.getElementById ('login');
const emailInput = document.getElementById ('email');
const passwordInput = document.getElementById ('password');

const validationRules = {
  email: [
    {
      validator: value => Boolean (value),
      errorMessage: "You didn't enter your email address",
    },
  ],
  login: [
    {
      validator: value => Boolean (value),
      errorMessage: "You didn't enter your login",
    },
    {
      validator: value => !takenLogins.includes (value),
      errorMessage: 'This login is already taken',
    },
  ],
  password: [
    {
      validator: value => Boolean (value),
      errorMessage: "You didn't enter your password",
    },
    {
      validator: value => (value === '' ? true : value.length >= 6),
      errorMessage: 'Password must be at least 6 characters long',
    },
  ],
  realName: [
    {
      validator: value => Boolean (value),
      errorMessage: "You didn't enter your name",
    },
    {
      validator: value => (value === '' ? true : value[0].toUpperCase() === value[0]),
      errorMessage: 'Name should start with upper case letter',
    },
  ],
};

const validateForm = (values, rules) => {
  const errors = {};
  let isFormValid = true;

  for (let name in values) {
    console.log (`${name}: ${values[name]}`);

    const currentRules = rules[name];
    const value = values[name];
    currentRules.forEach (rule => {
      const isValid = rule.validator (value);

      if (!isValid) {
        isFormValid = false;
        errors[name] = rule.errorMessage;
      }
    });
  }

  return {
    isFormValid,
    errors,
  };
};

// const simpleValidateForm = (login, email, password) => {
//   const errors = {};
//   let isFormValid = true;

//   if (!login) {
//     isFormValid = false;
//     errors.login = "You didn't enter a login";
//   }

//   if (!email) {
//     isFormValid = false;
//     errors.email = "You didn't enter an email";
//   }

//   if (!password) {
//     isFormValid = false;
//     errors.password = "You didn't enter a password";
//   }

//   if (password !== '' && password.length < 6) {
//     isFormValid = false;
//     errors.password = 'You password must be at least 6 characters long';
//   }

//   if (takenLogins.includes (login)) {
//     isFormValid = false;
//     errors.login = 'You login is not unique';
//   }

//   return {
//     isFormValid,
//     errors,
//   };
// };

const highlightErrorInput = errors => {
  for (let name in errors) {
    const text = errors[name];
    const erroredInput = form.querySelector (`input[name=${name}]`);
    const errorTextElem = form.querySelector (
      `input[name=${name}] ~ .errorMessage`
    );
    erroredInput.setAttribute ('data-invalid', '');
    errorTextElem.innerHTML = text;
  }
};

const convertFormDataToObject = formData => {
  const formValues = {};

  for (let pair of formData.entries ()) {
    formValues[pair[0]] = pair[1];
  }

  return formValues;
};

const handleCheckBoxChange = event => {
  const checked = event.target.checked;
  if (checked) {
    submitBtn.removeAttribute ('disabled');
  } else {
    submitBtn.setAttribute ('disabled', "");
  }
};

const handleInput = event => {
  const currentInput = event.target;
  if (currentInput.hasAttribute ('data-invalid')) {
    currentInput.removeAttribute ('data-invalid');
  }

  const errorTextElem = form.querySelector (
    `input[name=${currentInput.name}] ~ .errorMessage`
  );

  errorTextElem.innerText = '';
};

const handleFormSubmit = event => {
  event.preventDefault ();

  //   const loginValue = loginInput.value;
  //   const emailValue = emailInput.value;
  //   const passwordValue = passwordInput.value;

  //   const validationResult = simpleValidateForm (
  //     loginValue,
  //     emailValue,
  //     passwordValue
  //   );

  const formData = new FormData (event.target);
  formData.delete ('agree');
  const values = convertFormDataToObject (formData);

  const validationResult = validateForm (values, validationRules);

  if (!validationResult.isFormValid) {
    highlightErrorInput (validationResult.errors);
  } else {
    console.log (values);
  }
  console.log ('validation result', validationResult);
};

agreeCheckbox.addEventListener ('change', handleCheckBoxChange);
form.addEventListener ('submit', handleFormSubmit);
formInputs.forEach (input => input.addEventListener ('input', handleInput));
