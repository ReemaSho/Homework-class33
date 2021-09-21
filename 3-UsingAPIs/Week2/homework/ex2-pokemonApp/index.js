'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

const fetchData = async (urlToFetch) => {
  const request = await fetch(urlToFetch);
  try {
    if (request.ok) {
      const jsonResponse = await request.json();
      return jsonResponse;
    }
    throw new Error(request.status);
  } catch (error) {
    console.log(error.message);
  }
};

const displayPokemonsNames = (pokemonsData) => {
  //get <select> tag
  const dropdownList = document.querySelector('select');
  dropdownList.classList.add('expand-BTN');
  //add <option> tags
  for (const pokemon of pokemonsData) {
    const pokemonName = pokemon.name;
    const pokemonNameEle = document.createElement('option');
    pokemonNameEle.setAttribute('value', pokemonName);
    pokemonNameEle.textContent = pokemonName;
    dropdownList.appendChild(pokemonNameEle);
  }
  const handleUserClick = (event) => {
    for (const pokemon of pokemonsData) {
      if (event.target.value === pokemon.name) {
        fetchImage(pokemon.url);
      }
    }
  };
  dropdownList.addEventListener('change', handleUserClick);
};

const fetchAndPopulatePokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  try {
    const request = await fetchData(url);
    if (request) {
      // object of pokemons
      const pokemons = request.results;
      displayPokemonsNames(pokemons);
    } else throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }
};

const fetchImage = async (pokemonData) => {
  try {
    const request = await fetch(pokemonData);
    const imageContainer = document.querySelector('div');
    imageContainer.textContent = '';
    if (request.ok) {
      const imgURL = await request.json();
      console.log(imgURL);
      const imageElement = document.createElement('img');
      const pokemonImage = imgURL.sprites.front_default;

      imageElement.src = pokemonImage;
      imageContainer.appendChild(imageElement);
      return;
    }
    throw new Error(`Request Failed! ${request.status}`);
  } catch (error) {
    console.log(error.message);
  }
};

const main = () => {
  //create the button
  const getPokemonBtn = document.createElement('button');
  getPokemonBtn.setAttribute('type', 'submit');
  getPokemonBtn.textContent = 'Get Pokemon';
  getPokemonBtn.addEventListener('click', fetchAndPopulatePokemons);
  //create the dropdown menu
  const dropdownList = document.createElement('select');
  //create the image container
  const imageContainer = document.createElement('div');

  // add the elements to the DOM
  document.body.prepend(getPokemonBtn, dropdownList, imageContainer);
};

window.addEventListener('load', main);
