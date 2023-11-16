import {
  createMove,
  createSelectFilter,
  createTable,
} from "./createFunctions/createTable.js";
import { allWeakness } from "./database/codedb.js";
const theadArray = ["Name", "Type", "Cat.", "Power", "Acc", "PP", "Effect"];
createTable({ title: "Pokémon Moves", theadArray: theadArray });
createSelectFilter({
  name: "Types",
  database: allWeakness,
  cell: "cell-types",
});
createMove();
