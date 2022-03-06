const resultsContainer = document.querySelector ('.results');
const preloader = document.getElementById ('preloader');
const swapiType = document.getElementById ('swapi-type');
const swapiID = document.getElementById ('unit-id');

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

  setId (id) {
    this.card.id = id;
  }

  onCloseClick () {
    this.card.querySelector('.close_btn').addEventListener('click', () => {
      localStorage.removeItem (this.card.id);
    })
  }

  show () {
    resultsContainer.append (this.card);
  }

  hide () {
    this.card.remove ();
  }
}

class API {
  constructor (options) {
    const {type, id} = options;
    this.type = type;
    this.id = id;
  }

  async fetchID () {
    toggleLoading ();
    try {
      const response = await fetch (
        `https://swapi.dev/api/${this.type}/${this.id}`
      );
      if (response.status === 404) {
        throw new Error (`No ${this.type} with such ID :(`);
      }
      const result = await response.json ();
      return result;
    } catch (err) {
      alert (err);
      console.clear ();
    } finally {
      toggleLoading ();
    }
  }
}

class StarshipCard extends Card {
  constructor (options) {
    const {name, model, manufacturer, max_atmosphering_speed: speed} = options;

    super (options);
    this.name = name;
    this.model = model;
    this.manufacturer = manufacturer;
    this.speed = speed;
    this.render ();
  }

  render () {
    super.render ();
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
    const {name, climate, terrain, population, ...rest} = options;
    super (rest);
    this.name = name;
    this.climate = climate;
    this.terrain = terrain;
    this.population = population;
    this.render ();
  }

  render () {
    super.render ();
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
    const {name, cost_in_credits: cost, crew, passengers, ...rest} = options;
    super (rest);
    this.name = name;
    this.cost = cost;
    this.crew = crew;
    this.passengers = passengers;
    this.render ();
  }

  render () {
    super.render ();
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

const renderPermanent = (key, value) => {
  keySearch = key.split ('-')[0];
    if (keySearch === 'starships') {
      const ship = new StarshipCard (value);
      ship.setId (key);
      ship.onCloseClick();
      ship.show ();
    } else if (keySearch === 'planets') {
      const planet = new PlanetCard (value);
      planet.setId (key);
      planet.onCloseClick();
      planet.show ();
    } else if (keySearch === 'vehicles') {
      const vehicle = new VehicleCard (value);
      vehicle.setId (key);
      vehicle.onCloseClick();
      vehicle.show ();
    }
}

const renderOnReload = obj => {
  let keys = Object.keys (obj);

  keys.forEach (key => {
    const elem = JSON.parse (localStorage.getItem (key));
    renderPermanent(key, elem);
  });
};

const swapiForm = document.getElementById ('swapi-form');

swapiForm.addEventListener ('submit', e => {
  e.preventDefault ();
  const unitType = swapiType.value;
  const unitID = swapiID.value;

  swapiForm.reset ();

  const newApi = new API ({
    type: unitType,
    id: unitID,
  });

  const unitIdentify = `${newApi.type}-${newApi.id}`;

  const apiFetch = newApi.fetchID ();
  apiFetch.then (result => {
    if (result) {
      localStorage.setItem (unitIdentify, JSON.stringify (result));
      renderPermanent(unitIdentify, result);
    }
  });

});

const allCards = getAllCardsFromStorage ();
renderOnReload (allCards);