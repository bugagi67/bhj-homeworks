"use strict";

const pollTitle = document.getElementById("poll__title");
const pollAnswer = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

let dataPost;

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE && xhr.statusText === "OK") {
    let data = JSON.parse(xhr.response);

    pollTitle.textContent = data.data.title;

    data.data["answers"].forEach((element) => {
      pollAnswer.insertAdjacentHTML(
        "afterbegin",
        `
        <button class="poll__answer">
          ${element} 
        </button>`
      );
    });

    const btn = Array.from(document.querySelectorAll(".poll__answer"));

    btn.forEach((element, index) => {
      element.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");

        let xml = new XMLHttpRequest();
        xml.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
        xml.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xml.send(`vote=${data.id}&answer=${index}`);
        xml.addEventListener("readystatechange", () => {
          if (xml.readyState === xml.DONE && xml.statusText === "OK") {
            dataPost = JSON.parse(xml.response).stat;
            pollAnswer.textContent = "";

            for (let key in dataPost) {
              pollAnswer.insertAdjacentHTML(
                "afterbegin",
                `
                <div class="item">
                  <div class = "item__code">
                    ${dataPost[key].answer}: <span style="font-weight: 700">${dataPost[key].votes}%</span>
                  </div>
                </div>`
              );
            }
          }
          setTimeout(() => window.location.reload(), 4000);
        });
      });
    });
  }
});
