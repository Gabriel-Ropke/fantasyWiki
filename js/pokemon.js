import { createInfoTable } from "./createFunctions/createTable.js";
import { getObjectLength } from "./createFunctions/internalFunctions.js";
import {
  allDungeons,
  allItems,
  allLocations,
  allMoves,
  allPokemon,
  allWeakness,
  allAbilities,
  allEvoline,
} from "./database/codedb.js";
import { getByIDSearch } from "./database/getidparams.js";
import { backToTop } from "./selectedScript.js";
/* Pokemon search Query */
const pokemon = getByIDSearch({ database: allPokemon });

// Back To Top Button
backToTop({ imgSource: pokemon.images.normalImage, name: pokemon.name });
/* navbar */
const navbar = document.querySelector("nav#navBar");
const navName = document.querySelector("nav#navBar span#navName");
navName.innerText = pokemon.name;
const previewPokemon = allPokemon[pokemon.id - 1];
const nextPokemon = allPokemon[pokemon.id + 1];
function createNavbarPokemon({ id, pokemon }) {
  let aHref = document.createElement("a");
  let spanDex = document.createElement("span");
  let imgPokemon = document.createElement("img");
  aHref.id = id;
  aHref.href = `pokemon.html?id=${pokemon.id}`;
  aHref.innerHTML =
    " <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'/></svg>";
  spanDex.innerText = `#${pokemon.dex}`;
  console.log(pokemon);
  console.log(pokemon.images);
  imgPokemon.src = pokemon.images.tableImage;
  aHref.appendChild(spanDex);
  aHref.appendChild(imgPokemon);
  navbar.appendChild(aHref);
}
if (previewPokemon) {
  createNavbarPokemon({ id: "preview", pokemon: previewPokemon });
  console.log("tem anterior");
}
if (nextPokemon) {
  createNavbarPokemon({ id: "next", pokemon: nextPokemon });
  console.log("tem sucessor");
}
/* pokemon Forms */
const pokemonFormsContainer = document.querySelector("div#pokemonForms");

// Normal
let divNormal = document.createElement("div");
let imgNormal = document.createElement("img");
divNormal.classList.add("imgContainer");
imgNormal.src = pokemon.images.normalImage;
divNormal.appendChild(imgNormal);
pokemonFormsContainer.appendChild(divNormal);
// Shiny
let divShiny = document.createElement("div");
let imgShiny = document.createElement("img");
divShiny.classList.add("imgContainer");
divShiny.id = "shiny";
divShiny.innerHTML =
  "<svg id='star' xmlns='http://www.w3.org/2000/svg' height='15px' viewBox='0 0 576 512'><path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/></svg>";
imgShiny.src = pokemon.images.shinyImage;
divShiny.appendChild(imgShiny);
pokemonFormsContainer.appendChild(divShiny);

/* types */
const pokemonTypesContainer = document.querySelector("div#typesContainer");
console.log(pokemon);
for (let i = 0; i < pokemon.info.types.length; i++) {
  const Type = allWeakness[pokemon.info.types[i]];
  console.log(Type);
  let aType = document.createElement("a");
  aType.classList.add("type");
  aType.href = `type.html?id=${Type.id}`;
  aType.innerText = Type.name;
  aType.style.background = `rgba(var(--${Type.name}))`;
  pokemonTypesContainer.appendChild(aType);
}

/* pokemonInfo  */
const heightText = document.querySelector("li#height div span");
const weightText = document.querySelector("li#weight div span");
const speciesText = document.querySelector("li#species div span");
const abilitiesContainer = document.querySelector("li#abilities div");
const genderContainer = document.querySelector("li#gender div");
const evYieldContainer = document.querySelector("li#evYield div");
const eggGroupsContainer = document.querySelector("li#eggGroups div");

