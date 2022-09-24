"use strict";

const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

function showSlide(newActive) {
  let activeSlide = slides.findIndex((elem) =>
    elem.classList.contains("slider__item_active")
  );
  slides[activeSlide].classList.remove("slider__item_active");
  dots[activeSlide].classList.remove("slider__item_active");

  if (newActive < 0) {
    newActive = slides.length - 1;
  } else if (newActive >= slides.length) {
    newActive = 0;
  }
  slides[newActive].classList.add("slider__item_active");
  dots[newActive].classList.add("slider__item_active");
}

prev.onclick = function () {
  let activeSlide = slides.findIndex((elem) =>
    elem.classList.contains("slider__item_active")
  );
  showSlide(activeSlide - 1);
};

next.onclick = function () {
  let activeSlide = slides.findIndex((elem) =>
    elem.classList.contains("slider__item_active")
  );
  showSlide(activeSlide + 1);
};

dots.forEach((elem) => {
  elem.onclick = function () {
    dots.forEach((elem) => elem.classList.remove("target"));
    elem.classList.add("target");
    let targetDot = dots.findIndex((elem) => elem.classList.contains("target"));
    showSlide(targetDot);
  };
});

