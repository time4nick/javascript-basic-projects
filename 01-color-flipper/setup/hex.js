const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 1; i < 7; i++) {
    hexColor += hex[randum()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function randum() {
  return Math.floor(Math.random() * 15);
}
