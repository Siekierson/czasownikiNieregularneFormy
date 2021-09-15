export const searcher = (config) => {
  const input = document.querySelector("#search>input");
  const result = document.querySelector(".result");
  input.addEventListener("change", (e) => {
    const res = config.filter((item) => item.includes(e.target.value));
    if (res.length > 0) {
      result.innerHTML = `
    <div>
    1st form (infinitive): ${res[0][1]}<br>
    2nd form (past tense): ${res[0][2]}<br>
    3rd form (past participle): ${res[0][3]}<br>
    polish: ${res[0][0]}
    </div>
`;
    }
  });
};
