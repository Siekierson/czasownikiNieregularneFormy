import config from "../../data/unit7.js";

const results = [2, 2, 2, 2, 2, 2, 2, 1, 2, 1];
// config.forEach((item, index) => (results[index] = 0));

const h2 = document.querySelector("h2");
const input = document.querySelector("input");
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
};
input.focus();

loop();
input.addEventListener("change", (e) => {
  const InnerLower = e.target.value.toLowerCase();
  if (InnerLower === actual[1] || InnerLower === actual[2]) {
    results[random] += 1;
    input.value = "";

    loop();
  }
});
