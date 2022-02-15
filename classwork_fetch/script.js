// const SWAPI_URL = 'https://swapi.dev/api';
// const REQRES_URL = 'https://reqres.in/api';

// const options = {
//   method: 'POST',
//   body: JSON.stringify ({
//     name: 'morpheus',
//     job: 'leader',
//   }),
// };

// fetch (`${REQRES_URL}/users`, options);

// const filmsREquest = fetch (`${SWAPI_URL}/films`);
// console.log (filmsREquest);

// filmsREquest
//   .then (response => {
//     console.log (response);
//     if (response.ok) {
//       const result = response.json ();
//       return result;
//     }
//     return {};
//   })
//   .then (result => {
//     const {results: films} = result;
//     console.log (films);
//   })
//   .catch (error => {
//     console.log (error);
//   });

// const container = document.getElementById ('container');
// const preloader = document.getElementById ('preloader');

// const fetchMovies = () => {
//   return fetch (`${SWAPI_URL}/films`);
// };

// const createMovieCard = ({title, producer, release_date}) => {
//   const cardContainer = document.createElement ('div');
//   const titleElement = document.createElement ('h4');
//   const producerElement = document.createElement ('p');
//   const dataElement = document.createElement ('p');

//   cardContainer.classList.add ('movie-card');
//   titleElement.innerText = title;
//   producerElement.innerText = producer;
//   dataElement.innerText = release_date;

//   cardContainer.append (titleElement, producerElement, dataElement);
//   return cardContainer;
// };

// const renderMovies = ({results: films}) => {
//   const movieCards = films.map (movie => createMovieCard (movie));
//   console.log (movieCards);
//   container.append (...movieCards);
// };

// const showPreloader = show => {
//   if (show) {
//     preloader.style.display = 'block';
//   } else {
//     preloader.style.display = 'none';
//   }
// };

// showPreloader (true);
// fetchMovies ()
//   .then (response => {
//     if (response.ok) {
//       return response.json ();
//     }
//   })
//   .then (results => {
//     showPreloader (false);
//     renderMovies (results);
//   })
//   .catch (error => {
//     console.error (error);
//   });

//------------------------------------------------------------------------------

// async await

// объявление асинхронной функции
// async function func () {}

// объявление стрелочной асинхронной функции
// const arrowFunc = async () => {

// }

// const sayHello = async () => {
//     console.log("Hello!")
// };

// console.log("Hello from outter");
// sayHello();

// const getNumber = async () => {
//     return 1;
// }

// const number = getNumber();
// console.log(number);

// getNumber().then(result => {console.log(result);})

// const sleep = (delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// };

// console.log ("Getting data...");
// sleep(1000).then(() => {
//     console.log ("Data resolved");
// });

// const getData = async () => {
//     console.log ("Getting data...");
//     await sleep(1000);
//     console.log ("Data resolved");
// };

// getData()

//------------------------------------------------------------------------------

// Example async and await

// const url = "https://jsonplaceholder.typicode.com/posts/1";

// const getPost = async () => {
//     const response = await fetch(url);
//     const result = await response.json();

//     console.log (result)
// }

// getPost();

// const container = document.getElementById ('container');
// const preloader = document.getElementById ('preloader');

// const fetchMovies = () => {
//   return fetch (`${SWAPI_URL}/films`);
// };

// const createMovieCard = ({title, producer, release_date}) => {
//   const cardContainer = document.createElement ('div');
//   const titleElement = document.createElement ('h4');
//   const producerElement = document.createElement ('p');
//   const dataElement = document.createElement ('p');

//   cardContainer.classList.add ('movie-card');
//   titleElement.innerText = title;
//   producerElement.innerText = producer;
//   dataElement.innerText = release_date;

//   cardContainer.append (titleElement, producerElement, dataElement);
//   return cardContainer;
// };

// const renderMovies = ({results: films}) => {
//   const movieCards = films.map (movie => createMovieCard (movie));
//   console.log (movieCards);
//   container.append (...movieCards);
// };

