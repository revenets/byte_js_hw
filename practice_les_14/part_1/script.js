const form = document.getElementById ('login-form');
const passwordInput = document.getElementById ('password');
const loginInput = document.getElementById ('login');

// const handleSubmit = (e) => {
//     e.preventDefault();

//     // считываем данные с формы
//     const formValues = {
//         login: loginInput.value,
//         password: passwordInput.value,
//     }

//     console.log(formValues);
// }

// form.addEventListener("submit", handleSubmit);

// work with inputs

const exampleInput = document.getElementById ('example');
const exampleContainer = document.getElementById ('exmp-container');
const textElem = document.createElement ('p');

exampleContainer.append (textElem);

const handleChange = event => {
  // console.log("CHANGE event", event);
  // console.log("target value", event.target.value);

  textElem.innerText = event.target.value;
};

const handleInput = event => {
  // console.log("INPUT event", event);
  // console.log("target value", event.target.value);

  textElem.innerText = event.data;
};

exampleInput.addEventListener ('change', handleChange);
exampleInput.addEventListener ('input', handleInput);

// select

const select = document.getElementById ('example-select');

const handleSelectChange = event => {
  const options = event.target.options;

  const selectedOption = options[options.selectedIndex];
  // console.log(selectedOption)
};

select.addEventListener ('change', handleSelectChange);

// checkBox

const checkBox = document.getElementById ('example-checkbox');

const handleCheckBoxChange = e => {
  // console.log("e.target.value = ", e.target.value);
  // console.log("e.target.checked = ", e.target.checked);
};

checkBox.addEventListener ('change', handleCheckBoxChange);

// radio buttons - getting by name

const genderRadioGroup = document.getElementsByName ('gender');

const getRadioValue = radioGroup => {
  const checkedRadio = [...radioGroup].find (radio => radio.checked);
  if (!checkedRadio) {
    return null;
  } else {
    return checkedRadio.value;
  }
};

// genderRadioGroup.forEach((radio) => {
//     console.dir(radio);
// })

const res = getRadioValue (genderRadioGroup);

// console.log(res)

const handleRadioBtnChange = event => {
  console.dir (event.target);
};

genderRadioGroup.forEach (radio => {
  radio.addEventListener ('change', handleRadioBtnChange);
});

// Exchange

const amountInput = document.getElementById ('amount');
const currencySelect = document.getElementById ('currency-select');
const resultElement = document.getElementById ('result');

const rates = {
  USD: 27.3,
  EUR: 31.7,
};

const getExchangeResult = (amount, currency) => {
    return (Number(amount) / rates[currency]).toFixed(2);
};

const updateResult = (exchange) => {
    resultElement.innerText = exchange;
};

const handleCurrencySelectChange = (event) => {
    const selectedCurrency = event.target.value;
    const amount = amountInput.value;

    const result = getExchangeResult(amount, selectedCurrency);
    updateResult(result);
};

const handleAmountInputChange = (event) => {
    const currentAmount = event.target.value;
    const currency = currencySelect.value;

    const result = getExchangeResult(currentAmount, currency);
    updateResult(result);
};

amountInput.addEventListener ('input', handleAmountInputChange);
currencySelect.addEventListener ('input', handleCurrencySelectChange);


// Form data - object, gets all data from the form (useful for big dynamic forms that gets input data from server)



const exampleForm = document.getElementById("form-data-example");

const convertFormDataToObject = (formData) => {
    const formValues = {}

    for (let pair of formData.entries()) {
        formValues[pair[0]] = pair[1];
    }

    return formValues;
}

const handleFormDataSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const preparedData = convertFormDataToObject(formData);

    console.log(preparedData);
        
}

exampleForm.addEventListener("submit", handleFormDataSubmit);