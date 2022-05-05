const refs = {
  startBt: document.querySelector('button[data-start]'),
  stopBt: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

let timerId = null;
refs.stopBt.setAttribute('disabled', 'disabled');
refs.startBt.addEventListener('click', () => {
  refs.startBt.setAttribute('disabled', 'disabled');
  refs.stopBt.removeAttribute('disabled', 'disabled');
  timerId = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.stopBt.addEventListener('click', () => {
  refs.startBt.removeAttribute('disabled', 'disabled');
  clearInterval(timerId);
});
