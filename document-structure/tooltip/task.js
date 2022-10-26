"use stirct";

const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));
let tooltips;

hasTooltips.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    if (!tooltips) {
      hasTooltips.forEach((element) => {
        const height = element.offsetHeight;
        const { left, top } = element.getBoundingClientRect(event.target);
        element.insertAdjacentHTML(
          "afterEnd",
          `<div class="tooltip" style="left:${left}px; top:${
            top + height
          }px">${element.getAttribute("title")}</div>`
        );
        tooltips = Array.from(document.querySelectorAll(".tooltip"));
      });
    }

    if (!event.target.nextElementSibling.classList.contains("tooltip_active")) {
      event.target.nextElementSibling.classList.add("tooltip_active");
    } else {
      event.target.nextElementSibling.classList.remove("tooltip_active");
    }

    const tooltipsActive = Array.from(
      document.querySelectorAll(".tooltip_active")
    );

    tooltipsActive.forEach((element) => {
      if (event.target.nextElementSibling !== element) {
        element.classList.remove("tooltip_active");
      }
    });
  });
});
