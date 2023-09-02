
const link = document.getElementById('clock-date')

link.addEventListener('click',()=>{
    currentMonth = defaultDate.getMonth();
    currentYear = defaultDate.getFullYear();
  showMonth(currentMonth, currentYear)
  showCurrentMontYear(currentMonth, currentYear)
  presentDayCheck(currentMonth,currentYear)
})