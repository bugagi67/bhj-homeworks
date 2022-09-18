"use strict";

const timerCount = function () {
  const timerH = document.getElementById("timerH");
  const timerM = document.getElementById("timerM");
  const timerS = document.getElementById("timerS");

    if (timerH.textContent !== "00" && timerM.textContent !== "00" && timerS.textContent !== "00") {
      timerS.textContent -= 1;
      if (timerS.textContent === "0" && timerM.textContent !== "0") {
        timerM.textContent -=1;
        timerS.textContent = "59";
        if (timerM.textContent === "0" && timerH.textContent !== "0") {
          timerH.textContent -= 1;
          timerM.textContent = 59;
        }
      } else if (timerH.textContent === "0" && timerM.textContent === "0" && timerS.textContent === "0") {
        window.alert(`Вы победили в конкурсе!`);
        window.location.href = "https://www.win-rar.com/postdownload.html?&amp;L=4"
        clearInterval(timeOutTimer);
      }
    }
    
  // if (timer.textContent !== "0") {
  //   timer.textContent -= 1;
  // } else {
  //   window.alert("Вы победили в конкурсе!");
  //   window.location.href = "https://www.win-rar.com/postdownload.html?&amp;L=4"
  //   clearInterval(timeOutTimer);
  // }
};

let timeOutTimer = setInterval(timerCount, 1000);