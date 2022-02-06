const data = {
  name: 'user',
  age: 25,
  role: 'admin',
};

// const promise = new Promise((resolve) => {
//     console.log("Getting data...");

//     setTimeout(() => {
//         // console.log(data)

//         resolve(data);
//     }, 1000)
// })

// promise.then((result) => {  // в result будет то значение, которое мы передаем в resolve внутри функции
//     console.log(promise);
//     console.log(result);
// })

// const promise = new Promise ((resolve, reject) => {
//   console.log ('Getting data...');

//   setTimeout (() => {
//     // console.log(data)

//     reject ('Oops');
//   }, 1000);
// });

// promise
//   .then (result => {
//     // в result будет то значение, которое мы передаем в resolve внутри функции
//     console.log (promise);
//     console.log (result);
//   })
//   .catch (error => {
//     console.log (error);
//   })
//   .finally (() => {
//     console.log ('Promise Finally');
//   });

//-------------------------------------------------------------------------------------------

// const getUser = () => {
//   return new Promise (resolve => {
//     setTimeout (() => {
//       resolve (data);
//     }, 1500);
//   });
// };

// const processUser = user => {
//   const birthYear = new Date ().getFullYear () - user.age;
//   const processed = {
//     ...user,
//     birthYear,
//   };

//   return new Promise (resolve => {
//     setTimeout (() => {
//       resolve (processed);
//     }, 1500);
//   });
// };

// // getUser()
// //     .then (result => {
// //         processUser (result)
// //             .then (user => console.log (user));
// // });

// getUser ()
//   .then (result => {
//     return processUser (result);
//   })
//   .then (user => {
//     console.log (user);
//   });

//-------------------------------------------------------------------------------------------

const sleep = delay => {
  return new Promise (resolve => {
    setTimeout (() => {
      resolve ();
    }, delay);
  });
};

// sleep(2000).then(() => console.log('AAAAAAA'));

//-------------------------------------------------------------------------------------------

const form = document.getElementById ('login-form');
const preloader = document.getElementById ('preloader');
const inputs = form.querySelectorAll ('input');
const button = form.querySelector ('button');

const handleSubmit = event => {
  event.preventDefault ();
  toggleDisabled (button, ...inputs);
  toggleButtonLoading();

  sleep (3000).then (() => {
    toggleDisabled (button, ...inputs);
    toggleButtonLoading();
  });
};

const toggleDisabled = (...elements) => {
  elements.forEach (elem => {
    if (elem.hasAttribute ('disabled')) {
      elem.removeAttribute ('disabled');
    } else {
      elem.setAttribute ('disabled', '');
    }
  });
};

const toggleButtonLoading = () => {
    preloader.classList.toggle("hidden");
};

form.addEventListener ('submit', handleSubmit);
