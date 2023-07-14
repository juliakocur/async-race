export class Input {
  tag: string;

  att: string;

  class: string;

  par: HTMLElement;

  constructor(
    tagName: string,
    className: string,
    parent: HTMLElement,
    attribute: string,
  ) {
    this.tag = tagName;
    this.class = className;
    this.par = parent;
    this.att = attribute;
  }

  createInput() {
    const input = document.createElement(this.tag);
    input.classList.add(this.class);
    input.setAttribute("type", this.att);
    this.par.appendChild(input);
  }
}
