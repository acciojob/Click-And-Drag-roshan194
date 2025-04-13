// script.js

const slider = document.querySelector('.items');

let isDragging = false;
let startX;
let scrollStart;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  slider.classList.add('active');
  startX = e.pageX;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const deltaX = e.pageX - startX;
  slider.scrollLeft = scrollStart - deltaX;
});
