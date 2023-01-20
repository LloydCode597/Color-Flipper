const colors = [
  "green",
  "red",
  "blue",
  "rgba(133,122,200)",
  "#f15025",
  "#417505",
  "#000000",
  "#FBE71C",
  "rgba(137,87,42)",
  "rgba(74,74,74)",
  "#50E3C2",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 - 4.
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
