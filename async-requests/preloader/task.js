"use strict";

const items = document.getElementById("items");
const loader = document.getElementById("loader");
let data;
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

if (localStorage.data) {
  data = JSON.parse(localStorage.data);
  loader.classList.remove("loader_active");
  showItems(data);
}

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE && xhr.statusText === "OK") {
    items.textContent = "";
    data = JSON.parse(xhr.response).response.Valute;
    localStorage.setItem("data", JSON.stringify(data));
    loader.classList.remove("loader_active");
    showItems(data);
  }
});

function showItems(arg) {
  for (let key in arg) {
    items.innerHTML += `<div class="item">
      <div class = "item__code">
        ${data[key].CharCode}
      </div>
      <div class = "item__value">
        ${data[key].Value}
      </div>
      <div class = "item__currency">
        руб.
      </div>
    </div>
    `;
  }
}

