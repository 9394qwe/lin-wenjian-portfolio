const comparisonPanel = document.querySelector('.comparison-panel');
const comparisonStage = comparisonPanel.querySelector('.comparison');
const comparisonRange = comparisonStage.querySelector('input');
const comparisonPresets = comparisonPanel.querySelectorAll('[data-compare-value]');

function updateComparisonView() {
  const value = Number(comparisonRange.value);
  comparisonStage.dataset.view = value === 100 ? 'old' : value === 0 ? 'new' : 'compare';
  comparisonRange.setAttribute('aria-valuetext', `左侧旧版 ${value}%，右侧新版 ${100 - value}%`);
  comparisonPresets.forEach(button => {
    button.setAttribute('aria-pressed', String(Number(button.dataset.compareValue) === value));
  });
}
comparisonPresets.forEach(button => {
  button.addEventListener('click', () => {
    comparisonRange.value = button.dataset.compareValue;
    comparisonRange.dispatchEvent(new Event('input', { bubbles: true }));
  });
});
comparisonRange.addEventListener('input', updateComparisonView);
updateComparisonView();
