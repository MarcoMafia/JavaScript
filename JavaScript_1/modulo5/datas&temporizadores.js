function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;
  
    if (diferenca <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
        finalizado: true
      };
    }
  
    const segundosTotais = Math.floor(diferenca / 1000);
    const dias = Math.floor(segundosTotais / (3600 * 24));
    const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;
  
    return { dias, horas, minutos, segundos, finalizado: false };
  }
  
  function atualizarTemporizador() {
    const tempo = calcularTempoRestante(dataFutura);
    const temporizador = document.getElementById("temporizador");
  
    if (tempo.finalizado) {
      temporizador.textContent = "Tempo esgotado!";
      clearInterval(intervalo);
      return;
    }
  
    temporizador.textContent = 
      `${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`;
  }
  

  const dataFutura = new Date("2025-12-31T23:59:59");

  const intervalo = setInterval(atualizarTemporizador, 1000);

  setTimeout(atualizarTemporizador, 0);
  