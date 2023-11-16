import {
  createPokemon,
  createSelectFilter,
  createTable,
} from "./createFunctions/createTable.js";
import { allWeakness } from "./database/codedb.js";
const theadArray = [
  "Nº",
  "Name",
  "Types",
  "Abilities",
  "HP",
  "Atk",
  "Def",
  "Sp.A",
  "Sp.D",
  "Speed",
  "Total",
];
createTable({ title: "Pokédex", theadArray: theadArray });
createSelectFilter({
  name: "Types",
  database: allWeakness,
  cell: "cell-types",
});
createPokemon();
