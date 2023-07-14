import "./styles.css";

const { createHTML } = require("./components/html");
const { createColorGenerator } = require("./components/html");
const { Button } = require("./components/button");
const { Input } = require("./components/input");

// const img = require("./assets/github.png");
// <img src=${img} alt="img">
/*
document.body.innerHTML = `
<img src=${img} alt="img">
`; */

createHTML();

setTimeout(function add() {
  createColorGenerator();
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
