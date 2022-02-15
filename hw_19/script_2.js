const SWAPI_URL = 'https://swapi.dev/api/people';

const characterForm = document.getElementById ('character_form');
const characterIdInput = document.getElementById ('character_id');
const characterInfoBlock = document.getElementById ('character__info');

const fetchHeros = id => {
  return fetch (`${SWAPI_URL}/${id}`);
};

const renderHeroBlock = ({name, films}) => {
  const characterName = document.createElement ('h2');
  characterName.innerText = name;

  const filmsButton = document.createElement ('button');
  filmsButton.innerText = 'Фильмы';
  filmsButton.style.display = 'block';
  filmsButton.id = 'films_button';

  const filmsBlock = document.createElement ('div');
  filmsBlock.id = 'films_block';

  characterInfoBlock.append (characterName, filmsButton, filmsBlock);
  filmsButton.onclick = () => handleFilmsBtnClick (films);
};

const renderFilmList = ({title: film}) => {
  const filmsBlock = document.getElementById ('films_block');
  const filmTitle = document.createElement ('p');
  filmTitle.innerText = film;
  filmsBlock.append (filmTitle);
};

const renderErrorBlock = () => {
  const errMessage = document.createElement ('h3');
  errMessage.innerText = 'No characters found with given ID';

  characterInfoBlock.append (errMessage);
};

const handleFilmsBtnClick = async films => {
  const filmsBlock = document.getElementById ('films_block');
  filmsBlock.innerHTML = '';
  const requests = films.map (url => fetch (url));
  const responses = await Promise.all (requests);
  const jsonResponses = responses.map (response => response.json ());
  const result = await Promise.all (jsonResponses);

  result.forEach (film => renderFilmList (film));
};

const getHero = async id => {
  const response = await fetchHeros (id);
  const result = await response.json ();
  renderHeroBlock (result);
};

const handleIdFormSubmit = event => {
  event.preventDefault ();
  characterInfoBlock.innerHTML = '';
  const inputValue = characterIdInput.value;
  if (inputValue > 0 && inputValue <= 82) {
    getHero (inputValue);
  } else {
    renderErrorBlock ();
  }
};

characterForm.addEventListener ('submit', handleIdFormSubmit);
