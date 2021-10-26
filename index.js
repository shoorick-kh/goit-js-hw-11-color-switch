const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');
let timerId = null;

const onClickStart = () => {
  timerId = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomColor = randomIntegerFromInterval(1, colors.length);

    bodyRef.style.backgroundColor = colors[randomColor];
  }, 1000);
  startRef.disabled = true;
};

const onClickStop = () => {
  clearInterval(timerId);
  startRef.disabled = false;
};

startRef.addEventListener('click', onClickStart);
stopRef.addEventListener('click', onClickStop);
