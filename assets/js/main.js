// SCROLL TOP
window.addEventListener('scroll', function () {
  const scrollTopBtn = document.getElementById('scroll-top');
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});


document.getElementById('scroll-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});