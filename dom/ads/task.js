const rotator = document.querySelectorAll(".rotator");
let index = 0;

setInterval(() => {
  rotator.forEach(elem => {
    const rotatorCase = elem.querySelectorAll(".rotator__case");
    rotatorCase.forEach(item =>
      item.classList.remove("rotator__case_active")
    );
    index < rotatorCase.length - 1 ? index++ : (index = 0);
    rotatorCase[index].classList.add("rotator__case_active");
  });
}, 1000);
