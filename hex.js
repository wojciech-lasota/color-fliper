const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const randomBtn = document.getElementById("randomBtn");
let randomId;
const stopBtn = document.getElementById("stopBtn");
const color = document.querySelector(".color");

const getRandomNumber = (top) => {
  return Math.floor(Math.random() * top);
};
function randomColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber(hex.length)];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}
btn.addEventListener("click", function () {
  randomColor();
});
// function random() {
//   randomBtn.disabled = true;
//   randomBtn.style.backgroundColor = "#000";
//   randomBtn.style.color = "#fff";
//   randomId = setInterval(randomColor, 250);
// }
randomBtn.addEventListener(
  "click",
  (random = () => {
    randomBtn.disabled = true;
    randomBtn.style.cursor = "not-allowed";
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    randomBtn.style.backgroundColor = "#000";
    btn.style.backgroundColor = "#000";
    randomBtn.style.color = "#fff";
    btn.style.color = "#fff";
    randomId = setInterval(randomColor, 250);
  })
);
stopBtn.addEventListener("click", () => {
  clearInterval(randomId);
  randomBtn.disabled = false;
  randomBtn.style.cursor = "pointer";
  btn.disabled = false;
  randomBtn.style.cursor = "pointer";
  randomBtn.style.backgroundColor = "transparent";
  btn.style.backgroundColor = "transparent";
  randomBtn.style.color = "#222";
  btn.style.color = "#222";
});
