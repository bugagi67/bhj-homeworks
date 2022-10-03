"use strict";

const reveal = Array.from(document.querySelectorAll(".reveal"));

function isVisible(arg) {
  const { top, bottom } = arg.getBoundingClientRect();

  if (bottom < 0) {
    return false;
  } else if (top > window.innerHeight) {
    return false;
  }
  return true;
}

window.addEventListener("scroll", function () {
  reveal.forEach((elem) => {
    if (isVisible(elem)) {
      elem.classList.add("reveal_active");
    }
  });
});
