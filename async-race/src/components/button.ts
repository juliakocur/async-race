export class Button {
  tag: string;

  class: string;

  par: HTMLElement;

  text: string;

  constructor(
    tagName: string,
    className: string,
    parent: HTMLElement,
    name: string,
  ) {
    this.tag = tagName;
    this.class = className;
    this.par = parent;
    this.text = name;
  }

  createButton() {
    const button = document.createElement(this.tag);
    button.classList.add(this.class);
    button.textContent = this.text;
    this.par.appendChild(button);
  }
}
