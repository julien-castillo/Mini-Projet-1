const panels = document.querySelectorAll(".container > *");

for (let panel of panels) {
    panel.addEventListener('click', function() {
        panels.forEach(p =>p.classList.remove('active'));
        panel.classList.add('active');
    });
};

const panelDiv = document.createElement('div');

panelDiv.style = "background-image: url(/img/explore-the-world.jpg)";
panelDiv.className = "panel active";

document.querySelector('.container').appendChild(panelDiv);