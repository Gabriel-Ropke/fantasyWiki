import { getObjectLength } from "./internalFunctions.js";

export function createHeader() {
  const Body = document.body;
  const headerContainer = document.querySelector("header");
  const navContainer = document.querySelector("header nav");

  // Cria Botão Home
  let aHome = document.createElement("a");
  aHome.href = "index.html";
  aHome.id = "home";
  aHome.innerText = "home";
  navContainer.appendChild(aHome);
  // Objeto com todas as listas
  const liObjects = {
    informatives: {
      id: "informative",
      title: "informatives",
      items: [
        {
          title: "o que são iv's e ev's?",
          href: "evseivs.html",
        },
        {
          title: "o que são as Fraquezas",
          href: "#",
        },
        {
          title: "como saber a melhor nature",
          href: "#",
        },
      ],
    },
    lists: {
      id: "list",
      title: "lists",
      items: [
        {
          title: "pokedex",
          href: "pokedex.html",
        },
        {
          title: "moves",
          href: "moves.html",
        },
        {
          title: "items",
          href: "items.html",
        },
        {
          title: "abilities",
          href: "abilities.html",
        },
        {
          title: "quests",
          href: "quests.html",
        },
      ],
    },
  };
  // Cria as Listas
  for (let i = 0; i < getObjectLength(liObjects); i++) {
    const listId = Object.keys(liObjects)[i];
    const list = liObjects[listId];
    let divContainer = document.createElement("div");
    let ulContainer = document.createElement("ul");
    let spanTitle = document.createElement("span");
    spanTitle.innerText = list.title;
    for (let i = 0; i < list.items.length; i++) {
      let item = list.items[i];
      let liContainer = document.createElement("li");
      let aHref = document.createElement("a");
      aHref.innerText = item.title;
      aHref.href = item.href;
      liContainer.appendChild(aHref);
      ulContainer.appendChild(liContainer);
    }
    divContainer.id = list.id;
    divContainer.append(spanTitle, ulContainer);
    navContainer.appendChild(divContainer);
  }
  // cria o SwitchMode
  let divSwitchMode = document.createElement("div");
  let imgSwitchMode = document.createElement("img");
  divSwitchMode.id = "switchMode";
  imgSwitchMode.src = "img/general/dark-mode-icon.png";
  imgSwitchMode.alt = "switchMode";
  divSwitchMode.onclick = function () {
    Body.classList.toggle("light");
    if (Body.classList.contains("light")) {
      imgSwitchMode.src = "img/general/light-mode-icon.png";
    } else {
      imgSwitchMode.src = "img/general/dark-mode-icon.png";
    }
  };
  divSwitchMode.appendChild(imgSwitchMode);
  headerContainer.appendChild(divSwitchMode);
}
