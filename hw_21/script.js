const resultsContainer = document.querySelector ('.results');
const preloader = document.getElementById ('preloader');
const swapiType = document.getElementById ('swapi-type');
const swapiID = document.getElementById ('unit-id');
const BASE_URL = 'https://swapi.dev/api/';

const toggleLoading = () => {
  preloader.classList.toggle ('hidden');
};

class Card {
  constructor (options) {
    this.options = options;
    this.card = document.createElement ('div');
  }

  render () {
    const closeBtn = document.createElement ('p');
    const content = document.createElement ('div');

    this.card.classList.add ('card');
    closeBtn.classList.add ('close_btn');
    content.classList.add ('card_content');

    closeBtn.innerText = 'x';

    closeBtn.addEventListener ('click', () => {
      this.hide ();
    });

    this.card.append (closeBtn, content);
  }

  show () {
    resultsContainer.append (this.card);
  }

  hide () {
    this.card.remove ();
    localStorage.removeItem(this.card.id);
  }
}

class API {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getUnitJSON(url) {
    toggleLoading ();
    try {
    const response = await fetch(`${this.baseUrl}/${url}`);
    if (response.status === 404) {
      throw new Error (`No such unit`);
    }
    const result = await response.json ();
    return result;
    } catch (err) {
      alert (err);
    } finally { 
      toggleLoading ();
    }
  }
}


class StarshipCard extends Card {
  constructor (options) {
    const {name, model, manufacturer, max_atmosphering_speed: speed, url} = options;

    super (options);
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.speed = speed;
    this.type = url.slice(BASE_URL.length, -3);
    this.id = url.slice(-2, -1);
    this.render ();
  }

  render () {
    super.render ();
    this.card.id = `${this.type}/${this.id}`;
    const content = this.card.querySelector ('.card_content');

    const starshipName = document.createElement ('h3');
    const starshipModel = document.createElement ('p');
    const starshipManufacturer = document.createElement ('p');
    const starshipSpeed = document.createElement ('p');

    starshipModel.style.fontWeight = 'bold';

    starshipName.innerText = this.name;
    starshipModel.innerText = this.model;
    starshipManufacturer.innerText = this.manufacturer;
    starshipSpeed.innerText = this.speed;

    content.append (
      starshipName,
      starshipModel,
      starshipManufacturer,
      starshipSpeed
    );
  }
}

class PlanetCard extends Card {
  constructor (options) {
    const {name, climate, terrain, population, url, ...rest} = options;
    super (rest);
    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
    this.type = url.slice(BASE_URL.length, -3);
    this.id = url.slice(-2, -1);
    this.render ();
  }

  render () {
    super.render ();
    this.card.id = `${this.type}/${this.id}`;
    const content = this.card.querySelector ('.card_content');

    const planetName = document.createElement ('h3');
    const planetClimate = document.createElement ('p');
    const planetTerrain = document.createElement ('p');
    const planetPopulation = document.createElement ('p');

    planetName.innerText = this.name;
    planetClimate.innerText = this.climate;
    planetTerrain.innerText = this.terrain;
    planetPopulation.innerText = this.population;

    content.append (planetName, planetClimate, planetTerrain, planetPopulation);
  }
}

class VehicleCard extends Card {
  constructor (options) {
    const {name, cost_in_credits: cost, crew, passengers, url, ...rest} = options;
    super (rest);
    this.name = name;
    this.cost = cost;
    this.crew = crew;
    this.passengers = passengers;
    this.type = url.slice(BASE_URL.length, -3);
    this.id = url.slice(-2, -1);
    this.render ();
  }

  render () {
    super.render ();
    this.card.id = `${this.type}/${this.id}`;
    const content = this.card.querySelector ('.card_content');

    const vehicleName = document.createElement ('h3');
    const vehicleCost = document.createElement ('p');
    const vehicleCrew = document.createElement ('p');
    const vehiclePassengers = document.createElement ('p');

    vehicleName.innerText = this.name;
    vehicleCost.innerText = `Price: ${this.cost}`;
    vehicleCrew.innerText = `Crew: ${this.crew}`;
    vehiclePassengers.innerText = `Passengers: ${this.passengers}`;

    content.append (vehicleName, vehicleCost, vehicleCrew, vehiclePassengers);
  }
}

const getAllCardsFromStorage = () => {
  let values = {};
  let keys = Object.keys (localStorage);

  for (let key of keys) {
    values[key] = JSON.parse (localStorage[key]);
  }

  return values;
};

const renderPermanent = (obj) => {
  const unitType = obj.url.slice(BASE_URL.length, -3);
  console.log (unitType);
    if (unitType === 'starships') {
      const ship = new StarshipCard (obj);
      ship.show ();
    } else if (unitType === 'planets') {
      const planet = new PlanetCard (obj);
      planet.show ();
    } else if (unitType === 'vehicles') {
      const vehicle = new VehicleCard (obj);
      vehicle.show ();
    }
}

const renderOnReload = obj => {
  let keys = Object.keys (obj);
  console.log (keys)

  keys.forEach (key => {
    const elem = JSON.parse (localStorage.getItem (key));
    renderPermanent(elem);
  });
};

const swapiApi = new API(BASE_URL);
const swapiForm = document.getElementById ('swapi-form');

swapiForm.addEventListener ('submit', e => {
  e.preventDefault ();
  const unitType = swapiType.value;
  const unitID = swapiID.value;
  const searchUnit = `${unitType}/${unitID}`;

  const apiFetch = swapiApi.getUnitJSON(searchUnit);
  apiFetch.then (result => {
    if (result) {
      localStorage.setItem (searchUnit, JSON.stringify(result));
      renderPermanent(result);
    }
  });
});

const allCards = getAllCardsFromStorage ();
renderOnReload (allCards);