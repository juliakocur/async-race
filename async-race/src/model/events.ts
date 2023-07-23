const mainWinners = <HTMLElement>document.querySelector(".main-winners");
const mainCreator = <HTMLElement>document.querySelector(".main-creator");
const mainGarage = <HTMLElement>document.querySelector(".main-garage");
const header = <HTMLElement>document.querySelector("header");
const footer = <HTMLElement>document.querySelector("footer");
header.addEventListener("click", function pageOpen(e: Event) {
  const target = e.target as HTMLElement;
  if (target.className === "garage") {
    mainWinners.classList.add("none");
    mainCreator.classList.remove("none");
    mainGarage.classList.remove("none");
    footer.classList.remove("none");
  }
  if (target.className === "winners") {
    mainWinners.classList.remove("none");
    mainCreator.classList.add("none");
    mainGarage.classList.add("none");
    footer.classList.add("none");
  }
});

const { go } = require("../app");
const { stopGo } = require("../app");
const { carImg } = require("../view/svgCar");
const { getCar } = require("../api");
const { updateCarApi } = require("../api");

const update = <HTMLElement>document.querySelector(".update");
let name: string[] = [];
let classN;
let selectCar;
mainGarage.addEventListener("click", function changeNameAndColor(e: Event) {
  const target = e.target as HTMLElement;
  if (target.className === "select") {
    name = [];
    const input = <HTMLInputElement>document.querySelector(".rename");
    classN = target.closest(".car-container");
    const nameId = classN?.id.slice(2) as string; // id
    name.push(nameId);
    console.log(name);
    const carClassName = <HTMLInputElement>(
      document.querySelector(`.name-${nameId}`)
    );
    const carName = carClassName.innerHTML;
    input.value = carName;
    const inputChangeColor = <HTMLInputElement>(
      document.querySelector(".input-color2")
    );
    const par = <HTMLElement>document.querySelector(`.par-${nameId}`);
    const parColor = par.textContent;
    inputChangeColor.value = `${parColor}`;
  }
  if (target.className === "car-start") {
    go(target);
  }
  if (target.className === "car-stop") {
    stopGo(target);
  }
});

update.addEventListener("click", function changesColor() {
  if (name === null || name === undefined || name.length === 0) return;
  const nameId = name.join();
  const input = <HTMLInputElement>document.querySelector(".rename");
  const carClassName = <HTMLInputElement>(
    document.querySelector(`.name-${nameId}`)
  );
  carClassName.innerHTML = input.value;
  const inputChangeColor = <HTMLInputElement>(
    document.querySelector(".input-color2")
  );
  const carImage = <HTMLElement>document.querySelector(`.img-${nameId}`);
  const inputValue = inputChangeColor.value;
  carImage.innerHTML = carImg(inputValue);

  const par = <HTMLElement>document.querySelector(`.par-${nameId}`);
  par.innerHTML = inputValue;

  selectCar = getCar(+nameId);
  selectCar.name = input.value;
  selectCar.color = inputChangeColor.value;
  inputChangeColor.value = "";
  input.value = "";
  updateCarApi(+nameId, selectCar);
  name = [];
});

export {};