// const showPreloader = show => {
//   if (show) {
//     preloader.style.display = 'block';
//   } else {
//     preloader.style.display = 'none';
//   }
// };

// showPreloader (true);
// fetchMovies ()
//   .then (response => {
//     if (response.ok) {
//       return response.json ();
//     }
//   })
//   .then (results => {
//     showPreloader (false);
//     renderMovies (results);
//   })
//   .catch (error => {
//     console.error (error);
//   });

// const getMovies = async () => {
//   showPreloader (true);
//   const response = await fetchMovies();
//   const result = await response.json();
//   showPreloader (false);
//   renderMovies(result);
// };

// getMovies ();

// Promise.all

// const promises = [
//     new Promise (resolve => setTimeout (() => resolve(1), 1500)), // 1
//     new Promise (resolve => setTimeout (() => resolve(2), 2000)), // 2
//     new Promise (resolve => setTimeout (() => resolve(3), 1000)), // 3

// ];

// const result = Promise.all(promises);
// console.log (result);

// Promise.all (promises).then (res => {
//     console.log (res);
// });

// const getPromiseAll = async () => {
//     const result = await Promise.all (promises);
//     console.log (result);
// }

// getPromiseAll()

// const urls = [
//     "https://swapi.dev/api/films/2/",
//     "https://swapi.dev/api/films/6/",
//     "https://swapi.dev/api/films/3/",
//     "https://swapi.dev/api/films/1/",
//     // "https://swapi.dev/api/films/7/",
// ];

// const getAllFilms = async () => {
//     const requests = urls.map(url => fetch(url));
//     const responses = await Promise.all(requests);
//     const jsonResponses = responses.map(response => response.json());
//     const result = await Promise.all(jsonResponses);

//     renderMovies({results: result});
//     console.log (result);
// }

// getAllFilms();

//------------------------------------------------------------------------------

// ERRORS in JS

//  -- SyntaxError - вовсе не дают выполниться коду
//  -- TypeError - до ошибки код выполниться, после нет

// Try Catch

try {
  // code...
} catch (err) {
  // error processing
} finally {
  // this code will work in any case
}

// throw - проброс собственных ошибок

// throw "Error 2"
// throw 42

// throw new Error("Global very bad error!");

// try {
//     throw new Error("Global very bad error!");
// } catch (error) {
//     console.log(error.message);
// }

// const formatCardNumber = (cardNumber) => {
//     if (cardNumber.length !== 16) {
//         throw new Error("Invalid card. Card number must be 16 characters long.");
//     } else {
//         return "formatted";
//     }
// }

// const card = formatCardNumber("4111111111111111");
// console.log(card);

// const initialCard = "41111111111111111";
// let formatted;
// try {
//     formatted = formatCardNumber(initialCard);
// } catch (err) {
//     formatted = initialCard;
//     console.log(err);
// }

// console.log(formatted);

//------------------------------------------------------------------------------

// Обработка ошибок в запросах

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPost = async id => {
  return fetch (`${BASE_URL}/posts/${id}`);
};

// getPost (142)
//   .then (resp => {
//     if (!resp.ok) {
//       throw new Error (resp.status);
//     }

//     return resp.json ();
//   })
//   .then (post => {
//     console.log (post);
//   })
//   .catch (err => {
//     console.log (err);
//   });

const handleRequestErrors = response => {
  if (!response.ok) {
    throw new Error (response.status);
  }

  return response;
};

// getPost (1000)
//   .then (handleRequestErrors)
//   .then (response => response.json ())
//   .then (post => console.log (post))
//   .catch (error => {
//       const status = Number(error.message);
//       if (status === 404) {
//           alert("Post not found!");
//       }
//   });

const getUser = async id => {
  try {
    const response = handleRequestErrors (
      await fetch (`${BASE_URL}/users/${id}`)
    );
    const user = await response.json ();
    console.log (user);
  } catch (error) {
    const status = Number (error.message);
    if (status === 404) {
      alert ('User not found!');
    }
  }
};

getUser(5)