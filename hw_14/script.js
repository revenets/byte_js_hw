const formConfig = [
  {
    element: 'text',
    name: 'login',
    label: 'Логин',
  },
  {
    element: 'text',
    name: 'age',
    label: 'Возраст',
  },
  {
    element: 'select',
    name: 'language',
    label: 'Выберите язык программирования',
    options: [
      {
        text: 'JavaScript',
        value: 'js',
      },
      {
        text: 'Java',
        value: 'java',
      },
      {
        text: 'Python',
        value: 'python',
      },
    ],
  },
];

const container = document.querySelector(".container");
const form = document.createElement("form");


const convertFormDataToObject = (formData) => {
    const formValues = {}

    for (let pair of formData.entries()) {
        formValues[pair[0]] = pair[1];
    }

    return formValues;
};


const createFields = (config) => {
    const wrapper = [];

    for (let field of config) {
        const div = document.createElement("div");
        const label = document.createElement("label");
        label.setAttribute("for", field.name);
        label.innerText = field.label;

        let element;
        if (field.element === "text") {
            element = document.createElement("input");
            element.setAttribute("type", field.element);
            element.id = field.name;
            element.name = field.name;
        } else if (field.element === "select") {
            element = document.createElement("select");
            element.id = field.name;
            element.name = field.name;

            field.options.forEach((item) => {
                const option = document.createElement("option");
                option.value = item.value;
                option.innerText = item.text;

                element.append(option);
            })
        }

        div.append(label, element);
        wrapper.push(div);
    }

    return wrapper;

    // return config.map(field => {
    //     const div = document.createElement("div");
    //     const label = document.createElement("label");
    //     label.setAttribute("for", field.name);
    //     label.innerText = field.label;

    //     let element;

    //     switch (field.element) {
    //         case "text":
    //             element = document.createElement("input");
    //             element.setAttribute("id", field.name);
    //             element.setAttribute("type", "text");
    //             element.setAttribute("name", field.name);

    //             break;
            
    //         case "select": 
    //             element = document.createElement("select");
    //             element.setAttribute("id", field.name);
    //             element.setAttribute("name", field.name);

    //             field.options.forEach((optionElem) => {
    //                 const option = document.createElement("option");
    //                 option.innerText = optionElem.text;
    //                 option.setAttribute("value", optionElem.value);

    //                 element.append(option);
    //             });
            
    //         break;
    //     default:
    //         console.log("Unknown field type", field.element);
    //     }


    //     div.append(label, element);
    //     return div;
    // })

};


const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const preparedData = convertFormDataToObject(formData);

    console.log(preparedData);
}


const fields = createFields(formConfig);
fields.forEach((field) => {
    form.append(field);
});

const submitBtn = document.createElement('button');
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Submit";
form.append(submitBtn);

container.append(form);

form.addEventListener("submit", handleSubmit);
