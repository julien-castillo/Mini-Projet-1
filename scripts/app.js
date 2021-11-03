const images = [
  "city-on-winter",
  "explore-the-world",
  "mountains-and-clouds",
  "sunny-beach",
  "wild-forest",
];

for (let image of images) {
  const panel = createPanel(image);
  panel.addEventListener("click", function () {
    // panels.forEach(p =>p.classList.remove('active'));
    panel.classList.add("active");
  });
}

function createPanel(img) {
  const panelDiv = document.createElement("div");

  panelDiv.style = "background-image: url(img/" + img + ".jpg)";
  panelDiv.className = "panel";
  panelDiv.innerHTML = "<h3>MON TITRE</3>";

  document.querySelector(".container").appendChild(panelDiv);
  return panelDiv;
}
