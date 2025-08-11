
const carousel = document.getElementById('penCarousel');
const items = carousel.querySelectorAll('.pen-item');
let scrollTimeout;

function snapToNearestItem() {
  if (items.length === 0) return;

  const itemWidth = items[0].offsetWidth;
  const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
  const stepWidth = itemWidth + gap;

  const currentIndex = Math.round(carousel.scrollLeft / stepWidth);
  const targetScrollLeft = currentIndex * stepWidth;

  carousel.scrollTo({
    left: targetScrollLeft,
    behavior: 'smooth'
  });
}

carousel.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(snapToNearestItem, 150);
});

document.querySelector('.prev-button').addEventListener('click', () => {
  const itemWidth = items[0].offsetWidth;
  const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
  const stepWidth = itemWidth + gap;
  carousel.scrollBy({ left: -stepWidth, behavior: 'smooth' });
});

document.querySelector('.next-button').addEventListener('click', () => {
  const itemWidth = items[0].offsetWidth;
  const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
  const stepWidth = itemWidth + gap;
  carousel.scrollBy({ left: stepWidth, behavior: 'smooth' });
});
