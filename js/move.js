import { createWrappedListPokemon } from "./createFunctions/createWrappedList.js";
import { allMoves, allWeakness } from "./database/codedb.js";
import { getByIDSearch } from "./database/getidparams.js";
import { backToTop } from "./selectedScript.js";
const Move = getByIDSearch({ database: allMoves });
const typeName = allWeakness[Move.type].name;
// Back To Top Button
backToTop({ imgSource: Move.imgSource, name: Move.name });
// Move Title
const h1Title = document.querySelector("main h1");
h1Title.innerText = Move.name;

// Move Image
const moveImgContainer = document.querySelector("div#imgContainer");
const moveImg = document.querySelector("div#imgContainer img");
moveImgContainer.style.borderColor = `rgba(${typeName})`;
moveImg.src = Move.imgSource;

// Move Description
const pDescription = document.querySelector("p#description");
pDescription.innerText = Move.effect;

// Move Info

// - Power
const liMovePower = document.querySelector("li#movePower");
let spanPower = document.createElement("span");
spanPower.innerText = Move.power;
liMovePower.appendChild(spanPower);

// - Category
const imgCategory = document.querySelector("li#moveCategory img");
imgCategory.src = Move.category.imgSource;

// - Accuracy
const liMoveAccuracy = document.querySelector("li#moveAccuracy");
let spanAccuracy = document.createElement("span");
spanAccuracy.innerText = `${Move.accuracy}%`;
liMoveAccuracy.appendChild(spanAccuracy);

// - PP
const liMovePP = document.querySelector("li#movePP");
let spanPP = document.createElement("span");
spanPP.innerText = Move.PP;
liMovePP.appendChild(spanPP);

// - Type
const liMoveType = document.querySelector("li#moveType");
let spanType = document.createElement("span");
spanType.classList.add("type");
spanType.style.background = `rgba(var(--${typeName}))`;
spanType.innerText = typeName;
liMoveType.appendChild(spanType);

// Pokemon Wrapped List
createWrappedListPokemon({ array: Move.pokemon });
