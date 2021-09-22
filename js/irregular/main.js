// import config from "../../data/irregular.js";
import { searcher } from "./searcher.js";
// config=data    type=(true=eng, false=ger)
export const irregular = (config, type) => {
  const inputs = document.querySelectorAll(".form>input");
  const polish = document.getElementById("Polish");
  const streakInfo = document.getElementById("streak");
  const ifcorrect = document.querySelectorAll(".ifcorrect");

  const randomize = () => Math.floor(Math.random() * config.length);

  let streak = 0;
  streakInfo.textContent = streak;
  let random = randomize();
  let actual;
  let results;

  const loop = () => {
    results = type ? [false, false, false] : [false, false];
    random = randomize();
    actual = config[random];
    polish.textContent = actual[0];
    streakInfo.textContent = streak++;
  };

  loop();

  inputs[0].focus();

  for (let i = 0; i < inputs.length; i++) {
    let incorrect = 0;
    inputs[i].addEventListener("change", (e) => {
      if (e.target.value.toLowerCase() === actual[i + 1]) {
        results[i] = true;
        ifcorrect[i].textContent = "Correct";
        ifcorrect[i].style.color = "lightgreen";
        if (i < (type ? 2 : 1)) inputs[i + 1].focus();
        if (!results.includes(false)) {
          inputs.forEach((item) => (item.value = ""));
          inputs[0].focus();
          ifcorrect.forEach((item) => {
            item.textContent = "";
            item.style.color = "black";
          });
          loop();
        }
      } else {
        if (actual[i + 1].length > incorrect)
          ifcorrect[i].textContent += actual[i + 1][incorrect];
        incorrect++;
      }
    });
  }
  searcher(config);
};
