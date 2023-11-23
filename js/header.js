import { createHeader } from "./createFunctions/createHeader.js";

createHeader();
const Header = document.querySelector("header");
const Body = document.querySelector("body");
function createMenuBurguer() {
  const menuBurguer = document.createElement("div");
  let menuIcon = document.createElement("span");
  menuIcon.id = "menuIcon";
  menuBurguer.id = "menu";
  menuBurguer.onclick = function () {
    Header.classList.toggle("active");
  };
  menuBurguer.appendChild(menuIcon);
  Body.appendChild(menuBurguer);
}
if (window.innerWidth > 400) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
      Header.classList.add("active");
    } else {
      Header.classList.remove("active");
    }
  });
} else {
  createMenuBurguer();
}
