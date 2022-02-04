const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const ranNum = getRan();
  console.log(ranNum);
  document.body.style.backgroundColor = colors[ranNum];
  color.textContent = colors[ranNum];
});
function getRan() {
  return Math.floor(Math.random() * colors.length);
}
