const block = document.querySelector(".shedule-day-grid");
const calendar = document.querySelector('.calendar')
const circle = document.createElement("li");
circle.classList.add("circle");
block.appendChild(circle);
// block.append(circle)
// console.log(calendar.offsetWidth);
block.addEventListener("mousemove", (e) => {
  const windowWidth = window.innerWidth;
  const calendarWidth = calendar.offsetWidth
  const x = e.clientX - block.offsetLeft;
  const y = e.clientY - block.offsetTop;
  // console.log(x + (calendarWidth - (windowWidth / 2)));
  circle.style.left = `${(x - (calendarWidth - (windowWidth / 2))+150)}px`; 
  circle.style.top = `${y + 330}px`;
});

block.addEventListener("mouseenter", () => {
  circle.innerHTML = '';
  circle.style.display = "block";
});

block.addEventListener("mouseleave", () => {
  circle.style.display = "none";
});