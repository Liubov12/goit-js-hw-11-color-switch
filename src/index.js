
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const refs = {
  body: document.body,
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
}
console.dir(refs)

const INTERVAL_DELAY = 1000;
 let timerId = null;

   refs.btnStart.addEventListener('click', changeColor);
   refs.btnStop.addEventListener('click', onBtnStop);
     
   const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  function changeColor() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, INTERVAL_DELAY);
    refs.btnStart.disabled = true;
};

function onBtnStop() {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
}