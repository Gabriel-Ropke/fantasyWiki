import { HeaderObjects } from "./createFunctions/createHeader.js";
import { getObjectLength } from "./createFunctions/internalFunctions.js";
import { allNews, allUsers } from "./database/codedb.js";

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
/* News */
const newsListContainer = document.querySelector(
  "section#newsSection ul#newsList"
);
for (let i = 0; i < getObjectLength(allNews); i++) {
  const newsId = Object.keys(allNews)[i];
  const News = allNews[newsId];
  let liContainer = document.createElement("li");
  let aHref = document.createElement("a");
  let divImgContainer = document.createElement("div");
  let newsImg = document.createElement("img");
  let divTextContainer = document.createElement("div");
  let h3Title = document.createElement("h3");
  let pDescription = document.createElement("p");

  liContainer.classList.add("new");
  aHref.href = News.href;
  divImgContainer.classList.add("imageContainer");
  newsImg.src = News.imgSource;
  divTextContainer.classList.add("textContainer");
  h3Title.innerText = News.title;
  pDescription.innerText = News.description;

  divImgContainer.appendChild(newsImg);
  divTextContainer.append(h3Title, pDescription);
  aHref.append(divImgContainer, divTextContainer);
  liContainer.appendChild(aHref);
  newsListContainer.appendChild(liContainer);
}

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

/* Who Are */
const whoAreListContainer = document.querySelector("section#whoAre ul#whoList");
for (let i = 0; i < getObjectLength(allUsers); i++) {
  const userId = Object.keys(allUsers)[i];
  const user = allUsers[userId];
  let liContainer = document.createElement("li");
  let divImgContainer = document.createElement("div");
  let userImg = document.createElement("img");
  let h4Name = document.createElement("h4");
  let spanDiscordId = document.createElement("span");
  let pDescription = document.createElement("p");

  divImgContainer.classList.add("imgContainer");
  userImg.src = user.imgSource;
  h4Name.innerText = `${user.name} - ${user.work}`;
  spanDiscordId.innerText = user.discordID;
  pDescription.innerText = user.history;
  divImgContainer.appendChild(userImg);
  liContainer.append(divImgContainer, h4Name, spanDiscordId, pDescription);
  whoAreListContainer.appendChild(liContainer);
}
