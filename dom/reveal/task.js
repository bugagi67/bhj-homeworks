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



// Спасибо за присланную работу. Задачи решены верно.
// Можно запилить решение с одной переменной top

// const reveals = document.getElementsByClassName("reveal");

// document.addEventListener('scroll', function() {
//   for (let reveal of reveals) {
//     const viewportHeight = window.innerHeight;
// 		const { top } = reveal.getBoundingClientRect();
//     if (top < viewportHeight && top > 0) {
//       reveal.classList.add("reveal_active");
//     } else {
//       reveal.classList.remove("reveal_active");
//     }
//   } 
// });
// Вторую задачу также можно решить через использование свойств DOM-элемента nextElementSibling и firstElementChild у родительского элемента. 
// Смысл в том, что у текущего элемента вы удаляете класс active, а у соседнего навешиваете. Но нужно сделать проверку, если свойство nextElementSibling 
// вернуло null, значит текущий элемент - последний, и нужно обратиться к первому элементу, чтобы все началось заново.
// По третьей задачке все ок.

// Вы отлично поработали над домашним заданием, ставлю зачет. Удачи в дальнейшем обучении!