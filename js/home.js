import { HeaderObjects } from "./createFunctions/createHeader.js";
import { getObjectLength } from "./createFunctions/internalFunctions.js";

const header = document.querySelector("header");
/* Parallax Image */
const parallaxImageContainer = document.querySelector(
  "div#parallaxImageContainer"
);
const parallaxImage = document.querySelector("div#parallaxImageContainer img");
window.addEventListener("scroll", () => {
  header.classList.toggle("hidden", window.scrollY > 60);
  parallaxImage.style.top = `${scrollY / 3}px`;
});

/* What Wiki Has */
const whatWikiHasSection = document.querySelector("section#whatWikiHasSection");
for (let i = 0; i < getObjectLength(HeaderObjects); i++) {
  const listId = Object.keys(HeaderObjects)[i];
  const list = HeaderObjects[listId];
  let divContainer = document.createElement("div");
  let h3Title = document.createElement("h3");
  let ulContainer = document.createElement("ul");
  h3Title.innerText = list.title;
  for (let i = 0; i < list.items.length; i++) {
    const Item = list.items[i];
    let liContainer = document.createElement("li");
    let aHref = document.createElement("a");
    aHref.href = Item.href;
    aHref.innerText = Item.title;
    liContainer.appendChild(aHref);
    ulContainer.appendChild(liContainer);
  }
  divContainer.classList.add("page-list");
  divContainer.append(h3Title, ulContainer);
  whatWikiHasSection.appendChild(divContainer);
}
