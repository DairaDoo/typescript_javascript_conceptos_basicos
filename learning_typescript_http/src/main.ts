interface Pokemon {
    name: string;
    url: string;
}

interface PokemonResponse {
    results: Pokemon[];
}

interface PokemonData {
    sprites: { front_default: string };
}

document.addEventListener("DOMContentLoaded", async () => {
    const request = new Petition("https://pokeapi.co/api/v2/");
    const listElement = document.getElementById("pokemon-list") as HTMLUListElement;

    if (!listElement) {
        console.error("No se encontró el contenedor de Pokémon en el HTML.");
        return;
    }

    try {
        const response: PokemonResponse = await request.get<PokemonResponse>("pokemon?limit=10");

        if (response.results && Array.isArray(response.results)) {
            response.results.forEach(async (pokemon: Pokemon) => {
                // Solución: Usamos fetch directamente con pokemon.url
                const res = await fetch(pokemon.url);
                const pokemonData: PokemonData = await res.json();

                // Creamos un nuevo elemento <li> para cada Pokémon
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <p>${pokemon.name.toUpperCase()}</p>
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                `;
                listElement.appendChild(listItem);
            });
        } else {
            listElement.innerHTML = "<p>No se encontraron Pokémon.</p>";
        }

    } catch (error) {
        console.error("Error fetching Pokémon: ", error);
        listElement.innerHTML = "<p>Error al cargar los Pokémon.</p>";
    }
});
