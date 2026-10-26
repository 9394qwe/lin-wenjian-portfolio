const beautyStudy = document.querySelector('.beauty-study');
document.querySelectorAll('[data-open-beauty]').forEach(button => {
  button.addEventListener('click', () => {
    beautyStudy.showModal();
    beautyStudy.scrollTop = 0;
  });
});
beautyStudy.querySelectorAll('[data-close-beauty]').forEach(button => {
  button.addEventListener('click', () => beautyStudy.close());
});
beautyStudy.addEventListener('click', event => {
  if (event.target === beautyStudy) beautyStudy.close();
});
beautyStudy.querySelectorAll('[data-beauty-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    window.openPortfolioZoom(button.dataset.beautyZoom, button.querySelector('img').alt);
  });
});
