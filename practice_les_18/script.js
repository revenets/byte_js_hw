// Practice
// promise requests

const BASE_URL = 'https://jsonplaceholder.typicode.com/';


const get = url => {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest ();
    xhr.open ('GET', url);
    xhr.responseType = 'json';

    xhr.send ();

    xhr.onload = () => {
      const {status, response} = xhr;
      if (status === 200) {
        resolve (response);
      } else {
        reject ({
          status,
        });
      }
    };

    xhr.onerror = () => {
      reject ({});
    };
  });
};

const getUser = id => {
  return get (`https://jsonplaceholder.typicode.com/users/${id}`);
};

const post = (url, body) => {
  return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest ();
    xhr.open ('POST', url);
    xhr.responseType = 'json';

    xhr.send (JSON.stringify (body));

    xhr.onload = () => {
      const {status, response} = xhr;
      if (status === 200) {
        resolve (response);
      } else {
        reject ({
          status,
        });
      }
    };

    xhr.onerror = () => {
      reject ({});
    };
  });
};

const form = document.getElementById ('findUserForm');
const userIdInput = document.getElementById ('userId');
const userContainer = document.getElementById ('userContainer');

const renderUser = ({name, email, phone}) => {
    const nameParagraph = document.createElement ('p');
    const emailParagraph = document.createElement ('p');
    const phoneParagraph = document.createElement ('p');

    nameParagraph.innerText = name;
    emailParagraph.innerText = email;
    phoneParagraph.innerText = phone;

    userContainer.innerHTML = "";
    userContainer.append(nameParagraph, emailParagraph, phoneParagraph);
    
};

const handleFindUser = event => {
  event.preventDefault ();

  const userId = userIdInput.value;

  getUser (userId).then ((user) => renderUser (user)).catch (error => {
    if (error.status) {
      if (error.status === 404) {
        alert ('User not found');
      }
    }
  });
};

form.addEventListener ('submit', handleFindUser);
