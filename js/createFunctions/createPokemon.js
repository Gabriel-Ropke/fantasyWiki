import { allWeakness } from "../database/codedb.js";
import { getDatabase, ref, set } from "../database/firebase.js";
import { getObjectLength } from "./internalFunctions.js";
// Load the Page DOM
// form
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
const createButton = document.querySelector("button#createButton");
createButton.onclick = function () {
  if (selectedTypesContainer.children) {
    createPokemonFunction({ index: 1 });
  }
};

// Type List
const typeListContainer = document.querySelector("ul#typeList");
const selectedTypesContainer = document.querySelector("div#selectedTypes");
console.log("batata");
for (let i = 0; i < getObjectLength(allWeakness); i++) {
  const objectId = Object.keys(allWeakness)[i];
  const Type = allWeakness[objectId];
  let liType = document.createElement("li");
  liType.dataset.value = objectId;
  liType.innerText = Type.name;
  liType.style.background = `rgba(var(--${Type.name}))`;
  // li Event Click
  liType.onclick = function () {
    addType({ name: Type.name, value: objectId });
  };
  typeListContainer.appendChild(liType);
}
function addType({ name, value }) {
  if (selectedTypesContainer.childElementCount < 2) {
    let spanType = document.createElement("span");
    spanType.style.background = `rgba(var(--${name}))`;
    spanType.innerText = name;
    spanType.dataset.value = value;
    selectedTypesContainer.appendChild(spanType);
    selectedTypesContainer.classList.add("active");
  }
}
// Abilities
const fetchAbility = async function ({ index }) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/ability/${index}`);
  const abilityData = await APIResponse.json();
  return abilityData;
};
const abilityListContainer = document.querySelector("ul#abilityList");
for (let i = 1; i < 192; i++) {
  const Ability = await fetchAbility({ index: i });
  let liAbilityName = document.createElement("li");
  liAbilityName.innerText = Ability.name.replace(/-/g, " ");
  liAbilityName.dataset.value = Ability.id;
  liAbilityName.onclick = () => {
    console.log(liAbilityName.dataset.value);
  };
  abilityListContainer.appendChild(liAbilityName);
}
const abilityInput = document.querySelector("input#ability");
abilityInput.onclick = () => {
  abilityListContainer.classList.add("active");
};
abilityInput.oninput = () => {
  console.log(abilityInput.value);
  queryAllAbilities();
};
function queryAllAbilities() {
  let allAbilitiesInList = document.querySelectorAll("ul#abilityList li");
  for (let i = 0; i < allAbilitiesInList.length; i++) {
    if (allAbilitiesInList[i].innerText.includes(abilityInput.value)) {
      allAbilitiesInList[i].classList.remove("hidden");
    } else {
      allAbilitiesInList[i].classList.add("hidden");
    }
  }
}
abilityInput.addEventListener("blur", () => {
  abilityListContainer.classList.remove("active");
});
// Submit Button
// Create Pokémon Functions
const fetchPokemon = async function ({ index }) {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
  const pokemonData = await APIResponse.json();
  return pokemonData;
};
const transformToDex = function ({ number }) {
  let numeroString = number.toString();
  while (numeroString.length < 3) {
    numeroString = "0" + numeroString;
  }
  return numeroString;
};
async function createPokemonFunction({ index }) {
  const db = getDatabase();
  // Fetch Pokémon from PokéAPI
  const Pokemon = await fetchPokemon({ index: index });
  const refdb = ref(db, "pokemon/" + Pokemon.id);
  console.log(Pokemon);
  console.log(Pokemon.sprites);
  console.log(Pokemon.sprites.versions);
  console.log(
    Pokemon.sprites.versions["generation-v"]["black-white"].front_shiny
  );
  // Pokémon Status
  const Pokemon_hp = Pokemon.stats[0].base_stat;
  const Pokemon_atk = Pokemon.stats[1].base_stat;
  const Pokemon_def = Pokemon.stats[2].base_stat;
  const Pokemon_spatk = Pokemon.stats[3].base_stat;
  const Pokemon_spdef = Pokemon.stats[4].base_stat;
  const Pokemon_speed = Pokemon.stats[5].base_stat;
  const Pokemon_total =
    Pokemon_hp +
    Pokemon_atk +
    Pokemon_def +
    Pokemon_spatk +
    Pokemon_spdef +
    Pokemon_speed;
  // Pokemon Types
  const types = [];
  for (let i = 0; i < selectedTypesContainer.children.length; i++) {
    let type = selectedTypesContainer.children[i].dataset.value;
    types.push(type);
  }
  // Pokemon Abilities
  // Inputs (Info)
  /* Gender */
  /* Drops */
  /* Moves */
  /* Locations */
  /* Dungeons */
  // Create at Database
  set(refdb, {
    id: Pokemon.id,
    name: Pokemon.name,
    dex: transformToDex({ number: Pokemon.id }),
    /*
      images: {
        tableimage: Pokemon.sprites.versions["generation-vii"].front_default,
        normalimage:
          Pokemon.sprites.versions["generation-v"]["black-white"].front_default,
        shinyimage:
          Pokemon.sprites.versions["generation-v"]["black-white"].front_shiny,
      },
      */
    info: {
      height: `${Pokemon.height / 10}m`,
      weight: `${Pokemon.weight / 10}kg`,
      species: Pokemon.species,
      types: types,
      abilities: [],
      gender: [],
      evYield: [],
      eggGroups: [],
    },
    status: {
      hp: Pokemon_hp,
      atk: Pokemon_atk,
      def: Pokemon_def,
      spatk: Pokemon_spatk,
      spdef: Pokemon_spdef,
      speed: Pokemon_speed,
      total: Pokemon_total,
    },
  });
}
/*
async function createAbilityFunction({ index }) {
  const db = getDatabase();
  // Fetch Pokémon from PokéAPI
  const Ability = await fetchAbility({ index: index });
  const refdb = ref(db, "ability/" + Ability.id);
  if (Ability.effect_entries[1]) {
    set(refdb, {
      id: Ability.id,
      name: Ability.name.replace(/-/g, " "),
      description: Ability.effect_entries[1].effect,
      effect: Ability.effect_entries[1].short_effect,
      pokemon: [""],
    });
  }
}
*/
