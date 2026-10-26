document.querySelectorAll('[data-open-exhibition]').forEach(button => {
  button.addEventListener('click', () => {
    openAiconStudy();
    document.querySelector('#case-exhibition').scrollIntoView({ behavior: 'instant', block: 'start' });
    updateStudyProgress();
  });
});
document.querySelectorAll('[data-exhibition-zoom]').forEach(button => {
  button.addEventListener('click', () => {
    window.openPortfolioZoom(button.dataset.exhibitionZoom, button.querySelector('img').alt);
  });
});
