const defaultDate = new Date();
const calendarElements = document.querySelectorAll('.shedule-day-grid *')

let currentMonth = +defaultDate.getMonth();
let currentYear = +defaultDate.getFullYear();

function showCurrentMontYear(month, year) {

}

function getDateOfWeek(date) {
  const dayOfWeek = date.toLocaleString("default", { weekday: 'short' })
  switch (dayOfWeek) {
    case 'пн':
      return 1;
      break;
    case 'вт':
      return 2;
      break;
    case 'ср':
      return 3;
      break;
    case 'чт':
      return 4;
      break;
    case 'пт':
      return 5;
      break;
    case 'сб':
      return 6;
      break;
    case 'вс':
      return 7;
      break;
  }
}


function showMonth(month, year) {
  const currentDate = new Date(year, month, 1)
  const curentMonthLastDay = new Date(year, month + 1, 0).getDate()
  let lastMonthLastDay = new Date(year, month, 0).getDate()
  const firstDateOfWeek = getDateOfWeek(currentDate)
  console.log(lastMonthLastDay);

  for (let i = 1; i < firstDateOfWeek; i++) {
    if (calendarElements[i - 1].textContent === '') {
      calendarElements[i - 1].innerHTML = ((lastMonthLastDay) - (firstDateOfWeek - i)) + 1
    }
  }

  let dayCounter = 1;
  for (let i = 0; i < calendarElements.length; i++) {
    if (i === (firstDateOfWeek - 1)) {
      let currentDayOfWeek = i;
      for (let j = 1; j <= curentMonthLastDay; j++) {
        calendarElements[currentDayOfWeek].innerHTML = j;
        currentDayOfWeek++;
      }
      continue;
    }
  }

  for (let i = 0; i < calendarElements.length; i++) {
    if(calendarElements[i].textContent === ''){
      for (let j = 1; j < 15; j++) {
        calendarElements[i].innerHTML = j
        i++
      }
    }
    
  }

}

showMonth(currentMonth, currentYear)