import { getByIDSearch } from "./database/getidparams.js";
import { allItems } from "./database/codedb.js";
import { createWrappedListPokemon } from "./createFunctions/createWrappedList.js";
import { backToTop } from "./selectedScript.js";
const Item = getByIDSearch({ database: allItems });

// h1 Title
const h1Title = document.querySelector("h1");
h1Title.innerText = Item.name;

// back To Top Button
backToTop({ imgSource: Item.imgSource, name: Item.name });

// Img Item
const imgItem = document.querySelector("div#imgContainer img");
imgItem.src = Item.imgSource;

// Description Item
const description = document.querySelector("p#description");
description.innerText = Item.description;
// Pokemon Wrapped List
createWrappedListPokemon({ array: Item.pokemon });
