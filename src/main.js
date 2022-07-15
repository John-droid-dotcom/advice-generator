const num = document.querySelector(".advice-num");
const advice = document.querySelector(".advice");
const diceRoller = document.querySelector(".dice-container");
const api_url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(api_url);
  const data = await response.json();
  advice.textContent = '"' + data.slip.advice + '"';
  num.textContent = "ADVICE #" + data.slip.id;
  console.log(data.slip.id);
}

getAdvice();

diceRoller.addEventListener("click", async function getAdvice() {
  const response = await fetch(api_url);
  const data = await response.json();
  advice.textContent = '"' + data.slip.advice + '"';
  num.textContent = "ADVICE #" + data.slip.id;
  console.log(data.slip.id);
});
