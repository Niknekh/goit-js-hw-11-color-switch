const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  butStart: document.querySelector('[data-action="start"]'),
  butStop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId;
function interval() {
  intervalId = setInterval(
    () =>
      refs.body.setAttribute(
        "style",
        `background-color:${
          colors[randomIntegerFromInterval(0, colors.length)]
        }`
      ),
    1000
  );
}
refs.butStop.setAttribute("disabled", "true");
refs.butStart.addEventListener("click", () => {
  interval();
  refs.butStart.setAttribute("disabled", "true");
  refs.butStop.removeAttribute("disabled");
});
refs.butStop.addEventListener("click", () => {
  clearInterval(intervalId);
  refs.butStart.removeAttribute("disabled");
  refs.butStop.setAttribute("disabled", "true");
});
