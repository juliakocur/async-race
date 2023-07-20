import "./styles.css";

const { createHTML } = require("./components/html");
const { createColorGenerator } = require("./components/html");
const { carImg } = require("./view/svgCar");
const { addWinner } = require("./view/buttonWinner");
const { createFooter } = require("./components/footer");
const { showWinners } = require("./view/winners");
const { renderCar } = require("./view/svgCar");
const { Button } = require("./components/button");
const { Input } = require("./components/input");
const { getCars } = require("./api");
const { getCar } = require("./api");
const { createCarApi } = require("./api");
const { updateCarApi } = require("./api");
const { deleteCarApi } = require("./api");
const { engineStart } = require("./api");
const { engineStop } = require("./api");
const { driveMode } = require("./api");
// const { getCarsForHTML } = require("./api");
// const { count } = require("./api");
// const img = require("./assets/github.png");
// <img src=${img} alt="img">
/*
document.body.innerHTML = `
<img src=${img} alt="img">
`; */

createHTML();
createFooter();
// showWinners(1, "Mersedes", "#6c779f", 1, 10);
setTimeout(function add() {
  createColorGenerator();
  addWinner();
}, 0);
let count: number;
let idNum: number;
const header = <HTMLElement>document.querySelector("header");
const footer = <HTMLElement>document.querySelector("footer");
const mainCreate = <HTMLElement>document.querySelector(".main-create");
const mainUpdate = <HTMLElement>document.querySelector(".main-update");
const mainGenerate = <HTMLElement>document.querySelector(".main-generate");

new Input("input", "model", mainCreate, "text").createInput();
new Input("input", "rename", mainUpdate, "text").createInput();

new Button("button", "garage", header, "TO GARAGE").createButton();
new Button("button", "winners", header, "TO WINNERS").createButton();
new Button("button", "prev", footer, "PREV").createButton();
new Button("button", "next", footer, "NEXT").createButton();
new Button("button", "create", mainCreate, "CREATE").createButton();
new Button("button", "update", mainUpdate, "UPDATE").createButton();
new Button("button", "race", mainGenerate, "RACE").createButton();
new Button("button", "reset", mainGenerate, "RESET").createButton();
new Button("button", "generate", mainGenerate, "GENERATE CARS").createButton();

const mainWinners = <HTMLElement>document.querySelector(".main-winners");
const mainCreator = <HTMLElement>document.querySelector(".main-creator");
const mainGarage = <HTMLElement>document.querySelector(".main-garage");
const h1 = <HTMLElement>document.querySelector(".cars-count");
const update = <HTMLElement>document.querySelector(".update");
const create = <HTMLElement>document.querySelector(".create");
let selectCar;
let name: string[] = [];
let classN;
const baseUrl = "http://localhost:3000";
const garage = `${baseUrl}/garage`;
const winners = `${baseUrl}/winners`;

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

const setId = (value: number) => {
  idNum = value;
};
let isAnimation = false;
function animate(startTime: number, duration: number) {
  const carGo = <HTMLElement>document.querySelector(`.img-${idNum}`);
  if (!isAnimation) return;
  const start = performance.now();
  const progress = (start - startTime) / duration;
  carGo.style.transform = `translateX(${progress * 77}vw)`;
  if (progress < 1) {
    requestAnimationFrame(() => animate(startTime, duration));
  }
}
async function go(target: HTMLElement) {
  target.classList.add("grey");
  const car = target.closest(".car-container");
  const carId = car?.id.slice(2) as string; // id
  const carGo = <HTMLElement>document.querySelector(`.img-${+carId}`);
  setId(+carId);
  const stopBut = <HTMLButtonElement>document.getElementById(`stop-${idNum}`);
  stopBut.classList.remove("grey");
  const { velocity, distance } = await engineStart(+carId);
  const startTime = performance.now();
  const duration = distance / velocity;
  console.log(startTime, duration);
  driveMode(+carId)
    .then()
    .catch((error: string) => {
      isAnimation = false;
      console.error(error);
    });
  isAnimation = true;
  requestAnimationFrame(() => {
    animate(startTime, duration);
  });
}
mainGarage.addEventListener("click", function changeNameAndColor(e: Event) {
  const target = e.target as HTMLElement;
  if (target.className === "select") {
    name = [];
    const input = <HTMLInputElement>document.querySelector(".rename");
    classN = target.closest(".car-container");
    const nameId = classN?.id.slice(2) as string; // id
    name.push(nameId);
    const carClassName = <HTMLInputElement>(
      document.querySelector(`.name-${nameId}`)
    );
    const carName = carClassName.innerHTML;
    input.value = carName;
  }
  if (target.className === "remove") {
    const car = target.closest(".car-container");
    const nameRemId = car?.id.slice(2) as string; // id
    car?.remove();
    count -= 1;
    h1.innerHTML = `Garage (${count})`;
    selectCar = getCar(+nameRemId);
    deleteCarApi(+nameRemId);
  }
  if (target.className === "car-start") {
    go(target);
  }
});

update.addEventListener("click", function changesColor() {
  if (name === null || name === undefined || name.length === 0) return;
  const nameId = name.join();
  const inputChangeColor = <HTMLInputElement>(
    document.querySelector(".input-color2")
  );
  const input = <HTMLInputElement>document.querySelector(".rename");
  const carClassName = <HTMLInputElement>(
    document.querySelector(`.name-${nameId}`)
  );
  carClassName.innerHTML = input.value;

  const carImage = <HTMLElement>document.querySelector(`.img-${nameId}`);
  const inputValue = inputChangeColor.value;
  carImage.innerHTML = carImg(inputValue);

  selectCar = getCar(+nameId);
  selectCar.name = input.value;
  selectCar.color = inputChangeColor.value;
  inputChangeColor.value = "";
  input.value = "";
  updateCarApi(+nameId, selectCar);
  name = [];
});

create.addEventListener("click", function createCar() {
  const input = <HTMLInputElement>document.querySelector(".model");
  const nameInp = input.value;
  const inputColor = <HTMLInputElement>document.querySelector(".input-color");
  const colorInp = inputColor.value;
  count += 1;
  h1.innerHTML = `Garage (${count})`;
  renderCar(count, nameInp, colorInp);
  const carApi = {
    name: nameInp,
    color: colorInp,
    id: count,
  };
  createCarApi(carApi);
});

getCars();

const setCount = (value: number) => {
  count = value;
};

export const getCarsForHTML = async () => {
  const response = await fetch(`${garage}`);
  const data = await response.json();
  setCount(data.length);
  h1.innerHTML = `Garage (${count})`;
  data.forEach((item: string, index: number) => {
    renderCar(data[index].id, data[index].name, data[index].color);
  });
};

getCarsForHTML();

const getWinners = async () => {
  const response = await fetch(`${winners}`);
  const data = await response.json();
  console.log(data);
  data.forEach((item: string, index: number) => {
    showWinners(
      data[index].id,
      "Tesla",
      "#e6e6fa",
      data[index].wins,
      data[index].time,
    );
  });
};

getWinners();
