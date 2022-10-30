"use strict";

const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");
const cookieLoad = document.cookie;
let timerID;

// timerID = setTimeout(() => {
//   modal.classList.add("modal_active");   //раскоментировать для проаерки в firefox
// }, 2000);

document.addEventListener("mouseleave", () => {   //закоментировать для проверки в firefox
  timerID = setTimeout(() => {
    modal.classList.add("modal_active");
  }, 100);
});

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modal=closed";
});

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((p) => p.startsWith(name + "="));
  return cookie;
}

window.onload = () => {
  if (getCookie("modal") === "modal=closed") {
    clearTimeout(timerID);
  }
};

//куки не записываются в google chrome, в firefox куки записываются, но не работает mouseleave