import "./styles.css";

const { createHTML } = require("./components/html");
const { createColorGenerator } = require("./components/html");
const { addWinner } = require("./view/buttonWinner");
const { createFooter } = require("./components/footer");
const { getWinners } = require("./api");
const { renderCar } = require("./view/svgCar");
const { Button } = require("./components/button");
const { Input } = require("./components/input");
const { getRandomColor } = require("./components/createCar");
const { createCarName } = require("./components/createCar");
const { getCars } = require("./api");
const { getCar } = require("./api");
const { createCarApi } = require("./api");
const { deleteCarApi } = require("./api");
const { engineStart } = require("./api");
const { engineStop } = require("./api");
const { driveMode } = require("./api");

createHTML();
createFooter();
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

const mainGarage = <HTMLElement>document.querySelector(".main-garage");
const container = <HTMLElement>document.querySelector(".container");
const h1 = <HTMLElement>document.querySelector(".cars-count");
const create = <HTMLElement>document.querySelector(".create");
const next = <HTMLButtonElement>document.querySelector(".next");
const prev = <HTMLButtonElement>document.querySelector(".prev");
const generate = <HTMLButtonElement>document.querySelector(".generate");
const h3 = <HTMLElement>document.querySelector(".page-number");

let selectCar;
let pageNum = 1;
let isAnimation = false;
const baseUrl = "http://localhost:3000";
const garage = `${baseUrl}/garage`;

const setId = (value: number) => {
  idNum = value;
};

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

export const go = async (target: HTMLElement) => {
  target.classList.add("grey");
  const car = target.closest(".car-container");
  const carId = car?.id.slice(2) as string; // id
  setId(+carId);
  const stopBut = <HTMLButtonElement>document.getElementById(`stop-${idNum}`);
  stopBut.classList.remove("grey");
  const { velocity, distance } = await engineStart(+carId);
  const startTime = performance.now();
  const duration = distance / velocity;
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
};

export const stopGo = async (target: HTMLElement) => {
  target.classList.add("grey");
  isAnimation = false;
  const carStop = target.closest(".car-container");
  const idNumStop = carStop?.id.slice(2) as string;
  const carImgStop = <HTMLElement>document.querySelector(`.img-${+idNumStop}`);
  await engineStop(+idNumStop);
  carImgStop.style.transform = "translateX(0vw)";
  const startBut = <HTMLButtonElement>(
    document.getElementById(`start-${+idNumStop}`)
  );
  startBut.classList.remove("grey");
};

const setCount = (value: number) => {
  count = value;
};

export const getCarsForHTML = async (page: number, limit?: number) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const data = await response.json();
  const totalCount = Number(response.headers.get("X-Total-Count"));
  setCount(totalCount);
  h1.innerHTML = `Garage (${count})`;
  data.forEach((item: string, index: number) => {
    renderCar(data[index].id, data[index].name, data[index].color);
  });
};

export const getCarsForNext = async (page: number, limit?: number) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const data = await response.json();
  h1.innerHTML = `Garage (${count})`;
  data.forEach((item: string, index: number) => {
    renderCar(data[index].id, data[index].name, data[index].color);
  });
};

mainGarage.addEventListener("click", function changeNameAndColor(e: Event) {
  const target = e.target as HTMLElement;
  if (target.className === "remove") {
    const car = target.closest(".car-container");
    const nameRemId = car?.id.slice(2) as string;
    car?.remove();
    count -= 1;
    h1.innerHTML = `Garage (${count})`;
    selectCar = getCar(+nameRemId);
    deleteCarApi(+nameRemId);
    if (count % 7 === 0) {
      pageNum -= 1;
      container.innerHTML = "";
      h3.innerHTML = `Page #${pageNum}`;
      getCarsForNext(pageNum, 7);
    }
  }
});

create.addEventListener("click", function createCar() {
  if (count % 7 === 0) {
    container.innerHTML = "";
    pageNum += 1;
    h3.innerHTML = `Page #${pageNum}`;
    getCarsForNext(pageNum, 7);
  }
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
getCarsForHTML(1, 7);
getWinners();

next.addEventListener("click", function showNext() {
  pageNum += 1;
  container.innerHTML = "";
  h1.innerHTML = `Garage (${count})`;
  h3.innerHTML = `Page #${pageNum}`;
  getCarsForHTML(pageNum, 7);
});

prev.addEventListener("click", function showPrev() {
  if (pageNum === 1) return;
  pageNum -= 1;
  container.innerHTML = "";
  h3.innerHTML = `Page #${pageNum}`;
  getCarsForHTML(pageNum, 7);
});

function createOneHandredCars() {
  const wait = <HTMLElement>document.querySelector(".wait");
  wait.classList.remove("none");
  for (let i = 1; i <= 100; i += 1) {
    const carApi = {
      name: createCarName(),
      color: getRandomColor(),
      id: count + 1,
    };
    createCarApi(carApi);
    count += 1;
  }
  container.innerHTML = "";
  h3.innerHTML = `Page #${pageNum}`;
  getCarsForNext(pageNum, 7);
  setTimeout(function remove() {
    wait.classList.add("none");
  }, 10000);
}

generate.addEventListener("click", function create100() {
  createOneHandredCars();
});

export {};