// height
heightText.innerText = pokemon.info.height;
// Weight
weightText.innerText = pokemon.info.weight;
// Species
speciesText.innerText = pokemon.info.species;
// abilities
for (let i = 0; i < pokemon.info.abilities.length; i++) {
  const abilityKey = pokemon.info.abilities[i];
  const Ability = allAbilities[abilityKey];
  let aAbilities = document.createElement("a");
  aAbilities.href = `ability.html?id=${abilityKey}`;
  aAbilities.innerText = Ability.name;
  abilitiesContainer.appendChild(aAbilities);
}
// gender
for (let i = 0; i < pokemon.info.gender.length; i++) {
  const Gender = pokemon.info.gender[i];
  let spanGender = document.createElement("span");
  spanGender.innerText = Gender.probability + " " + Gender.name;
  spanGender.style.color = `var(--${Gender.name})`;
  genderContainer.appendChild(spanGender);
}
// EV Yield
for (let i = 0; i < pokemon.info.evYield.length; i++) {
  const EV = pokemon.info.evYield[i];
  let spanEv = document.createElement("span");
  spanEv.innerText = EV.value + " " + EV.name;
  evYieldContainer.appendChild(spanEv);
}
// Egg Groups
for (let i = 0; i < pokemon.info.eggGroups.length; i++) {
  const EggGroup = pokemon.info.eggGroups[i];
  let spanEggGroup = document.createElement("span");
  spanEggGroup.innerText = EggGroup;
  eggGroupsContainer.appendChild(spanEggGroup);
}
/* Weaknesses */
const weaknessesContainer = document.querySelector("ul#weaknesses");

let typeKey = pokemon.info.types[0];
const type1 = allWeakness[typeKey];
let type2 = null;
if (pokemon.info.types[1]) {
  let typeKey = pokemon.info.types[1];
  type2 = allWeakness[typeKey];
}

