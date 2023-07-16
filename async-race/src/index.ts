import "./styles.css";

const { createHTML } = require("./components/html");
const { createColorGenerator } = require("./components/html");
const { createFooter } = require("./components/footer");
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
renderCar(1, "tesla", "#fede00");

setTimeout(function add() {
  createColorGenerator();
}, 0);

const header = <HTMLElement>document.querySelector("header");
const footer = <HTMLElement>document.querySelector("footer");
const mainCreate = <HTMLElement>document.querySelector(".main-create");
const mainUpdate = <HTMLElement>document.querySelector(".main-update");
const mainGenerate = <HTMLElement>document.querySelector(".main-generate");
const mainWinners = <HTMLElement>document.querySelector(".main-winners");
const mainCreator = <HTMLElement>document.querySelector(".main-creator");
const mainGarage = <HTMLElement>document.querySelector(".main-garage");

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
