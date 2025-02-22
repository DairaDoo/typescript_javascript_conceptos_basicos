"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const request = new Petition("https://pokeapi.co/api/v2/");
    const listElement = document.getElementById("pokemon-list");
    if (!listElement) {
        console.error("No se encontró el contenedor de Pokémon en el HTML.");
        return;
    }
    try {
        const response = yield request.get("pokemon?limit=10");
        if (response.results && Array.isArray(response.results)) {
            response.results.forEach((pokemon) => __awaiter(void 0, void 0, void 0, function* () {
                const res = yield fetch(pokemon.url);
                const pokemonData = yield res.json();
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <p>${pokemon.name.toUpperCase()}</p>
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                `;
                listElement.appendChild(listItem);
            }));
        }
        else {
            listElement.innerHTML = "<p>No se encontraron Pokémon.</p>";
        }
    }
    catch (error) {
        console.error("Error fetching Pokémon: ", error);
        listElement.innerHTML = "<p>Error al cargar los Pokémon.</p>";
    }
}));
