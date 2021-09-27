export const learning = (config, unitNumber) => {
  const engH3 = document.querySelector(".eng");
  const plH3 = document.querySelector(".pl");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let progress = 0;
  const loop = () => {
    console.log(config[progress][1]);
    console.log(progress);
    engH3.textContent = config[progress][1];
    plH3.textContent = config[progress][0];
    prevButton.style.display = progress === 0 ? "none" : "block";
  };
  loop();
  nextButton.addEventListener("click", () => {
    progress += 1;
    loop();
  });
  prevButton.addEventListener("click", () => {
    progress -= 1;

    loop();
  });
};
