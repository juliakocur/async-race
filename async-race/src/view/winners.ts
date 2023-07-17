const { carImg } = require("./svgCar");

export function showWinners(
  id: number,
  name: string,
  color: string,
  time: number,
) {
  const winnerContainer = <HTMLElement>(
    document.querySelector(".winner-container")
  );
  const count = 1;

  const winner = document.createElement("div");
  winner.classList.add("winner");
  winnerContainer.appendChild(winner);

  const carId = document.createElement("div");
  carId.innerHTML = `${id}`;
  const carImage = document.createElement("div");
  carImage.innerHTML = carImg(color);
  const carName = document.createElement("div");
  carName.innerHTML = `${name}`;
  const winsCount = document.createElement("div");
  winsCount.innerHTML = `${count}`;
  const bestTime = document.createElement("div");
  bestTime.innerHTML = `${time}`;

  winner.appendChild(carId);
  winner.appendChild(carImage);
  winner.appendChild(carName);
  winner.appendChild(winsCount);
  winner.appendChild(bestTime);
}
