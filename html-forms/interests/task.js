"use strict";

const interest = Array.from(document.querySelectorAll(".interest__check"));

interest.forEach((item) => {
  item.addEventListener("change", () => {
    if (!item.closest(".interests_active")) {
      const childInterest = Array.from(
        item.closest(".interest").querySelectorAll(".interest__check")
      );
      if (item.checked) {
        childInterest.forEach((elem) => (elem.checked = true));
      } else {
        childInterest.forEach((elem) => (elem.checked = false));
      }
    }
  });
});
