import { createAbility, createTable } from "./createFunctions/createTable.js";
const theadArray = ["name", "description"];
createTable({ title: "Abilities", theadArray: theadArray });
createAbility();
