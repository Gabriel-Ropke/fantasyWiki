import {
  allAbilities,
  allItems,
  allMoves,
  allNPC,
  allPokemon,
  allQuests,
  allRarity,
  allWeakness,
} from "../database/codedb.js";
import { getObjectLength } from "./internalFunctions.js";

export function createTable({ title, theadArray }) {
  const tableContainer = document.querySelector("div#tableContainer");
  const tableHeaderContainer = document.createElement("section");
  const tableBodyContainer = document.createElement("section");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const theadRow = document.createElement("tr");
  const h1 = document.createElement("h1");
  const divFilterGroup = document.createElement("div");
  const inputSearch = document.createElement("input");
  tableHeaderContainer.id = "tableHeader";
  h1.innerText = title;
  table.id = title;
  divFilterGroup.id = "filterGroup";
  inputSearch.type = "text";
  inputSearch.placeholder = "Search Name";
  inputSearch.oninput = () => {
    let allTr = tbody.querySelectorAll("tr");
    for (let i = 0; i < allTr.length; i++) {
      let row = allTr[i];
      let rowData = row.querySelector("td.cell-name").innerText.toLowerCase();
      let searchData = inputSearch.value.toLowerCase();
      row.classList.toggle("hidden", !rowData.includes(searchData));
      row.style.setProperty("--delay", i / 25 + "s");
    }
  };
  tableBodyContainer.id = "tableBody";
  for (let i = 0; i < theadArray.length; i++) {
    let th = document.createElement("th");
    let sortAsc = true;
    th.id = theadArray[i].toLowerCase();
    switch (th.id) {
      case "types":
      case "abilities":
      case "effect":
      case "cat.":
      case "pokemon":
        th.innerText = theadArray[i];
        break;
      default:
        th.onclick = () => {
          let allTh = document.querySelectorAll("thead th");
          let allTd = document.querySelectorAll("tbody td");
          let allTr = document.querySelectorAll("tbody tr");
          for (let i = 0; i < allTh.length; i++) {
            allTh[i].classList.remove("active");
          }
          th.classList.add("active");
          for (let i = 0; i < allTd.length; i++) {
            allTd[i].classList.remove("active");
          }
          for (const tr of allTr) {
            tr.querySelectorAll("td")[i].classList.add("active");
          }
          th.classList.toggle("asc", sortAsc);
          sortAsc = th.classList.contains("asc") ? false : true;

          function sortTable({ column, Asc }) {
            [...allTr]
              .sort((a, b) => {
                let firstRow = a
                  .querySelectorAll("td")
                  [column].innerText.toLowerCase();
                let secondRow = b
                  .querySelectorAll("td")
                  [column].innerText.toLowerCase();
                return Asc
                  ? firstRow < secondRow
                    ? 1
                    : -1
                  : firstRow < secondRow
                  ? -1
                  : 1;
              })
              .map((sortedRow) => tbody.appendChild(sortedRow));
          }
          sortTable({ column: i, Asc: sortAsc });
        };
        th.innerHTML =
          theadArray[i] +
          "<span><svg xmlns='http://www.w3.org/2000/svg' height='10px' viewBox='0 0 320 512'><path d='M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z'/></svg></span>";
        th.style.cursor = "pointer";
    }
    thead.appendChild(th);
  }
  tableContainer.appendChild(tableHeaderContainer);
  tableContainer.appendChild(tableBodyContainer);
  tableHeaderContainer.appendChild(h1);
  tableHeaderContainer.appendChild(divFilterGroup);
  divFilterGroup.appendChild(inputSearch);
  tableBodyContainer.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(theadRow);
  table.appendChild(tbody);
}
/* create info Table */
export function createInfoTable({ title, theadArray }) {
  const tableContainer = document.querySelector("div#tableContainer");
  const tableHeaderContainer = document.createElement("section");
  const tableBodyContainer = document.createElement("section");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const theadRow = document.createElement("tr");
  const h1 = document.createElement("h1");
  tableHeaderContainer.id = "tableHeader";
  h1.innerText = title;
  table.id = title;
  tableBodyContainer.id = "tableBody";
  for (let i = 0; i < theadArray.length; i++) {
    let th = document.createElement("th");
    th.id = theadArray[i].toLowerCase();
    th.innerText = theadArray[i];

    thead.appendChild(th);
  }
  tableContainer.appendChild(tableHeaderContainer);
  tableContainer.appendChild(tableBodyContainer);
  tableHeaderContainer.appendChild(h1);
  tableBodyContainer.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(theadRow);
  table.appendChild(tbody);
}
export function createSelectFilter({ name, database, cell }) {
  const SelectorContainer = document.createElement("div");
  const SelectorSpan = document.createElement("span");
  const SelectorUl = document.createElement("ul");
  const SelectorClean = document.createElement("button");
  /* Selector Span */
  SelectorSpan.innerText = name;
  SelectorSpan.onclick = () => {
    SelectorUl.classList.toggle("active");
  };
  /* Selector Clean */
  SelectorClean.classList.add("cleanSelector");
  SelectorClean.innerText = "X";
  SelectorClean.onclick = () => {
    SelectorSpan.style = "";
    SelectorSpan.innerText = name;
    SelectorClean.classList.remove("active");
    let inputSearch = document.querySelector("div#filterGroup input");
    let allTr = document.querySelectorAll("tbody tr");
    for (let i = 0; i < allTr.length; i++) {
      let row = allTr[i];
      let rowData = row.querySelector("td.cell-name").innerText.toLowerCase();
      let searchData = inputSearch.value.toLowerCase();
      row.classList.toggle("hidden", !rowData.includes(searchData));
    }
  };
  /* Selector Ul */
  SelectorUl.classList.add("scrollHidden");
  /* Selector Ul > Li */
  for (let i = 0; i < getObjectLength(database); i++) {
    const objectId = Object.keys(database)[i];
    const object = database[objectId];
    let objectName = object.name.toLowerCase();
    let li = document.createElement("li");
    li.innerText = objectName;
    li.style.background = `rgba(var(--${objectName}))`;
    li.onclick = () => {
      let allTr = document.querySelectorAll("tbody tr");
      SelectorClean.classList.add("active");
      SelectorUl.classList.remove("active");
      SelectorSpan.innerText = li.innerText;
      SelectorSpan.style.color = "white";
      SelectorSpan.style.background = li.style.background;
      for (let i = 0; i < allTr.length; i++) {
        let allFilteredObjects = allTr[i].querySelectorAll(`.${cell} span`);
        allTr[i].classList.add("hidden");
        for (let ii = 0; ii < allFilteredObjects.length; ii++) {
          if (allFilteredObjects[ii].dataset.filter.includes(objectName)) {
            allTr[i].classList.remove("hidden");
          }
        }
      }
    };
    SelectorUl.appendChild(li);
  }
  /* Selector Container */
  SelectorContainer.classList.add("selectContainer");
  SelectorContainer.appendChild(SelectorClean);
  SelectorContainer.appendChild(SelectorSpan);
  SelectorContainer.appendChild(SelectorUl);
  document.querySelector("div#filterGroup").appendChild(SelectorContainer);
}

