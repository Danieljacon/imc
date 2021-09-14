

const form = document.querySelector("#form");
form.addEventListener("submit", calcImc);

function calcImc(cancela) {

  //// HORARIO /////
  let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let semana = data.getDay();
    let hora = data.getHours();
    let min = data.getMinutes();


  if (dia < 10) {
    dia = `0${data.getDate()}`;
  }


  if (mes === 0) {
    mes = 'Janeiro';
  } else if (mes === 1) {
    mes = 'Fevereiro';
  } else if (mes === 2) {
    mes = 'Março';
  } else if (mes === 3) {
    mes = 'Abril';
  } else if (mes === 4) {
    mes = 'Maio';
  } else if (mes === 5) {
    mes = 'Junho';
  } else if (mes === 6) {
    mes = 'Julho';
  } else if (mes === 7) {
    mes = 'Agosto';
  } else if (mes === 8) {
    mes = 'Setembro';
  } else if (mes === 9) {
    mes = 'Outubro';
  } else if (mes === 10) {
    mes = 'Novembro';
  } else if (mes === 11) {
    mes = 'Dezembro';
  }

  if (semana === 0) {
    semana = 'Segunda-Feira';
  } else if (semana === 1) {
    semana = 'Terça-Feira';
  } else if (semana === 2) {
    semana = 'Quarta-Feira';
  } else if (semana === 3) {
    semana = 'Quinta-Feira';
  } else if (semana === 4) {
    semana = 'Sexta-Feira';
  } else if (semana === 5) {
    semana = 'Sábado';
  } else if (semana === 6) {
    semana = 'Domingo';
  }

  if (hora < 10) {
    hora = `0${data.getHours()}`;
  }
  if (min < 10) {
    min = `0${data.getMinutes()}`;
  }


  function horario() {
    const dataBox = document.querySelector("#hora");
    dataBox.innerHTML = `${dia} de ${mes} de ${ano}, ${semana} </br> ${hora}:${min} `;
  }
  //// HORARIO /////

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
