function soma(n1, n2) {
    return n1 + n2;
};

function subtracao(n1, n2) {
    return n1 - n2;
};

const multiplicacao = (n1, n2) => {
    return n1 * n2;
  };

const divisao = (n1,n2) => {
    return n1/n2;
};

const mostraResultado = (n1, n2) => {
    console.log(`Soma entre ${n1} e ${n2}:`, soma(n1, n2));
    console.log(`Subtração entre ${n1} e ${n2}:`, subtracao(n1, n2));
    console.log(`Multiplicação entre ${n1} e ${n2}:`, multiplicacao(n1, n2));
    console.log(`Divisão entre ${n1} e ${n2}:`, divisao(n1, n2));
  };
mostraResultado (1, 2);