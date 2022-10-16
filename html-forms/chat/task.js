"use strict";

const widget = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input");
const messageArea = document.getElementById("chat-widget__messages");
const currentTime = new Date().toLocaleTimeString().slice(0, -3);
const container = document.querySelector(".chat-widget__messages-container");
const robotMessages = [
  "Отстань",
  "Отстань, говорю",
  "Ну чего ты докопался? Сначала купи что нибудь, потом может быть ответим.",
  "Читай предыдущее сообщение <=",
  "Ты купил что нибудь?",
  "Ты не достоин моего ответа!",
];

widget.addEventListener("click", () => {
  widget.classList.add("chat-widget_active");

  input.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      if (input.value) {
        messageArea.innerHTML += `<div class = "message message_client">
            <div class = "message__time">${currentTime}</div>
            <div class = "message__text">${input.value}</div>
          </div>`;

        input.value = "";

        const randomMessage = Math.floor(Math.random() * robotMessages.length);

        messageArea.innerHTML += `<div class = "message">
            <div class = "message__time">${currentTime}</div>
            <div class = "message__text">${robotMessages[randomMessage]}</div>
          </div>`;

        container.scrollTop = container.scrollHeight;
      }
    }
  });
});
