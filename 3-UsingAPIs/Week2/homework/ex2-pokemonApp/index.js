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

async function fetchData(urlToFetch) {
  const request = await fetch(urlToFetch);
  try {
    if (request.ok) {
      const jsonResponse = await request.json();
      return jsonResponse;
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error.message);
  }
}

async function fetchAndPopulatePokemons() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  //fetch the data
  const pokemonData = await fetchData(url);

  // array of pokemons
  const pokemons = pokemonData.results;

  //get <select> tag
  const dropdownList = document.querySelector('select');

  dropdownList.style.width = '90px';
  //add <option> tags

  for (const pokemon of pokemons) {
    const pokemonName = pokemon.name;
    const pokemonNameEle = document.createElement('option');
    pokemonNameEle.setAttribute('value', pokemonName);
    pokemonNameEle.textContent = pokemonName;
    dropdownList.appendChild(pokemonNameEle);
  }

  const handleUserClick = (event) => {
    for (const pokemon of pokemons) {
      if (event.target.value === pokemon.name) {
        fetchImage(pokemon.url);
      }
    }
  };

  dropdownList.addEventListener('change', handleUserClick);
}

async function fetchImage(pokemonData) {
  const request = await fetch(pokemonData);
  const divEle = document.querySelector('div');
  divEle.textContent = '';
  try {
    if (request.ok) {
      const imgURL = await request.json();

      const imageElement = document.createElement('img');
      const pokemonImage = imgURL['sprites']['front_default'];
      imageElement.src = pokemonImage;
      divEle.appendChild(imageElement);
      return;
    }
    throw new Error('Something went wrong!');
  } catch (error) {
    console.log(error.message);
  }
}

async function main() {
  //create the button
  const getPokemonBtn = document.createElement('button');
  getPokemonBtn.setAttribute('type', 'submit');
  getPokemonBtn.textContent = 'Get Pokemon';
  getPokemonBtn.addEventListener('click', fetchAndPopulatePokemons);
  //create the dropdown menu
  const dropdownList = document.createElement('select');
  //create the image container
  const divEle = document.createElement('div');

  // add the elements to the DOM

  document.body.prepend(getPokemonBtn, dropdownList, divEle);
}

window.addEventListener('load', main);
