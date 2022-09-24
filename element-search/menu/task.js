"use strict";

const clickLink = Array.from(document.querySelectorAll(".menu__link"));
const menu = Array.from(document.querySelectorAll(".menu_sub"));

clickLink.forEach((elem) => {
  elem.onclick = function () {
    let parentLink = elem.parentElement.querySelector(".menu");

    if (parentLink) {
      if (parentLink.classList.contains("menu_active")) {
        parentLink.classList.remove("menu_active");
      } else {
        menu.forEach((elem) => elem.classList.remove("menu_active"));
        parentLink.classList.add("menu_active");
      }
      return false;
    }
  };
});
