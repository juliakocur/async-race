const { Button } = require("../components/button");

export function addWinner() {
  const mainWinners = <HTMLElement>document.querySelector(".main-winners");
  const winnerButton = document.createElement("div");
  winnerButton.classList.add("winner-button");
  mainWinners.appendChild(winnerButton);

  new Button("button", "win-prev", winnerButton, "PREV").createButton();
  new Button("button", "win-next", winnerButton, "NEXT").createButton();
}