/* Create Table Datas */
// Pokémon
export function createPokemon() {
  for (let i = 0; i < getObjectLength(allPokemon); i++) {
    const pokemonId = Object.keys(allPokemon)[i];
    const pokemon = allPokemon[pokemonId];
    let tr = document.createElement("tr");
    let tdNumber = document.createElement("td");
    let aNumber = document.createElement("a");
    let tdName = document.createElement("td");
    let aName = document.createElement("a");
    let spanName = document.createElement("span");
    let imgPokemon = document.createElement("img");
    let tdTypes = document.createElement("td");
    let tdAbilities = document.createElement("td");
    /* td Number */
    tdNumber.classList.add("cell-number");
    aNumber.href = `pokemon.html?id=${pokemon.id}`;
    aNumber.innerText = `#${pokemon.dex}`;
    tdNumber.appendChild(aNumber);
    /* td Name */
    tdName.classList.add("cell-name");
    aName.href = `pokemon.html?id=${pokemon.id}`;
    spanName.innerText = pokemon.name;
    imgPokemon.src = pokemon.images.tableImage;
    aName.appendChild(imgPokemon);
    aName.appendChild(spanName);
    tdName.appendChild(aName);
    /* td Types */
    tdTypes.classList.add("cell-types");
    for (let ii = 0; ii < pokemon.info.types.length; ii++) {
      const typeId = pokemon.info.types[ii];
      let typeName = allWeakness[typeId].name;
      let spanType = document.createElement("span");
      spanType.dataset.filter = typeName;
      spanType.innerText = typeName;
      spanType.style.background = `rgba(var(--${typeName}))`;
      spanType.classList.add("coloredbg");
      tdTypes.appendChild(spanType);
    }
    /* td Abilities */
    tdAbilities.classList.add("cell-abilities");
    for (let ii = 0; ii < getObjectLength(pokemon.info.abilities); ii++) {
      const abilityId = Object(pokemon.info.abilities)[ii];
      const Ability = allAbilities[abilityId];
      let aAbility = document.createElement("a");
      aAbility.innerText = Ability.name;
      aAbility.href = `ability.html?id=${Ability.id}`;
      tdAbilities.appendChild(aAbility);
    }
    /* tr AppendChild */
    tr.append(tdNumber, tdName, tdTypes, tdAbilities);
    /* td Status */
    for (let ii = 0; ii < getObjectLength(pokemon.status); ii++) {
      const statId = Object.keys(pokemon.status)[ii];
      let statValue = pokemon.status[statId];
      let tdStatus = document.createElement("td");
      tdStatus.innerText = statValue;
      tr.appendChild(tdStatus);
    }
    document.querySelector("tbody").appendChild(tr);
  }
}
/* Items */
export function createItem() {
  for (let i = 0; i < getObjectLength(allItems); i++) {
    const itemId = Object.keys(allItems)[i];
    const item = allItems[itemId];
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let spanName = document.createElement("span");
    let itemImg = document.createElement("img");
    let aName = document.createElement("a");
    let tdRarity = document.createElement("td");
    let spanRarity = document.createElement("span");
    let tdPrice = document.createElement("td");
    let tdPokemon = document.createElement("td");
    /* td Name */
    tdName.classList.add("cell-name");
    aName.href = `item.html?id=${item.id}`;
    itemImg.src = item.imgSource;
    itemImg.classList.add("full-size");
    spanName.innerText = item.name;
    aName.appendChild(itemImg);
    aName.appendChild(spanName);
    tdName.appendChild(aName);
    /* td Rarity */
    tdRarity.classList.add("cell-rarity");
    spanRarity.dataset.filter = item.rarity;
    spanRarity.innerText = item.rarity;
    spanRarity.style.color = `rgba(var(--${item.rarity}))`;
    tdRarity.appendChild(spanRarity);
    /* td Price */
    tdPrice.classList.add("cell-price");
    tdPrice.innerText = `$${item.price}`;
    /* td PokemonWhoDrop */
    tdPokemon.classList.add("cell-pokemon");
    tdPokemon.classList.add("maxWidth");
    for (let ii = 0; ii < item.pokemon.length; ii++) {
      let pokemonId = item.pokemon[ii];
      let pokemon = allPokemon[pokemonId];
      console.log(pokemon);
      let aPoke = document.createElement("a");
      let pokeImg = document.createElement("img");
      aPoke.dataset.name = pokemon.name;
      aPoke.classList.add("icon");
      aPoke.href = `pokemon.html?id=${pokemon.id}`;
      pokeImg.src = pokemon.images.tableImage;
      aPoke.appendChild(pokeImg);
      tdPokemon.appendChild(aPoke);
    }
    /* tr AppendChild */
    tr.append(tdName, tdRarity, tdPrice, tdPokemon);
    document.querySelector("tbody").appendChild(tr);
  }
}
/* Quests */
export function createQuest() {
  for (let i = 0; i < getObjectLength(allQuests); i++) {
    const questId = Object.keys(allQuests);
    const quest = allQuests[questId];
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    let aName = document.createElement("a");

    let tdNivel = document.createElement("td");

    let tdNPC = document.createElement("td");

    let tdMission = document.createElement("td");

    let tdRewards = document.createElement("td");
    /* td Name */
    tdName.classList.add("cell-name");
    aName.href = `quest.html?id=${quest.id}`;
    aName.innerText = quest.name;
    tdName.appendChild(aName);
    /* td Nivel*/
    tdNivel.classList.add("cell-nivel");
    tdNivel.innerText = quest.nvl;
    /* td NPC */
    tdNPC.classList.add("cell-npc");
    for (let ii = 0; ii < quest.npcs.length; ii++) {
      const npcId = quest.npcs[ii];
      let npc = allNPC[npcId];
      let aNPC = document.createElement("a");
      let imgNPC = document.createElement("img");
      aNPC.classList.add("icon");
      aNPC.dataset.name = npc.name;
      aNPC.href = `npc.html?id=${npcId}`;
      imgNPC.src = npc.imgSource;
      aNPC.appendChild(imgNPC);
      tdNPC.appendChild(aNPC);
    }
    /* td Mission */
    tdMission.classList.add("cell-mission");
    tdMission.classList.add("maxWidth");
    tdMission.innerText = quest.mission;

    /* td Rewards */
    tdRewards.classList.add("cell-rewards");
    for (let ii = 0; ii < quest.rewards.length; ii++) {
      const rewardId = quest.rewards[ii].id;
      const rewardQuantify = quest.rewards[ii].quantity;
      const reward = allItems[rewardId];
      let aRewards = document.createElement("a");
      let spanRewards = document.createElement("span");
      let imgRewards = document.createElement("img");
      aRewards.classList.add("icon");
      imgRewards.classList.add("full-size");
      aRewards.href = `item.html?id=${rewardId}`;
      aRewards.dataset.name = reward.name;
      spanRewards.innerText = `${rewardQuantify}x`;
      imgRewards.src = reward.imgSource;
      aRewards.appendChild(spanRewards);
      aRewards.appendChild(imgRewards);
      tdRewards.appendChild(aRewards);
    }
    /* tr AppendChild */
    tr.appendChild(tdName);
    tr.appendChild(tdNivel);
    tr.appendChild(tdNPC);
    tr.appendChild(tdMission);
    tr.appendChild(tdRewards);
    document.querySelector("tbody").appendChild(tr);
  }
}
/* Moves */
export function createMove() {
  for (let i = 0; i < getObjectLength(allMoves); i++) {
    const moveId = Object.keys(allMoves)[i];
    const move = allMoves[moveId];
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let aName = document.createElement("a");
    let tdTypes = document.createElement("td");
    let spanType = document.createElement("span");
    let tdCategory = document.createElement("td");
    let imgCategory = document.createElement("img");
    let tdPower = document.createElement("td");
    let tdAccuracy = document.createElement("td");
    let tdPP = document.createElement("td");
    let tdEffect = document.createElement("td");
    /* td Name */
    tdName.classList.add("cell-name");
    aName.href = `move.html?id=${move.id}`;
    aName.innerText = move.name;
    tdName.appendChild(aName);
    /* td Types */
    tdTypes.classList.add("cell-types");
    spanType.dataset.filter = move.type;
    spanType.innerText = move.type;
    spanType.style.background = `rgba(var(--${move.type}))`;
    spanType.classList.add("coloredbg");
    tdTypes.appendChild(spanType);
    /* td Category */
    tdCategory.classList.add("cell-category");
    imgCategory.src = move.category.imgSource;
    tdCategory.appendChild(imgCategory);
    /* td Power */
    tdPower.classList.add("cell-power");
    tdPower.innerText = move.power;
    /* td Accuracy */
    tdAccuracy.classList.add("cell-accuracy");
    tdAccuracy.innerText = move.accuracy;
    /* td PP */
    tdPP.classList.add("cell-PP");
    tdPP.innerText = move.PP;
    /* td Effect */
    tdEffect.classList.add("cell-effect");
    tdEffect.innerText = move.effect;
    /* tr AppendChild */
    tr.appendChild(tdName);
    tr.appendChild(tdTypes);
    tr.appendChild(tdCategory);
    tr.appendChild(tdPower);
    tr.appendChild(tdAccuracy);
    tr.appendChild(tdPP);
    tr.appendChild(tdEffect);
    document.querySelector("tbody").appendChild(tr);
  }
}
/* Abilities */
export function createAbility() {
  for (let i = 0; i < getObjectLength(allAbilities); i++) {
    const abilityId = Object.keys(allAbilities)[i];
    const ability = allAbilities[abilityId];
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let aName = document.createElement("a");
    let tdDescription = document.createElement("td");
    /* td Name */
    tdName.classList.add("cell-name");
    aName.href = `ability.html?id=${ability.id}`;
    aName.innerText = ability.name;
    tdName.appendChild(aName);
    /* td Types */
    tdDescription.classList.add("cell-description");
    tdDescription.classList.add("maxWidth");
    tdDescription.innerText = ability.description;
    /* tr AppendChild */
    tr.appendChild(tdName);
    tr.appendChild(tdDescription);
    document.querySelector("tbody").appendChild(tr);
  }
}
