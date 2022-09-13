"use strict";

let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let index = 1; index <= 9; index++) {

  function getHole(index) {
    let holeCLick = document.getElementById(`hole${index}`);
    return holeCLick;
  }

  let hole = getHole(index);

  hole.onclick = function() {
    if (hole.classList.contains( 'hole_has-mole' )) {
      dead.innerHTML++;
    } else {
      lost.innerHTML++;
    }

    if (dead.textContent === '10') {
      window.alert("Вы победили!");
      dead.textContent = 0;
      lost.textContent = 0;
    } else if (lost.textContent === '5') {
      window.alert("Вы проиграли...");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}