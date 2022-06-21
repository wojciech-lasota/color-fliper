const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //random number 0-3
  const randomNumber = getRandomNumber(colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const getRandomNumber = (top) => {
  return Math.floor(Math.random() * top);
};
