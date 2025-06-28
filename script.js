document.addEventListener('DOMContentLoaded', () => {
  const scrollArrow = document.getElementById('scroll-arrow');
  scrollArrow.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = scrollArrow.getAttribute('href');
  });
});
