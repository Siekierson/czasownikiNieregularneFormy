import config from "../../data/unit7.js";

// const results = [2, 2, 2, 2, 2, 2, 2, 1, 2, 1];
const results = [];
config.forEach((item, index) => (results[index] = 0));

const h2 = document.querySelector("h2");
const answerInput = document.getElementById("answer");
const hint = document.getElementById("hint");
const hintText = document.querySelector("h3");
let random;
let actual;
// Math.max.apply(null, results)
const randomize = () => Math.floor(Math.random() * config.length);
const notKnownIndex = () => {
  let index = randomize();
  while (results[index] > Math.min.apply(null, results)) {
    index = randomize();
  }
  return index;
};
const loop = () => {
  const a = notKnownIndex();
  random = a;
  actual = config[random];
  h2.textContent = actual[0];
  // console.log(actual);
};
answerInput.focus();

loop();
answerInput.addEventListener("change", (e) => {
  const InnerLower = e.target.value.toLowerCase();
  if (
    InnerLower === actual[1] ||
    InnerLower === actual[2] ||
    InnerLower === actual[3]
  ) {
    results[random] += 1;
    answerInput.value = "";
    hintText.innerHTML = "";
    loop();
  }
});
hint.addEventListener("click", (e) => {
  const or = " lub ";
  hintText.innerHTML = `${actual[1]} ${
    actual[2] !== undefined
      ? actual[3] !== undefined
        ? " lub " + actual[2] + " lub " + actual[3]
        : " lub " + actual[2]
      : ""
  }`;
});
