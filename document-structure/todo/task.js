"use strict";

const add = document.querySelector(".tasks__add");
const input = document.querySelector(".tasks__input");
const list = document.querySelector(".tasks__list");

add.addEventListener("click", (event) => {
  event.preventDefault();

  if (input.value.trim()) {
    list.insertAdjacentHTML(
      "afterbegin",
      `<div class="task">
          <div class="task__title">
            ${input.value}
          </div>
          <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    input.value = "";

    let task = document.querySelector(".task");
    let remove = document.querySelector(".task__remove");

    remove.addEventListener("click", () => task.remove());
  }
});
