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
    try {
        const listElement = document.getElementById("pokemon-list");
        if (!listElement) {
            console.error("No se encontro ningún pokemon.");
            return;
        }
        const response = yield request.get("pokemon?limit=10");
        console.log(response);
        for (const pokemon of response.results) {
            const pokemonData = yield request.get(pokemon.url);
            const listItem = document.createElement("li");
            listItem.innerHTML = `
            <p>${pokemon.name.toUpperCase()}</p>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
        `;
            listElement.appendChild(listItem);
        }
    }
    catch (error) {
        console.error("Error fetching pokemon: ", error);
    }
}));
