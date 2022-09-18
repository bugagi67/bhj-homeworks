"use strict";

const cook = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let startTime = new Date();

cook.onclick = function () {
  // count.innerText++;
  // cook.width === 200 ? cook.width = 250 : cook.width = 200;

  cook.width = ++count.textContent % 2 ? 250 : 200;

  let endTime = new Date();

  let speedClick = 1 / ((endTime - startTime) / 1000);

  speed.textContent = speedClick.toFixed(2);

  startTime = endTime;
};