for (const weak in type1.Weakness) {
  let Weak = 1;
  if (type2) {
    Weak = type1.Weakness[weak] * type2.Weakness[weak];
  } else {
    Weak = type1.Weakness[weak];
  }
  const WeakName = weak;
  let liType = document.createElement("li");
  let h3Type = document.createElement("h3");
  let spanType = document.createElement("span");
  liType.style.background = `rgba(var(--${weak}))`;
  h3Type.classList.add("content-title");
  h3Type.innerText = WeakName;
  spanType.innerText = `${Weak}x`;
  liType.appendChild(h3Type);
  liType.appendChild(spanType);
  weaknessesContainer.appendChild(liType);
}
console.log(pokemon);
/* Evolutionary */
const evolutionaryContainer = document.querySelector("ul#evolutionary");
console.log(pokemon.evoline);
console.log(allEvoline[pokemon.evoline]);
let evoline = allEvoline[pokemon.evoline];
for (let i = 0; i < evoline.pokemon.length; i++) {
  let pokemon = allPokemon[evoline.pokemon[i]];
  console.log(pokemon);
  // Pokemon Image
  let liPokemon = document.createElement("li");
  let aPokemon = document.createElement("a");
  let imgPokemon = document.createElement("img");
  liPokemon.classList.add("imgContainer");
  aPokemon.href = `pokemon.html?id=${pokemon.id}`;
  imgPokemon.src = pokemon.images.normalImage;
  liPokemon.appendChild(aPokemon);
  aPokemon.appendChild(imgPokemon);

  evolutionaryContainer.appendChild(liPokemon);
  // Evolution Mode
  let evolutionMode = evoline.evolutionModes[i];
  if (evolutionMode != "") {
    let liEvolutionMode = document.createElement("li");
    let spanEvolutionMode = document.createElement("span");
    liEvolutionMode.classList.add("evolveMode");
    liEvolutionMode.innerHTML =
      "<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 448 512'><path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z'/></svg>";
    spanEvolutionMode.innerText = `(${evolutionMode})`;
    liEvolutionMode.appendChild(spanEvolutionMode);
    evolutionaryContainer.appendChild(liEvolutionMode);
  }
}
/* Drops */
const ulContainer = document.querySelector("ul#dropList.wrappedList");
for (let i = 0; i < pokemon.drops.length; i++) {
  const dropId = pokemon.drops[i].id;
  let drop = allItems[dropId];
  // create DOM
  let liContainer = document.createElement("li");
  let aContainer = document.createElement("a");
  let imgDrop = document.createElement("img");
  let spanName = document.createElement("span");
  let divContainerPrice = document.createElement("div");
  let spanPrice = document.createElement("span");
  spanName.classList.add("hidden");
  aContainer.href = `drop.html?id=${dropId}`;
  imgDrop.classList.add("fullsize");
  imgDrop.src = drop.imgSource;
  spanName.innerText = drop.name;
  spanPrice.innerText = `$${drop.price}`;
  divContainerPrice.appendChild(spanPrice);
  aContainer.append(imgDrop, spanName, divContainerPrice);
  liContainer.appendChild(aContainer);
  ulContainer.appendChild(liContainer);
}
/* Status */
const statusContainer = document.querySelector("div#status");
const ulStatusContainer = document.createElement("ul");
for (let i = 0; i < getObjectLength(pokemon.status); i++) {
  let statName = Object.keys(pokemon.status)[i];
  let statValue = pokemon.status[statName];
  let barValue = 0;
  let afterBarComparation = ``;
  if (statName != "total") {
    barValue = statValue / 2.5;
    afterBarComparation = `${statValue} / 250`;
  } else {
    barValue = statValue / 7.5;
    afterBarComparation = `${statValue} / 750`;
  }
  // liContainer
  let liContainer = document.createElement("li");
  // Stat
  let spanStat = document.createElement("span");
  spanStat.innerText = statName;
  // Number
  let spanValue = document.createElement("span");
  spanValue.innerText = statValue;
  // bar
  let outbar = document.createElement("div");
  let inbar = document.createElement("div");
  outbar.dataset.value = afterBarComparation;
  outbar.classList.add("outbar");
  inbar.classList.add("inbar");
  inbar.style.width = `${barValue}%`;
  outbar.appendChild(inbar);

  // Append
  liContainer.append(spanStat, outbar, spanValue);
  ulStatusContainer.appendChild(liContainer);
}
statusContainer.appendChild(ulStatusContainer);
/* Tables (Moves, Locations, Dungeons) */
const theadArrayMoves = ["nvl.", "name", "type", "cat.", "power", "acc."];
const theadArrayLocations = ["name", `${pokemon.name} level`, "others"];
const theadArrayDungeons = ["name", "Recommended Level", "others", "rewards"];
createInfoTable({ title: "moves", theadArray: theadArrayMoves });
createInfoTable({ title: "locations", theadArray: theadArrayLocations });
createInfoTable({ title: "dungeons", theadArray: theadArrayDungeons });
const tableMoves = document.querySelector("table#moves");
const tableLocations = document.querySelector("table#locations");
const tableDungeons = document.querySelector("table#dungeons");
for (let i = 0; i < pokemon.moves.length; i++) {
  const move = pokemon.moves[i];
  const moveData = allMoves[move.id];
  let tr = document.createElement("tr");
  let tdNivel = document.createElement("td");
  let spanNivel = document.createElement("span");
  let imgMove = document.createElement("img");
  let divNivelContainer = document.createElement("div");
  let tdName = document.createElement("td");
  let spanName = document.createElement("span");
  let tdPP = document.createElement("td");
  let spanPP = document.createElement("span");
  let tdType = document.createElement("td");
  let spanType = document.createElement("span");
  let tdCat = document.createElement("td");
  let imgCat = document.createElement("img");
  let tdPower = document.createElement("td");
  let spanPower = document.createElement("span");
  let tdAccuracy = document.createElement("td");
  let spanAccuracy = document.createElement("span");
  /* td - nivel */
  spanNivel.innerText = move.level;
  imgMove.src = moveData.imgSource;
  imgMove.classList.add("radius");
  divNivelContainer.classList.add("flex-container");
  divNivelContainer.appendChild(imgMove);
  divNivelContainer.appendChild(spanNivel);
  tdNivel.appendChild(divNivelContainer);
  /* td - name */
  spanName.innerText = moveData.name;
  tdName.appendChild(spanName);
  /* td - PP */
  spanPP.innerText = moveData.PP;
  tdPP.appendChild(spanPP);
  /* td - type */
  spanType.innerText = moveData.type;
  spanType.href = `#${moveData.type}`;
  spanType.classList.add("coloredbg");
  spanType.style.background = `rgba(var(--${moveData.type}))`;
  tdType.appendChild(spanType);
  /* td - cat */
  imgCat.src = moveData.category.imgSource;
  imgCat.classList.add("full-size");
  tdCat.appendChild(imgCat);
  /* td - power */
  spanPower.innerText = moveData.power;
  tdPower.appendChild(spanPower);
  /* td - accuracy */
  spanAccuracy.innerText = moveData.accuracy;
  tdAccuracy.appendChild(spanAccuracy);
  tr.appendChild(tdNivel);
  tr.appendChild(tdName);
  tr.appendChild(tdType);
  tr.appendChild(tdCat);
  tr.appendChild(tdPower);
  tr.appendChild(tdAccuracy);
  tableMoves.append(tr);
}
for (let i = 0; i < pokemon.locations.length; i++) {
  const location = pokemon.locations[i];
  const locationData = allLocations[location.id];
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  let spanName = document.createElement("span");
  let tdLevel = document.createElement("td");
  let spanLevel = document.createElement("span");
  let tdOthers = document.createElement("td");
  // td - Name
  spanName.innerText = locationData.name;
  tdName.appendChild(spanName);
  // td - Level
  spanLevel.innerText = `${location.levels.min} - ${location.levels.max}`;
  tdLevel.appendChild(spanLevel);
  // td - Others
  for (let i = 0; i < locationData.pokemon.length; i++) {
    let pokemonId = locationData.pokemon[i];
    let Pokemon = allPokemon[pokemonId];
    let aPokemon = document.createElement("a");
    let imgPokemon = document.createElement("img");
    aPokemon.classList.add("icon");
    aPokemon.dataset.name = Pokemon.name;
    aPokemon.href = `pokemon.html?id=${Pokemon.id}`;
    imgPokemon.src = Pokemon.images.tableImage;
    aPokemon.appendChild(imgPokemon);
    tdOthers.appendChild(aPokemon);
  }
  // tr - Append
  tr.appendChild(tdName);
  tr.appendChild(tdLevel);
  tr.appendChild(tdOthers);
  tableLocations.appendChild(tr);
}
for (let i = 0; i < pokemon.dungeons.length; i++) {
  const dungeon = pokemon.dungeons[i];
  const dungeonData = allDungeons[dungeon.id];
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  let spanName = document.createElement("span");
  let tdLevel = document.createElement("td");
  let spanLevel = document.createElement("span");
  let tdRewards = document.createElement("td");
  let tdOthers = document.createElement("td");
  /* td - Name */
  spanName.innerText = dungeonData.name;
  tdName.appendChild(spanName);
  /* td - Level */
  spanLevel.innerText = dungeonData.level;
  tdLevel.appendChild(spanLevel);
  /* td - Pokemon */
  for (let i = 0; i < dungeonData.pokemon.length; i++) {
    let pokemonId = dungeonData.pokemon[i];
    let pokemon = allPokemon[pokemonId];
    let aPokemon = document.createElement("a");
    let imgPokemon = document.createElement("img");
    aPokemon.classList.add("icon");
    aPokemon.dataset.name = pokemon.name;
    aPokemon.href = `pokemon.html?id=${pokemon.id}`;
    imgPokemon.src = pokemon.images.tableImage;
    aPokemon.appendChild(imgPokemon);
    tdOthers.appendChild(aPokemon);
  }
  /* td - rewards */
  for (const RewardId in dungeonData.rewards) {
    if (Object.hasOwnProperty.call(dungeonData.rewards, RewardId)) {
      let reward = allItems[RewardId];
      let aReward = document.createElement("a");
      let imgReward = document.createElement("img");
      aReward.classList.add("icon");
      imgReward.classList.add("full-size");
      aReward.dataset.name = reward.name;
      aReward.href = `items.html?id=${reward.id}`;
      imgReward.src = reward.imgSource;
      aReward.appendChild(imgReward);
      tdRewards.appendChild(aReward);
    }
  }
  tr.appendChild(tdName);
  tr.appendChild(tdLevel);
  tr.appendChild(tdOthers);
  tr.appendChild(tdRewards);
  tableDungeons.appendChild(tr);
}
