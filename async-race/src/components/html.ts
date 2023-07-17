export function createHTML() {
  const header = document.createElement("header");
  header.classList.add("header");
  document.body.appendChild(header);

  const main = document.createElement("main");
  main.classList.add("main");
  document.body.appendChild(main);

  const mainCreator = document.createElement("section");
  mainCreator.classList.add("main-creator");
  main.appendChild(mainCreator);

  const mainCreate = document.createElement("div");
  mainCreate.classList.add("main-create");
  mainCreator.appendChild(mainCreate);

  const mainUpdate = document.createElement("div");
  mainUpdate.classList.add("main-update");
  mainCreator.appendChild(mainUpdate);

  const mainGenerate = document.createElement("div");
  mainGenerate.classList.add("main-generate");
  mainCreator.appendChild(mainGenerate);

  const mainGarage = document.createElement("section");
  mainGarage.classList.add("main-garage");
  main.appendChild(mainGarage);

  const carsCount = document.createElement("h1");
  carsCount.classList.add("cars-count");
  mainGarage.appendChild(carsCount);
  carsCount.innerHTML = "Garage (4)";

  const pageNumber = document.createElement("h3");
  pageNumber.classList.add("page-number");
  mainGarage.appendChild(pageNumber);
  pageNumber.innerHTML = "Page #1";

  const mainWinners = document.createElement("section");
  mainWinners.classList.add("main-winners");
  mainWinners.classList.add("none");
  main.appendChild(mainWinners);

  const winnersCount = document.createElement("h1");
  winnersCount.classList.add("winners-count");
  mainWinners.appendChild(winnersCount);
  winnersCount.innerHTML = "Winners (1)";

  const pageNumberWin = document.createElement("h3");
  pageNumberWin.classList.add("page-number-win");
  mainWinners.appendChild(pageNumberWin);
  pageNumberWin.innerHTML = "Page #1";

  const winnerPanel = document.createElement("div");
  winnerPanel.classList.add("winner-panel");
  mainWinners.appendChild(winnerPanel);
  winnerPanel.innerHTML =
    "Number&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCar&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspName&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspWins&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBest&nbsptime(sec)";

  const winnerContainer = document.createElement("div");
  winnerContainer.classList.add("winner-container");
  mainWinners.appendChild(winnerContainer);
}

export function createColorGenerator() {
  const mainCreate = <HTMLElement>document.querySelector(".main-create");
  const mainUpdate = <HTMLElement>document.querySelector(".main-update");
  const setColor = document.createElement("div");
  setColor.classList.add("set-color");
  mainCreate.appendChild(setColor);

  const colors = document.createElement("div");
  colors.classList.add("colors");
  setColor.appendChild(colors);

  const inputColor = document.createElement("input");
  inputColor.classList.add("input-color");
  inputColor.setAttribute("type", "color");
  colors.appendChild(inputColor);

  const changeColor = document.createElement("div");
  changeColor.classList.add("change-color");
  mainUpdate.appendChild(changeColor);

  const colors2 = document.createElement("div");
  colors2.classList.add("colors2");
  changeColor.appendChild(colors2);

  const inputColor2 = document.createElement("input");
  inputColor2.classList.add("input-color2");
  inputColor2.setAttribute("type", "color");
  colors2.appendChild(inputColor2);
}
