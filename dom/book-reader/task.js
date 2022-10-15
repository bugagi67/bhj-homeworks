"use strict";

const bookSize = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");
const textColor = Array.from(
  document.querySelectorAll(".book__control_color a")
);
const bgrColor = Array.from(
  document.querySelectorAll(".book__control_background a")
);

bookSize.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    bookSize.forEach((item) => item.classList.remove("font-size_active"));
    elem.classList.add("font-size_active");

    const dataSize = [];

    bookSize.forEach((item) => dataSize.push(`book_fs-${item.dataset.size}`));

    dataSize.forEach((item) => book.classList.remove(item));

    book.classList.add(`book_fs-${event.target.dataset.size}`);
  });
});

textColor.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    textColor.forEach((item) => item.classList.remove("color_active"));
    elem.classList.add("color_active");

    const dataColor = [];

    textColor.forEach((item) =>
      dataColor.push(`book_color-${item.dataset.textColor}`)
    );

    dataColor.forEach((item) => book.classList.remove(item));

    book.classList.add(`book_color-${event.target.dataset.textColor}`);
  });
});

bgrColor.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    bgrColor.forEach((item) => item.classList.remove("color_active"));
    elem.classList.add("color_active");

    const dataBgColor = [];

    bgrColor.forEach((item) =>
      dataBgColor.push(`book_bg-${item.dataset.bgColor}`)
    );

    dataBgColor.forEach((item) => book.classList.remove(item));

    book.classList.add(`book_bg-${event.target.dataset.bgColor}`);
  });
});
