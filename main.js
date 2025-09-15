const cardTemplate = document.querySelector(".demoCard");
const cardsContainer = document.querySelector(".cardsContainer");

const colorList = [
  "orange",
  "lightsalmon",
  "lightgreen",
  "orangered",
  "lightblue",
  "lightpink",
  "lightseagreen",
];
for (let i = 0; i <= 6; i++) {
  const clone = cardTemplate.cloneNode(true);
  clone.classList.remove("demoCard");

  const bg = clone.querySelector(".projectSS");
  const color = colorList[i];
  bg.style.backgroundColor = color;
  clone.style.outline = `1px solid ${color}`;
  cardsContainer.appendChild(clone);
}
