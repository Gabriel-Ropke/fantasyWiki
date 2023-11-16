import { allAbilities, allPokemon } from "./database/codedb.js";
import { getByIDSearch } from "./database/getidparams.js";

const Ability = getByIDSearch({ database: allAbilities });
console.log(Ability);

// Ability Info

const h1Title = document.querySelector("main h1");
const description = document.querySelector("p#description");
h1Title.innerText = Ability.name;
description.innerText = Ability.description;

// Pokemon
const ulContainer = document.querySelector("ul#pokemonList.wrappedList");
for (let i = 0; i < Ability.pokemon.length; i++) {
  const pokemonId = Ability.pokemon[i];
  let pokemon = allPokemon[pokemonId];
  // create DOM
  let liContainer = document.createElement("li");
  let aContainer = document.createElement("a");
  let imgPokemon = document.createElement("img");
  let spanName = document.createElement("span");
  let divContainerAbilities = document.createElement("div");
  spanName.classList.add("hidden");
  divContainerAbilities.classList.add("abilities");
  aContainer.href = `pokemon.html?id=${pokemonId}`;
  imgPokemon.src = pokemon.images.tableImage;
  spanName.innerText = `#${pokemon.dex} ${pokemon.name}`;
  for (let ii = 0; ii < pokemon.info.abilities.length; ii++) {
    const abilityId = pokemon.info.abilities[ii];
    let spanAbilityName = document.createElement("span");
    spanAbilityName.innerText = allAbilities[abilityId].name;
    divContainerAbilities.appendChild(spanAbilityName);
  }
  aContainer.append(imgPokemon, spanName, divContainerAbilities);
  liContainer.appendChild(aContainer);
  ulContainer.appendChild(liContainer);
}
