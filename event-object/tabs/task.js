const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach(
  (elem) =>
    (elem.onclick = function () {
      const index = tabs.indexOf(elem);

      tabs.forEach((item) => {
        if (item.classList.contains("tab_active")) {
          item.classList.remove("tab_active");
        }
      });

      tabsContent.forEach((element) => {
        if (element.classList.contains("tab__content_active")) {
          element.classList.remove("tab__content_active");
        }
      });

      elem.classList.add("tab_active");
      tabsContent[index].classList.add("tab__content_active");
    })
);
