const wanchuanghuiStudy = document.querySelector('.wanchuanghui-study');
document.querySelectorAll('[data-open-wanchuanghui]').forEach(button => {
  button.addEventListener('click', () => {
    wanchuanghuiStudy.showModal();
    wanchuanghuiStudy.scrollTop = 0;
  });
});
wanchuanghuiStudy.querySelectorAll('[data-close-wanchuanghui]').forEach(button => {
  button.addEventListener('click', () => wanchuanghuiStudy.close());
});
wanchuanghuiStudy.addEventListener('click', event => {
  if (event.target === wanchuanghuiStudy) wanchuanghuiStudy.close();
});
wanchuanghuiStudy.querySelectorAll('[data-editorial-zoom]').forEach(button => {
  button.addEventListener('click', () => window.openPortfolioZoom(button.dataset.editorialZoom, button.querySelector('img').alt));
});
wanchuanghuiStudy.querySelectorAll('[data-wc-section]').forEach(button => {
  button.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    wanchuanghuiStudy.querySelector(`#${button.dataset.wcSection}`).scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
  });
});
document.querySelectorAll('[data-aicon-chapter]').forEach(button => {
  button.addEventListener('click', () => {
    openAiconStudy();
    document.getElementById(button.dataset.aiconChapter).scrollIntoView({ behavior: 'instant', block: 'start' });
    updateStudyProgress();
  });
});
