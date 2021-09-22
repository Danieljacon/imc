const form = document.querySelector("#form");
form.addEventListener("submit", calcImc);

function calcImc(cancela) {
  // IMC
  cancela.preventDefault();
  const peso = form.querySelector("#peso");
  const altura = form.querySelector("#altura");
  const resultado = form.querySelector("#resultado");
  const imcResult = form.querySelector("#imc-result");

  const imc = Math.round(peso.value / (altura.value * altura.value));
  if (imc <= 18.5) {
    resultado.innerHTML = ` Você está abaixo do peso`;
    removeClasse();
    addNewClass("mag");
  } else if (imc >= 18.6 && imc <= 24.9) {
    resultado.innerHTML = ` Você está com peso normal`;
    removeClasse();
    addNewClass("nor");
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = ` Você está com sobrepeso`;
    removeClasse();
    addNewClass("sob1");
  } else if (imc >= 30 && imc <= 39.9) {
    resultado.innerHTML = ` Obesidade grau 1`;
    removeClasse();
    addNewClass("sob2");
  } else if (imc >= 40) {
    resultado.innerHTML = `Obesidade mórbida`;
    removeClasse();
    addNewClass("sob3");
  } else {
    resultado.innerHTML = `Você precisa selecionar um valor`;
    removeClasse();
  }
  // IMC
  imcResult.innerHTML = `IMC: ${imc}`;
}

function removeClasse() {
  const teste = ["mag", "nor", "sob1", "sob2", "sob3"];
  for (i = 0; i < teste.length; i++) {
    teste[i] = document.getElementById(`${teste[i]}`);
    teste[i].classList.remove("changeColor");
  }
}

function addNewClass(idTag) {
  let catchId = document.getElementById(idTag);
  return catchId.classList.add("changeColor");
}
