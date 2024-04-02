document.getElementById('submit-button').addEventListener('click', async function() {
  const type = document.getElementById('type-dropdown').value;
  const apiUrl = `https://pokeapi.co/api/v2/type/${type}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const pokemonList = data.pokemon.slice(0, 10); 
    displayPokemonList(pokemonList);
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
  }
});

function displayPokemonList(pokemonList) {
  const pokemonContainer = document.getElementById('pokemon-container');
  pokemonContainer.innerHTML = ''; 

  pokemonList.forEach(pokemon => {
    const pokemonName = pokemon.pokemon.name;
    const listItem = document.createElement('li');
    listItem.textContent = pokemonName;
    pokemonContainer.appendChild(listItem);
  });
}