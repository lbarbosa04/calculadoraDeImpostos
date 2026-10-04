import * as apuracoesImpostos from '../Function/connect.js';

//ISS
const faturamentoIss = document.getElementById('servico');
faturamentoIss.addEventListener('input', apuracoesImpostos.transformarEmRealInput);

window.calculoIss = function() {
  const valorNumero = apuracoesImpostos.valorParaNumber(faturamentoIss);

  if(valorNumero === 0){
    document.getElementById('resultadoIss').innerText = '';
    return;
  }

 const valorIssCalculado = apuracoesImpostos.iss(valorNumero);
 const resultadoIssFormatado = apuracoesImpostos.formatarParaMoeda(valorIssCalculado);
 const resultadoIcmsElemento = document.getElementById('resulIss');
resultadoIcmsElemento.innerText = `ISS a pagar: ${resultadoIssFormatado}`;
};

//ICMS
const faturamentoIcms = document.getElementById('faturamentoIcms');
faturamentoIcms.addEventListener('input', apuracoesImpostos.transformarEmRealInput);

window.calculoIcms = function() {
  const valorNumero = apuracoesImpostos.valorParaNumber(faturamentoIcms);

  if(valorNumero === 0){
    document.getElementById('resultadoIcms').innerText = '';
    return;
  }

 const valorIcmsCalculado = apuracoesImpostos.apuracaoIcms(valorNumero);
 const resultadoIcmsFormatado = apuracoesImpostos.formatarParaMoeda(valorIcmsCalculado);
 const resultadoIcmsElemento = document.getElementById('resultadoIcms');
resultadoIcmsElemento.innerText = `ICMS a pagar: ${resultadoIcmsFormatado}`;
};

//PIS
const faturamentoPis = document.getElementById('valorPis');
faturamentoPis.addEventListener('input', apuracoesImpostos.transformarEmRealInput);

window.calculoPis = function() {
  const valorNumero = apuracoesImpostos.valorParaNumber(faturamentoPis);

  if(valorNumero === 0){
    document.getElementById('resultadoPis').innerText = '';
    return;
  }

 const valorPisCalculado = apuracoesImpostos.pis(valorNumero);
 const resultadoPisFormatado = apuracoesImpostos.formatarParaMoeda(valorPisCalculado);
 const resultadoPisElemento = document.getElementById('resultadoPis');
resultadoPisElemento.innerText = `PIS a pagar: ${resultadoPisFormatado}`;
};
