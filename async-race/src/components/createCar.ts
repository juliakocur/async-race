const { renderCar } = require("../view/svgCar");

export function getRandomColor() {
  const letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i += 1) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getName(): string {
  const NameArray: string[] = [
    "Suzuki",
    "Hummer",
    "Reno",
    "Audi",
    "BMW",
    "KIA",
    "Opel",
    "FIAT",
    "Ferrari",
    "Tesla",
    "Jaguar",
    "Skoda",
  ];
  return NameArray[Math.floor(Math.random() * NameArray.length)];
}

function getModel(): string {
  const CarArray: string[] = [
    " Vectra",
    " Filicia",
    " K1",
    " Q3",
    " I7",
    " Focus",
    " Corsa",
    " 312",
    " Patrol",
    " C3",
    " Roadster",
    " Semi",
  ];
  return CarArray[Math.floor(Math.random() * CarArray.length)];
}

export function createCarName(): string {
  return getName() + getModel();
}
