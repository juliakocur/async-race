const { svgCar } = require("../view/svgCar");

function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}
