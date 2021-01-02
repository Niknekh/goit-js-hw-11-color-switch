const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const ref = {
    body: document.querySelector('body'),
    start: document.querySelector('[data-action="start"]'),
    stop: document.querySelector('[data-action="stop"]')
};

const colorChanger = {
  turnOn: false,
  intervalId: null,
  on() {
    if (this.turnOn) {
      return
    }
    ref.start.setAttribute('disabled', true);
    this.turnOn = true;
    this.intervalId = setInterval(() => ref.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)], 1000)
  },
  off() {
    this.turnOn = false;
    clearInterval(this.intervalId);
    ref.start.removeAttribute('disabled');
  }
};

ref.start.addEventListener("click", colorChanger.on.bind(colorChanger));
ref.stop.addEventListener("click", colorChanger.off.bind(colorChanger));