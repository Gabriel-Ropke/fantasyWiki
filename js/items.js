import {
  createItem,
  createSelectFilter,
  createTable,
} from "./createFunctions/createTable.js";
import { allRarity } from "./database/codedb.js";

const theadArray = ["name", "rarity", "price", "Pokemon"];
createTable({ title: "Pokémon Items", theadArray: theadArray });
createSelectFilter({
  name: "Rarity",
  database: allRarity,
  cell: "cell-rarity",
});
createItem();
