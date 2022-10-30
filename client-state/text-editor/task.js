"use strict";

const editor = document.getElementById("editor");
const localData = localStorage.getItem("text");

const btnClear = document.getElementById("clear");

if (localData) {
  editor.value = localData;
} else {
  editor.addEventListener("change", () => {
    localStorage.setItem("text", editor.value);
  });
}

btnClear.addEventListener("click", () => {
  localStorage.clear();
  editor.value = "";
});
