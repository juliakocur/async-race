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

// const img = require("./assets/github.png");
// <img src=${img} alt="img">
/*
document.body.innerHTML = `
<img src=${img} alt="img">
`; */

createHTML();
createFooter();
renderCar(1, "tesla", "#e6e6fa");
renderCar(2, "BMW", "#fede00");
renderCar(3, "Mersedes", "#6c779f");
renderCar(4, "Ford", "#ef3c40");
showWinners(1, "tesla", "#fede00", 10);

setTimeout(function add() {
  createColorGenerator();
  addWinner();
}, 0);

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

/*
const baseUrl = "http://localhost:3000";
const path = {
  garage: "/garage",
  winners: "/winners",
};

([{key:'_page', value: 0}, {key: '_limit', value: 1}]);
export const generateQueryString = (queryParams: []) => queryParams.length
  ? `?${queryParams.map(el => `${el.key}=${el.value}`).join('&')}`
  : '';

const getCars = async () => {
  const response = await fetch(`${baseUrl}${path.garage}`);
  const data = await response.json();
  // text если не complication
  console.log(data);
};

getCars();
*/

const mainWinners = <HTMLElement>document.querySelector(".main-winners");
const mainCreator = <HTMLElement>document.querySelector(".main-creator");
const mainGarage = <HTMLElement>document.querySelector(".main-garage");
const h1 = <HTMLElement>document.querySelector(".cars-count");

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

let idCount = 4;
let name: string[] = [];
let classN;
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
    car?.remove();
    idCount -= 1;
    h1.innerHTML = `Garage (${idCount})`;
  }
});

const update = <HTMLElement>document.querySelector(".update");
update.addEventListener("click", function changesColor() {
  if (name === null || name === undefined || name.length === 0) return;
  const nameId = name.join();
  console.log(nameId);
  const inputChangeColor = <HTMLInputElement>(
    document.querySelector(".input-color2")
  );
  name = [];
  const input = <HTMLInputElement>document.querySelector(".rename");
  const carClassName = <HTMLInputElement>(
    document.querySelector(`.name-${nameId}`)
  );
  carClassName.innerHTML = input.value;
  input.value = "";
  const carImage = <HTMLElement>document.querySelector(`.img-${nameId}`);
  const inputValue = inputChangeColor.value;
  inputChangeColor.value = "";
  carImage.innerHTML = carImg(inputValue);
});

const create = <HTMLElement>document.querySelector(".create");
create.addEventListener("click", function createCar() {
  const input = <HTMLInputElement>document.querySelector(".model");
  const nameInp = input.value;
  console.log(nameInp);
  const inputColor = <HTMLInputElement>document.querySelector(".input-color");
  const colorInp = inputColor.value;
  console.log(colorInp);
  idCount += 1;
  h1.innerHTML = `Garage (${idCount})`;
  renderCar(idCount, nameInp, colorInp);
});
