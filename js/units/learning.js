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

  let progress = 0;
  const loop = () => {
    if (progress === config.length ) progress = 0;
    prevButton.style.display = progress === 0 ? "none" : "block";
    engH3.textContent = config[progress][1];
    plH3.textContent = config[progress][0];
    tileCopy.forEach((item) => {
      const prev = progress === 0 ? 0 : progress - 1;
      item.element.childNodes[1].textContent = config[prev][1];
      item.element.childNodes[5].textContent = config[prev][0];
    });
  };
  loop();
  function changeTileStatus(tileIndex, variant) {
    const choosenTile = tileCopy[tileIndex];
    choosenTile.isRunning = true;
    choosenTile.element.classList.add(`${variant}Animation`);
    choosenTile.element.childNodes[7].childNodes[1].style.display =
      progress === 0 ? "none" : "block";
    setTimeout(
      () => {
        choosenTile.isRunning = false;
        choosenTile.element.classList.remove(`${variant}Animation`);
      },
      variant === "prev" ? 1000 : 1500
    );
  }
  function getNotActiveTile(variant) {
    if (!tileCopy[0].isRunning) changeTileStatus(0, variant);
    else if (!tileCopy[1].isRunning) changeTileStatus(1, variant);
    else if (!tileCopy[2].isRunning) changeTileStatus(2, variant);
    else if (!tileCopy[3].isRunning) changeTileStatus(3, variant);
    else changeTileStatus(4, variant);
  }
  nextButton.addEventListener("click", () => {
    progress += 1;
    getNotActiveTile("next");
    loop();
  });
  prevButton.addEventListener("click", () => {
    progress -= 1;
    prevButton.disabled = true;
    getNotActiveTile("prev");
    setTimeout(() => {
      prevButton.disabled = false;
      loop();
    }, 1000);
  });
};
