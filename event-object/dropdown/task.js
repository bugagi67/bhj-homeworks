"use strict";

const buttonValue = document.querySelector(".dropdown__value");
const dropDown = document.querySelector(".dropdown__list");
const listItem = Array.from(document.getElementsByClassName("dropdown__item"));

function openClose() {
  dropDown.classList.toggle("dropdown__list_active");
  return false;
}

buttonValue.onclick = openClose;
listItem.forEach((elem) => {
  elem.onclick = function () {
    let textValue = elem.textContent;
    buttonValue.textContent = textValue;
    openClose();
    return false;
  };
});
