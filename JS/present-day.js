
presentDayCheck(defaultDate.getMonth(), defaultDate.getFullYear())
function presentDayCheck(month, year) {
  // console.log(month);
  // debugger
  let currentMonth = +defaultDate.getMonth();
  let currentYear = +defaultDate.getFullYear();
  calendarElements.forEach(li => {
    li.style.border = 'none';
  })
  // console.log(currentMonth);
  // console.log(calendarElements);
  if (month === currentMonth && year === currentYear) {
    let lastDay = null;
    for (let i = 0; i < calendarElements.length; i++) {
      // console.log(calendarElements[i].innerHTML);
      if (defaultDate.getDate() < 7 && calendarElements[i].innerHTML == defaultDate.getDate()) {
        // console.log(calendarElements);
        calendarElements[i].style.backgroundColor = 'rgb(0 120 215)'
        break
      }
      if (calendarElements[i].innerHTML == defaultDate.getDate()) {
        lastDay = calendarElements[i]
        console.log(lastDay);
      }
    }
    if (lastDay != null) {
      lastDay.style.backgroundColor = 'rgb(0 120 215)'
    }
  } else {
    calendarElements.forEach(li => {
      li.style.backgroundColor = 'transparent'
    })
  }
}
// export default presentDayCheck