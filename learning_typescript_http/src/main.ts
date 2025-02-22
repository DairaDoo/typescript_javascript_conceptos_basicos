// declaramos interfaces
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  // el resultado es una lista de pokemones
  results: Pokemon[];
}

interface PokemonData {
  // esta es la imagen
  sprites: { front_default: string };
}

// instanciamos la clase Petition de request.ts
document.addEventListener("DOMContentLoaded", async () => {

  const request = new Petition("https://pokeapi.co/api/v2/");

  try {

  // obtenemos la imagen de cada pokemon con el get
  const listElement = document.getElementById(
    "pokemon-list"
  ) as HTMLUListElement;

  if (!listElement) {
    console.error("No se encontro ningún pokemon.");
    return;
  }
  // intentamos obtener la lista de pokemones con el get
    const response: PokemonResponse = await request.get<PokemonResponse>(
      "/pokemon?limit=10");

    // obtenemos las imagenes
    for (const pokemon of response.results) {
        const pokemonData: PokemonData = await request.get<PokemonData>(pokemon.url);

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <p>${pokemon.name.toUpperCase()}</p>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
        `;
        listElement.appendChild(listItem); // añadimos el <p> y <img> al <li> que a su vez se añade al <ul>
    }

  } catch (error) {
    console.error("Error fetching pokemon: ", error);
  }
});
