"use strict";

const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const closeModal = Array.from(document.querySelectorAll(".modal__content div"));
const showSuccess = document.querySelector(".show-success");


setTimeout(() => modalMain.classList.add("modal_active"), 1000);


closeModal.forEach( elem => {
  elem.onclick = function() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
  }
})

showSuccess.onclick = function () {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
}



