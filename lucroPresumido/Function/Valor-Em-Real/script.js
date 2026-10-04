const inputFaturamento = document.getElementById("faturamentoIcms");
  inputFaturamento.addEventListener("input", function (e) {
  let valor = e.target.value.replace(/\D/g, "");

  if (valor === "") {
      e.target.value = "";
      return;
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2);
  e.target.value = valor
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

module.exports = inputFaturamento;

/* Função utilizada para dentro da caixa do input no HTML ao digitar os valores permitir mostra em real
Ex: R$ 1.000,00 */