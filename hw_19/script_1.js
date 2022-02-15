const COUNTRY_URL = 'https://ipapi.co/json/';
const FLAG_URL = 'https://restcountries.com/v2/name/';

const container = document.getElementById ('task__1');

const fetchCountry = () => {
  return fetch (`${COUNTRY_URL}`);
};

const fetchFlag = ({country_name: country}) => {
  return fetch (`${FLAG_URL}${country}`);
};

const createCountryBlock = (
  {country_name, country_capital, currency},
  flagPNG
) => {
  const countryName = document.createElement ('h3');
  countryName.innerText = country_name;

  const countryCapital = document.createElement ('h3');
  countryCapital.innerText = country_capital;

  const countryCurrency = document.createElement ('p');
  countryCurrency.innerText = currency;

  const flagWrapper = document.createElement ('div');
  const flagImg = document.createElement ('img');
  flagWrapper.append (flagImg);

  flagImg.src = flagPNG;
  flagImg.style.width = '100%';

  container.append (countryName, countryCapital, countryCurrency, flagWrapper);
};

const getCountry = async () => {
  try {
    const responseCountry = await fetchCountry ();
    const resultCountry = await responseCountry.json ();
    const responseFlag = await fetchFlag (resultCountry);
    const [{flags: {png: resultFlag}}] = await responseFlag.json ();
    createCountryBlock (resultCountry, resultFlag);
  } catch (error) {
    console.error (error);
  }
};

getCountry ();
