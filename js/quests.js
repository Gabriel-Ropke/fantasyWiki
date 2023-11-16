import { createQuest, createTable } from "./createFunctions/createTable.js";

const theadArray = ["name", "Nvl", "NPC", "Mission", "Rewards"];
createTable({ title: "Quests", theadArray: theadArray });
createQuest();
