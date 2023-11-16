import { allPokemon, allWeakness } from "../database/codedb.js";

export function createWrappedListPokemon({ array }) {
  const ulContainer = document.querySelector("ul#pokemonList.wrappedList");
  for (let i = 0; i < array.length; i++) {
    const pokemonId = array[i];
    const Pokemon = allPokemon[pokemonId];
    // create DOM
    let liContainer = document.createElement("li");
    let aContainer = document.createElement("a");
    let imgPokemon = document.createElement("img");
    let spanName = document.createElement("span");
    let divContainerTypes = document.createElement("div");
    spanName.classList.add("hidden");
    aContainer.href = `pokemon.html?id=${pokemonId}`;
    imgPokemon.src = Pokemon.images.tableImage;
    spanName.innerText = `#${Pokemon.dex} ${Pokemon.name}`;
    for (let ii = 0; ii < Pokemon.info.types.length; ii++) {
      const abilityId = Pokemon.info.types[ii];
      const typeName = allWeakness[abilityId].name;
      let spanTypeName = document.createElement("span");
      spanTypeName.innerText = typeName;
      spanTypeName.style.background = `rgba(var(--${typeName}))`;
      divContainerTypes.appendChild(spanTypeName);
    }
    aContainer.append(imgPokemon, spanName, divContainerTypes);
    liContainer.appendChild(aContainer);
    ulContainer.appendChild(liContainer);
  }
}
