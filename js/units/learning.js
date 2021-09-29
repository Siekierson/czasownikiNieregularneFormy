export const learning = (config, unitNumber) => {
  const engH3 = document.querySelector(".eng");
  const plH3 = document.querySelector(".pl");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const tile = document.querySelector(".tile");
  const tileCopy = Array.from({ length: 5 }, () => ({
    isRunning: false,
    element: tile.cloneNode(true),
  }));
  tileCopy.forEach((item) => {
    // item.element = tile.cloneNode(true);
    document.body.appendChild(item.element);
    item.element.classList.add("copy");
  });
  console.log(tileCopy);
  let progress = 0;
  const loop = () => {
    engH3.textContent = config[progress][1];
    plH3.textContent = config[progress][0];
    tileCopy.forEach((item) => {
      item.element.childNodes[1].textContent = config[progress][1];
      item.element.childNodes[5].textContent = config[progress][0];
    });
    prevButton.style.display = progress === 0 ? "none" : "block";
  };
  loop();
  function changeTileStatus(tileIndex) {
    tileCopy[tileIndex].isRunning = true;
    tileCopy[tileIndex].element.classList.add("playAnimation");
    setTimeout(() => {
      tileCopy[tileIndex].isRunning = false;
      tileCopy[tileIndex].element.classList.remove("playAnimation");
    }, 1500);
  }
  nextButton.addEventListener("click", () => {
    progress += 1;
    if (!tileCopy[0].isRunning) changeTileStatus(0);
    else if (!tileCopy[1].isRunning) changeTileStatus(1);
    else if (!tileCopy[2].isRunning) changeTileStatus(2);
    else if (!tileCopy[3].isRunning) changeTileStatus(3);
    else changeTileStatus(4);
    loop();
  });
  prevButton.addEventListener("click", () => {
    progress -= 1;
    loop();
  });
};
