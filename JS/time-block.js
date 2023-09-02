"use strict";

const clock = document.getElementById("clock-time")
const date = document.getElementById("clock-date")
date.innerText = getFormattedDate();

const timeInterval = setInterval(() => {
  const time = (new Date()).toLocaleTimeString();
  clock.innerText = time;

  if(date.innerText != getFormattedDate()){
    date.innerText = getFormattedDate();
  }
}, 1)

function getFormattedDate() {
  const months = [
    "января", "февраля", "марта",
    "апреля", "мая", "июня",
    "июля", "августа", "сентября",
    "октября", "ноября", "декабря"
  ];

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return(`${day} ${month} ${year} г.`);
}