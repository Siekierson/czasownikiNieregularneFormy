export const units = (config, unitNumber) => {
  const localResultName = `result${unitNumber}`;
  const lsResult = JSON.parse(localStorage.getItem(localResultName));

  const results = lsResult !== null ? lsResult : [];
  if (results.length === 0) {
    config.forEach((item, index) => (results[index] = 0));
  }
  const h2 = document.querySelector("h2");
  const answerInput = document.getElementById("answer");
  const hint = document.getElementById("hint");
  const hintText = document.querySelector("h3");
  const statsButton = document.getElementById("stats");
  const statsContent = document.querySelector(".stats");
  let random;
  let actual;
  let statsDisplay = false;
  let resultProgress = 0;

  results.forEach((item) => {
    if (Math.max.apply(null, results) === 0) return;
    if (item === Math.max.apply(null, results)) resultProgress += 1;
  });
  // Math.max.apply(null, results)
  const randomize = () => Math.floor(Math.random() * config.length);
  const notKnownIndex = () => {
    let index = randomize();
    while (results[index] > Math.min.apply(null, results)) {
      index = randomize();
    }
    return index;
  };
  function changeProgressInfo() {
    statsContent.children[0].textContent = `Ilość wpisanych słówek w turze:${resultProgress}/${results.length}`;
  }
  const loop = () => {
    const a = notKnownIndex();
    random = a;
    actual = config[random];
    h2.textContent = actual[0];
    console.log(resultProgress);
    localStorage.setItem(localResultName, JSON.stringify(results));
    changeProgressInfo();
  };
  answerInput.focus();

  loop();

  //input service || check if correct
  answerInput.addEventListener("change", (e) => {
    const InnerLower = e.target.value.toLowerCase();
    if (
      InnerLower === actual[1].toLowerCase() ||
      InnerLower === actual[2].toLowerCase() ||
      InnerLower === actual[3].toLowerCase()
    ) {
      resultProgress += 1;
      results[random] += 1;
      answerInput.value = "";
      hintText.innerHTML = "";
      loop();
    }
  });

  //show hint
  hint.addEventListener("click", (e) => {
    const or = " lub ";
    hintText.innerHTML = `${actual[1]} ${
      actual[2] !== undefined
        ? actual[3] !== undefined
          ? or + actual[2] + or + actual[3]
          : or + actual[2]
        : ""
    }`;
  });

  //remove progress in localstorage
  statsContent.children[1].addEventListener("click", () => {
    localStorage.removeItem(localResultName);
    resultProgress = 0;
    changeProgressInfo();
  });

  //show stats section
  statsButton.addEventListener("click", () => {
    statsContent.style.display = statsDisplay ? "block" : "none";
    statsDisplay = !statsDisplay;
  });
};
