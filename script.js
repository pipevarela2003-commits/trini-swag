// Include every tentative script when printing, then restore the reader's choices.
const scripts = [...document.querySelectorAll('.script')];
let previousState = [];
window.addEventListener('beforeprint', () => {
  previousState = scripts.map(section => section.open);
  scripts.forEach(section => { section.open = true; });
});
window.addEventListener('afterprint', () => {
  scripts.forEach((section, index) => { section.open = previousState[index] ?? false; });
});
