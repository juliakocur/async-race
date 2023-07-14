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

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  document.body.appendChild(footer);
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
