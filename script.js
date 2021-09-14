const form = document.querySelector("#form");
form.addEventListener("submit", calcImc);

function calcImc(cancela) {
  // IMC
  cancela.preventDefault();
  const peso = form.querySelector("#peso");
  const altura = form.querySelector("#altura");
  const resultado = form.querySelector("#resultado");
  horario();

  const imc = peso.value / (altura.value * altura.value);
  if (imc <= 18.5) {
    resultado.innerHTML = `[IMC: ${imc}] \n Você está abaixo do peso`;
  } else if (imc >= 18.6 && imc <= 24.9) {
    resultado.innerHTML = `[IMC: ${imc}] \n Você está com peso normal`;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado.innerHTML = `[IMC: ${imc}] \n Você está com sobrepeso`;
  } else if (imc >= 30 && imc <= 34.9) {
    resultado.innerHTML = `[IMC: ${imc}] \n Obesidade grau 1`;
  } else if (imc >= 35 && imc <= 39.9) {
    resultado.innerHTML = `[IMC: ${imc}] \n Obesidade grau 1`;
  } else if (imc >= 40) {
    resultado.innerHTML = `[IMC: ${imc}] \n Obesidade mórbida`;
  } else {
    resultado.innerHTML = `Você precisa selecionar um valor`;
  }
  // IMC
}
