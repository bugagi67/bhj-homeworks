"use strict";


const timerCount = function () {
  const timer = document.getElementById("timer");

  if (timer.textContent !== `0`) {
    timer.textContent -= 1;
  } else {
    window.alert(`Вы победили в конкурсе!`);
    clearInterval(timeOutTimer);
  }
}

let timeOutTimer = setInterval(timerCount, 1000);