export class Panel {
  constructor(title = "no title") {
    const div = this.html = document.createElement("div");
    this.initialize(div, title);
  }

  initialize(div, title) {
    // div.style = "background-image: url(img/" + img + ".jpg)";
    div.style = "background-image: url(img/city-on-winter.jpg)";
    div.className = "panel";
    div.innerHTML = "<h3>" + title + "</3>";
  }

  render() {
    document
      .querySelector(".container")
      .appendChild(this.html);
  }
}
