const transformarEmRealInput = (e) => {

  let valor = e.target.value.replace(/\D/g, "");

  if (valor === "") {
      e.target.value = "";
      return;
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2);
  e.target.value = "R$ " + valor
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

};

const valorParaNumber = (inputElement) => {

  if(!inputElement || !inputElement.value) return 0;

  let valor = inputElement.value;

  valor = valor
    .replace("R$", "")
    .replace(/\./g, "")
    .replace(",", ".")
    .trim();

    return parseFloat(valor) || 0;
}

const formatarParaMoeda = (valor) => {

  if(isNaN(valor)) return "R$ 0,00"

  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export {transformarEmRealInput, valorParaNumber, formatarParaMoeda};

/* Função utilizada para dentro da caixa do input no HTML ao digitar os valores permitir mostra em real
Ex: R$ 1.000,00 */